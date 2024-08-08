#!/usr/bin/env bash

# NOTE: Do not run this script directly.

set -euo pipefail

ROOT_PATH=$(git rev-parse --show-toplevel)
BUF_BIN=$(which buf)
PROTO_DIR=${ROOT_PATH}/proto

if [ -z "${BUF_BIN}" ]; then
    echo "buf binary not found in path"
    exit 1
fi

echo "Entering ${PROTO_DIR}"
cd ${PROTO_DIR}

echo "Generating protos code files..."
${BUF_BIN} generate --template buf.gen.ts.yaml

