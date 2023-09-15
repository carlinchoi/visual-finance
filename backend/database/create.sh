#!/bin/bash
export PGHOST=visualfinancedatabase.cnj1icqbobib.us-west-1.rds.amazonaws.com
export PGPASSWORD='gogosing'
BASEDIR=$(dirname $0)
DATABASE=visualfinance
psql -U postgres -f "$BASEDIR/dropdb.sql" &&
createdb -U postgres $DATABASE &&
psql -U postgres -d $DATABASE -f "$BASEDIR/schema.sql" &&
psql -U postgres -d $DATABASE -f "$BASEDIR/data.sql" &&
psql -U postgres -d $DATABASE -f "$BASEDIR/user.sql"
