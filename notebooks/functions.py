import pandas as pd
import plotly.graph_objects as go
import matplotlib.pyplot as plt
import numpy as np

YEARS_STUDIED = ["2019", "2020", "2021", "2022", "2023"]
COLORS = ["#161d5c", "#43287f", "#742e9e", "#ab2db8", "#e61ecb"]

# DEFINITION OF USEFUL FUNCTIONS

PRICING_DATA = pd.read_excel("saas-pricing/datasets/pricingData.xlsx")

def get_saas_names():
  return tuple(set(PRICING_DATA['saasName'].to_list()))

def create_chart_data(objective_attribute):
  """
  Builds the data needed to create a dumbell chart to see the evolution of a field between 2019 and 2023
  """
  chart_data = {"line_x": [], "line_y": [], "2019": [], "2020": [], "2021": [], "2022": [], "2023": []}

  saas_names = get_saas_names()

  for saas in saas_names:

      max_value_of_saas = float("-inf")
      min_value_of_saas = float("+inf")

      for year in YEARS_STUDIED:

          try:
              saas_year_data = PRICING_DATA.loc[(PRICING_DATA.year == int(year)) & (PRICING_DATA.saasName == saas)][objective_attribute].values[0]
              if saas_year_data > max_value_of_saas:
                  max_value_of_saas = saas_year_data

              if saas_year_data < min_value_of_saas:
                  min_value_of_saas = saas_year_data

          except IndexError:
              saas_year_data = None

          chart_data[year].extend([saas_year_data])

      chart_data["line_x"].extend([
          max_value_of_saas,
          min_value_of_saas,
          None
      ])
      chart_data["line_y"].extend([saas, saas, None])

  return chart_data

def plot_dumbell_chart(chart_data, title, x_axis_name, include_title, font_size=20):
  """
  Plots a dumbell chart to see the evolution of a field between 2019 and 2023
  """

  data = data=[
          go.Scatter(
              x=chart_data["line_x"],
              y=chart_data["line_y"],
              mode="lines",
              showlegend=False,
              marker=dict(
                  color="grey"
              )
            )
          ]

  for i in range(len(YEARS_STUDIED)):

    year = YEARS_STUDIED[i]
    color = COLORS[i]

    data.append(
        go.Scatter(
              x=chart_data[year],
              y=get_saas_names(),
              mode="markers",
              name=year,
              marker=dict(
                  color=color,
                  size=10
              )

          )
    )

  fig = go.Figure(
      data=data
  )

  fig.update_layout(
      title=title if include_title else "",
      height=1000,
      legend_itemclick=False,
      xaxis_title=x_axis_name,
      font=dict(
        size=font_size
        ),
  )

  fig.show()

def plot_evolution_graph(attribute):
  fig, ax = plt.subplots(figsize=(12, 6))

  saas_names = get_saas_names()

  colors = plt.cm.viridis_r(
      [i / float(len(saas_names) - 1) for i in range(len(saas_names))]
  )

  for i, saas_name in enumerate(saas_names):
      saas_data = PRICING_DATA[PRICING_DATA['saasName'] == saas_name].sort_values(by='year')
      ax.plot(saas_data['year'], saas_data[attribute], label=saas_name, color=colors[i], marker='o')

  ax.set_xlabel('Year')
  ax.set_ylabel(attribute)
  ax.set_title(f'Evolution of {attribute} in Web SaaS Platforms')
  ax.legend(
      bbox_to_anchor=(1.05, 1),
      loc='upper left'
  )
  plt.xticks([2019, 2020, 2021, 2022, 2023])
  plt.grid(True)
  plt.show()

def build_ascii_table (table, **k):
    "Creates an ascii table by defining its content and headers"

    header = k.get('header', [])
    align = k.get('align', 'left')
    border = k.get('border', False)

    widths = []
    for i in range(max(map(len, table))): widths.append(max(max(map(len, [row[i] for row in table if len(row) > i])), len(header[i]) if len(header) > i else 0))

    printable = []

    if border:
        printrow = []
        for i in range(max(map(len, table))):
            if i > 0 and i < max(map(len, table)) - 1: printrow.append('─' * (widths[i] + 2))
            else: printrow.append('─' * (widths[i] + 1))
        printable.append('┌─' + '┬'.join(printrow) + '─┐')

    # header formatting
    if len(header) > 0:
        printrow = []
        for i in range(len(header)):
            assert header[i]
            if align == 'center': printrow.append(header[i].center(widths[i]))
            elif align == 'left': printrow.append(header[i].ljust(widths[i]))
            elif align == 'right': printrow.append(header[i].rjust(widths[i]))

        if border: printable.append('│ ' + ' │ '.join(printrow) + ' │')
        else: printable.append(' │ '.join(printrow))

        printrow = []
        for i in range(len(header)):
            if i > 0 and i < len(header) - 1: printrow.append('─' * (widths[i] + 2))
            else: printrow.append('─' * (widths[i] + 1))

        if border: printable.append('├─' + '┼'.join(printrow) + '─┤')
        else: printable.append('┼'.join(printrow))

    # table formatting
    for row in table:
        printrow = []
        for i in range(len(widths) - len(row)):
            row.append('')
        for i in range(len(row)):
            if align == 'center': printrow.append(row[i].center(widths[i]))
            elif align == 'left': printrow.append(row[i].ljust(widths[i]))
            elif align == 'right': printrow.append(row[i].rjust(widths[i]))

        if border: printable.append('│ ' + ' │ '.join(printrow) + ' │')
        else: printable.append(' │ '.join(printrow))

    if border:
        printrow = []
        for i in range(max(map(len, table))):
            if i > 0 and i < max(map(len, table)) - 1: printrow.append('─' * (widths[i] + 2))
            else: printrow.append('─' * (widths[i] + 1))
        printable.append('└─' + '┴'.join(printrow) + '─┘')

    return '\n'.join(printable)

def show_statistics(key_metric):

  """
  Calculates some statistics of the desired attribute
  """

  saas_names = get_saas_names()

  sum_of_variations = 0
  sum_of_first_year_values = 0

  if key_metric == "numberOfAddOns":
    headers = ["Saas Name", "Number of Add-Ons variation", "First entry's year", "Last entry's year", "First entry's value", "Last entry's value", "Had add-ons on first entry's year?"]
  else:
    headers = ["Saas Name", "Percentage of variation in " + key_metric, "First entry's year", "Last entry's year", "First entry's value", "Last entry's value"]
  rows = []

  for saas in saas_names:

      saas_entries = PRICING_DATA.loc[PRICING_DATA['saasName'] == saas].sort_values(by='year')

      first_year_entry = saas_entries.iloc[0]
      last_year_entry = saas_entries.iloc[-1]

      saas_metric_variation = last_year_entry[key_metric] - first_year_entry[key_metric]

      sum_of_variations += saas_metric_variation
      sum_of_first_year_values += first_year_entry[key_metric]

      if key_metric == "numberOfAddOns":
        rows.append((saas,f"{saas_metric_variation}",f"{first_year_entry['year']}", f"{last_year_entry['year']}", f"{first_year_entry[key_metric]}", f"{last_year_entry[key_metric]}", f"{first_year_entry[key_metric] != 0}"))
      else:
        try:
          rows.append((saas,f"{int(saas_metric_variation/first_year_entry[key_metric]*100)}%",f"{first_year_entry['year']}", f"{last_year_entry['year']}", f"{first_year_entry[key_metric]}", f"{last_year_entry[key_metric]}"))
        except Exception:
          rows.append((saas,f"{int(saas_metric_variation/1*100)}%",f"{first_year_entry['year']}", f"{last_year_entry['year']}", f"{first_year_entry[key_metric]}", f"{last_year_entry[key_metric]}"))

  ascii_table = build_ascii_table(rows, header=headers, align='center', border=True)

  print(ascii_table)

  average_variation = sum_of_variations / sum_of_first_year_values * 100

  print(f"\nThere has been, on average, an increase of {int(average_variation)}% in the {key_metric} metric.\n")

def show_evolution_of_common_features_percentage(fontsize):
  # Calculate the percentage of common features for each SaaS
  PRICING_DATA['PercentageCommonFeatures'] = (PRICING_DATA['numberOfCommonFeatures'] / PRICING_DATA['numberOfFeatures']) * 100

  # Find the oldest and newest entries of each SaaS
  oldest_entry = PRICING_DATA.loc[PRICING_DATA.groupby('saasName')['year'].idxmin()].reset_index(drop=True)
  newest_entry = PRICING_DATA.loc[PRICING_DATA.groupby('saasName')['year'].idxmax()].reset_index(drop=True)

  # Configure horizontal bars
  fig, ax = plt.subplots(figsize=(14, 10))

  # Bars height
  bar_height = 0.35

  # Positions for each SaaS
  saas_positions = np.arange(len(oldest_entry['saasName']))

  # Create bars for each SaaS
  ax.barh(saas_positions + bar_height/2, oldest_entry['PercentageCommonFeatures'], bar_height, color='skyblue', label='2019')
  ax.barh(saas_positions - bar_height/2, newest_entry['PercentageCommonFeatures'], bar_height, color='lightcoral', label='2023')

  # Configure labels, title and legend
  ax.set_xlabel('\nPERCENTAGE OF COMMON FEATURES', fontsize=fontsize+2)
  ax.set_title('Percentage of Common Features in Web SaaS Platforms (Oldest vs. Newest Entry)\n', fontsize=fontsize+4)
  plt.legend(fontsize=fontsize+2)
  ax.set_yticks(saas_positions)
  ax.set_yticklabels(oldest_entry['saasName'], fontsize=fontsize)
  ax.set_xticklabels([f'{int(val)}%' for val in ax.get_xticks()], fontsize=fontsize)

  # Automaticaly adjust the design to avoid superposition
  plt.tight_layout()

  # Show the graph
  plt.show()
