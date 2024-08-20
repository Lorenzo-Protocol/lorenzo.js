#!/usr/bin/env bash

# NOTE: This script is used for generating proto codes through buf.
# @cosmology/telescope can also be used instead for telescope codes.

set -euo pipefail

ROOT_PATH=$(git rev-parse --show-toplevel)
BUF_BIN=$(which buf)
PROTO_DIR=${ROOT_PATH}/proto
TMP_DIR=${ROOT_PATH}/tmp

COSMOS_TAG="v0.47.0"
LORENZO_TAG=${LORENZO_TAG:-""}
LORENZO_COMMIT=${LORENZO_COMMIT:-"dcfdeb89fc327be79bfd55f342fae01c4d1270ce"}
LORENZO_REPO="https://github.com/Lorenzo-Protocol/lorenzo"
ETHERMINT_TAG="v0.22.0-lorenzo-4"
ETHERMINT_REPO="https://github.com/Lorenzo-Protocol/ethermint"

if [ -z "${BUF_BIN}" ]; then
    echo "buf binary not found in path"
    exit 1
fi

echo "Entering ${PROTO_DIR}"
cd ${PROTO_DIR}

echo "Download lorenzo proto files..."
if [ -n "${LORENZO_TAG}" ]; then
    git clone --depth 1 --branch ${LORENZO_TAG} ${LORENZO_REPO} ${TMP_DIR} >/dev/null 2>&1
elif [ -n "${LORENZO_COMMIT}" ]; then
    git clone ${LORENZO_REPO} ${TMP_DIR} >/dev/null 2>&1
    cd ${TMP_DIR}
    git checkout ${LORENZO_COMMIT} >/dev/null 2>&1
    cd ${PROTO_DIR}
else
    echo "Error: Neither LORENZO_TAG nor LORENZO_COMMIT is specified"
    exit 1
fi
cp -rf ${TMP_DIR}/proto/lorenzo ${PROTO_DIR}
rm -rf ${TMP_DIR}

echo "Download ethermint proto files..."
git clone --depth 1 --branch ${ETHERMINT_TAG} ${ETHERMINT_REPO} ${TMP_DIR} >/dev/null 2>&1
cp -rf ${TMP_DIR}/proto/ethermint ${PROTO_DIR}
rm -rf ${TMP_DIR}

echo "Download cosmos-sdk proto files..."
${BUF_BIN} export buf.build/cosmos/cosmos-sdk:${COSMOS_TAG} -o ${PROTO_DIR}

# NOTE: buf generate is commented.
# echo "Generating protos code files..."
# ${BUF_BIN} generate --template buf.gen.ts.yaml