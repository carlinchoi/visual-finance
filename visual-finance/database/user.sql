-- ********************************************************************************
-- This script creates the database users and grants them the necessary permissions
-- ********************************************************************************
--
CREATE USER visual_finance_owner
WITH PASSWORD 'visualfinance';

CREATE USER visual_finance_appuser
WITH PASSWORD 'visualfinance';

GRANT ALL
ON ALL TABLES IN SCHEMA public
TO final_capstone_owner;

GRANT ALL
ON ALL SEQUENCES IN SCHEMA public
TO final_capstone_owner;

GRANT SELECT, INSERT, UPDATE, DELETE
ON ALL TABLES IN SCHEMA public
TO final_capstone_appuser;

GRANT USAGE, SELECT
ON ALL SEQUENCES IN SCHEMA public
TO final_capstone_appuser;