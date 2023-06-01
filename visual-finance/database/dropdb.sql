-- **************************************************************
-- This script destroys the database and associated users
-- **************************************************************

-- The following line terminates any active connections to the database so that it can be destroyed
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'visual-finance';

DROP DATABASE visual-finance;

DROP USER visual-finance_owner;
DROP USER visual-finance_appuser;