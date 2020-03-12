#!/bin/bash
WORKING_DIR=$(pwd)
SENDER_DIR="$WORKING_DIR/sender-node"
RECEIVER_DIR="$WORKING_DIR/receiver-node"
AUDITOR_DIR="$WORKING_DIR/auditor-node"
BITCOIN_DIR="$WORKING_DIR/bitcoin-node"

echo "Script - alias generator for \"I tested Elements (part 2)\""
echo "Requirements: elementsd + elements-cli & bitcoind + bitcoin-cli"
echo "---------------------------------------------------------------------------------------------------"
echo "Copy and paste the following lines in your ~/.bashrc file. Then use \"source ~/.bashrc\" and enjoy!"
echo "---------------------------------------------------------------------------------------------------"

echo "alias senderd=\"elementsd -datadir=$SENDER_DIR\""
echo "alias sender-cli=\"elements-cli -datadir=$SENDER_DIR\""

echo "alias receiverd=\"elementsd -datadir=$RECEIVER_DIR\""
echo "alias receiver-cli=\"elements-cli -datadir=$RECEIVER_DIR\""

echo "alias auditord=\"elementsd -datadir=$AUDITOR_DIR\""
echo "alias auditor-cli=\"elements-cli -datadir=$AUDITOR_DIR\""

echo "alias btcd=\"bitcoind -datadir=$BITCOIN_DIR\""
echo "alias btc-cli=\"bitcoin-cli -datadir=$BITCOIN_DIR\""
echo "---------------------------------------------------------------------------------------------------"
