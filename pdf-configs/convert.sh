#!/usr/bin/env bash

sed -E '
s/^:::details[[:space:]]+(.*)[[:space:]]+\{open\}/### \1/
 /^:::[[:space:]]*$/d
' "$1"
