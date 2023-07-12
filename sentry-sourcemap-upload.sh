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
#  export NODE_ENV="development"
#  export NODE_ENV="production"
  export SENTRY_URL="https://sentry.io/"
  export SENTRY_DSN="https://7a11abd7255545ad8a20ea892ba89168@o4505410941878272.ingest.sentry.io/4505410943778816"
  export SENTRY_SAMPLE_RATE=1
  export SENTRY_ORG="self-1z"
  export SENTRY_PROJECT="project-milo"
  export SENTRY_AUTH_TOKEN="5d82d98be0d14a5987f28045c0354d84e05e62b6fe6245b6acce1bfcdb144b83"
  export SENTRY_RELEASE="1.0.25"
}

function generate_application_bundles() {
  dist_directory="dist"
  if [ -d "${dist_directory}" ]; then
      rm -rf "${dist_directory}"
      echo "Deleted the old dist directory."
  else
      echo "The directory does not exist or has already been deleted. Moving on..."
  fi
  npm run build:ios:dev
}

function xcode_build_debug_symbols() {
  npm run build:ios:debug
}

function sentry_release() {
  npm run sentry:upload:symbols
#  npm run sentry:upload:dev
}

function display_success_message() {
  local -r green_color_code='\033[1;32m'
  local -r default_color_code='\033[00m'
  echo -e "${green_color_code}Work ran successfully 🚀 ${default_color_code} \\n"
}

function main() {
  set_bash_error_handling
  go_to_project_root_directory
  export_env_variables
  generate_application_bundles
  xcode_build_debug_symbols
  sentry_release
  display_success_message
}

main
