CREATE DEFINER=`h5g8w9v3_DEVADM`@`%` PROCEDURE `GET_USER_AUTHENTICATION`( IN input_username VARCHAR(75), IN input_password VARCHAR(250))
BEGIN
SELECT  status.id, locked, pw_reset, license_key 
FROM 
		SYSTEM_USER_ACCOUNT_STATUS AS status
        
INNER JOIN SYSTEM_USER_ACCOUNTS AS
		users on status.id = users.id
WHERE 
		users.username = input_username
AND
		users.password = input_password;

END