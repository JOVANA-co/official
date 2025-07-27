#!/bin/bash
set -e

env="$1"

# Set environment based on the value of $var
if [ "$env" = "-d" ]; then
    environment="development"
elif [ "$env" = "-s" ]; then
    environment="staging"
elif [ "$env" = "-p" ]; then
    environment="production"
else
    environment="development"
fi

env_file="envs/.env.$environment"

# List of filenames to check
files=(".env" ".env.$environment" ".env.local" "envs/.env.$environment.local")

# Iterate over each filename
for file in "${files[@]}"; do
    # Check if the file exists
    if [ -f "envs/$file" ]; then
        source "envs/$file"
        export GOOGLE_SERVICE_ACCOUNT_BASE64=$GOOGLE_SERVICE_ACCOUNT_BASE64
        export GOOGLE_SHEET_ID=$GOOGLE_SHEET_ID
    fi
done

echo "Running locale script in $environment environment"

# Execute the node command directly instead of calling pnpm locale
node --import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));' scripts/locale/index.ts