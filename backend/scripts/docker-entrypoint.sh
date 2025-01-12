#!/bin/bash
set -e

echo "Checking environment..."
env | grep -v "PASSWORD\|KEY\|SECRET" || true

echo "Installing dependencies..."
npm ci

echo "Waiting for MongoDB..."
while ! nc -z mongodb 27017; do
  echo "MongoDB is unavailable - sleeping"
  sleep 2
done
echo "MongoDB is up!"

echo "Starting application..."
exec "$@"