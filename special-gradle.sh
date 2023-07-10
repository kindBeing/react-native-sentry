#!/usr/bin/env bash

function set_bash_error_handling() {
  set -o errexit
  set -o errtrace
  set -o nounset
  set -o pipefail
}

function go_to_project_root_directory() {
  cd "$(git rev-parse --show-toplevel)"
}

function export_env_variables() {
#    export NODE_ENV="development"
  #  export NODE_ENV="production"

  export SENTRY_RELEASE="1.0.15"
  export SENTRY_DIST="android"
}

function run_android() {
  npm run android
}

function display_success_message() {
  local -r green_color_code='\033[1;32m'
  local -r default_color_code='\033[00m'
  echo -e "${green_color_code} Android startup ran successfully 🚀 ${default_color_code} \\n"
}

function main() {
  set_bash_error_handling
  go_to_project_root_directory
  export_env_variables
  run_android
  display_success_message
}

main
