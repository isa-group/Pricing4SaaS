#!/usr/bin/env python

from os import path
import yaml

file_name = "canva" + ".yml"
path = path.join("model", "yamls", file_name)

features = dict()

with open(path) as file:
    pricing = yaml.safe_load(file)
    file_features = pricing["features"]
    file_usage_limits = pricing["usageLimits"]


for feature_name in file_features.keys():
    has_description = file_features[feature_name].get("description") != None
    has_default_value = file_features[feature_name].get("defaultValue") != None
    has_value_type = file_features[feature_name].get("valueType") != None
    has_type = file_features[feature_name].get("type") != None

    if not has_description:
        raise ValueError(f"Feature: {feature_name} does not specify description")

    if not has_value_type:
        raise ValueError(f"Feature: {feature_name} does not specify valueType")

    if not has_default_value:
        raise ValueError(f"Feature: {feature_name} does not specify defaultValue")

    if not has_type:
        raise ValueError(f"Feature: {feature_name} does not specify type")

    if file_features[feature_name]["valueType"] == "BOOLEAN":
        features[feature_name] = {"value": file_features[feature_name]["defaultValue"]}
    elif file_features[feature_name]["valueType"] == "TEXT":
        features[feature_name] = {"value": file_features[feature_name]["defaultValue"]}
    else:
        features[feature_name] = {"value": file_features[feature_name]["defaultValue"]}

    if (
        file_features[feature_name]["type"] == "AUTOMATION"
        and file_features[feature_name].get("automationType") == None
    ):
        raise ValueError(
            f'Feature: "{feature_name} must have automationType attribute"'
        )

    elif (
        file_features[feature_name]["type"] == "INTEGRATION"
        and file_features[feature_name].get("integrationType") == None
    ):
        raise ValueError(
            f'Feature: "{feature_name} must have integrationType attribute"'
        )

    elif file_features[feature_name]["type"] == "PAYMENT" and not isinstance(
        file_features[feature_name].get("defaultValue"), list
    ):
        raise ValueError(
            f'Feature: "{feature_name}" is a payment feature a is not a list'
        )

for usage_limit in file_usage_limits.keys():
    if file_usage_limits[usage_limit].get("linkedFeatures") == None:
        raise ValueError(
            f'Usage limit: "{usage_limit}" has no attribute linkedFeatures'
        )

    if not isinstance(file_usage_limits[usage_limit]["linkedFeatures"], list):
        raise ValueError(
            f'Usage limit: "{usage_limit}" is not a list of linked features'
        )


print(yaml.dump(features, sort_keys=False))
