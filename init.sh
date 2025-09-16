#!/bin/bash

function cleanup {
  pnpm run services:down
  PID=$(lsof -t -i:3000)
  if [ -n "$PID" ]; then
    kill $PID
  fi
  exit 0
}

trap cleanup INT

if [ "$1" != "test" ]; then
  pnpm run services:up && pnpm run services:wait:database && pnpm run db:migrate && next dev --turbopack
else
  shift
  pnpm run services:up && pnpm run services:wait:database && pnpm run db:migrate && concurrently -n next,jest,playwright --hide next -k -s command "next dev --turbopack" "jest --runInBand --verbose $*" "playwright test"
  cleanup
fi
