#!/bin/bash
set -e

echo "Performing health check..."
if nc -z localhost 3001; then
  echo "Service is up"
  exit 0
fi

echo "Service is down"
exit 1