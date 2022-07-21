CREATE DEFINER=`h5g8w9v3_DEVADM`@`%` PROCEDURE `UPDATE_USER_PASSWORD`(IN input_id INT, input_password VARCHAR(500))
BEGIN
DECLARE input_pw_reset VARCHAR(5);
DECLARE input_lock VARCHAR(5);
SET input_pw_reset = 'N';
SET input_lock = 'N';

UPDATE USER_ACCOUNTS 
SET
	password = input_password
WHERE 
	id = input_id;

UPDATE USER_ACCOUNT_STATUS 
SET
	pw_reset = input_pw_reset,
	locked =  input_lock
WHERE 
	id = input_id;
END