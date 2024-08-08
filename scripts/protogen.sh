#!/usr/bin/env bash

# NOTE: Do not run this script directly.

set -euo pipefail

ROOT_PATH=$(git rev-parse --show-toplevel)
BUF_BIN=$(which buf)
PROTO_DIR=${ROOT_PATH}/proto
TMP_DIR=${ROOT_PATH}/tmp

COSMOS_TAG="v0.47.0"
LORENZO_TAG="v2.0.0-rc2"
LORENZO_REPO="https://github.com/Lorenzo-Protocol/lorenzo"

if [ -z "${BUF_BIN}" ]; then
    echo "buf binary not found in path"
    exit 1
fi

echo "Entering ${PROTO_DIR}"
cd ${PROTO_DIR}

echo "Download lorenzo proto files..."
git clone --depth 1 --branch ${LORENZO_TAG} ${LORENZO_REPO} ${TMP_DIR} >/dev/null 2>&1
cp -rf ${TMP_DIR}/proto/lorenzo ${PROTO_DIR}
rm -rf ${TMP_DIR}

echo "Download cosmos-sdk proto files..."
${BUF_BIN} export buf.build/cosmos/cosmos-sdk:v0.47.0 -o ${PROTO_DIR}

echo "Generating protos code files..."
${BUF_BIN} generate --template buf.gen.ts.yaml
