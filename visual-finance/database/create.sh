#!/bin/bash
export PGPASSWORD='gogosing'
BASEDIR=$(dirname $0)
DATABASE=visual-finance
psql -U postgres -f "$BASEDIR/dropdb.sql" &&
createdb -U postgres $DATABASE &&
psql -U postgres -d $DATABASE -f "$BASEDIR/stock.sql" &&
psql -U postgres -d $DATABASE -f "$BASEDIR/user.sql"
