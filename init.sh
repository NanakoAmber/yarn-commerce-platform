#!/usr/bin/env bash
set -euo pipefail

echo "Yarn Commerce Platform bootstrap"

if [[ ! -d node_modules ]]; then
  npm ci
fi

npm run verify

echo
echo "Git status"
git status --short --branch
