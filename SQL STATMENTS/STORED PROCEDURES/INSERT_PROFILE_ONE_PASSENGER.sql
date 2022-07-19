CREATE DEFINER=`h5g8w9v3_DEVADM`@`%` PROCEDURE `INSERT_PROFILE_ONE_PASSENGER`(

IN input_country VARCHAR(100),
IN input_address VARCHAR(75),
IN input_address_cont VARCHAR(75),
IN input_city_town VARCHAR(75),
IN input_state_province VARCHAR(75),
IN input_zip_postal_code VARCHAR(10),

IN input_number_of_visits INT(11), 

IN input_arrival_port VARCHAR(80), 
IN input_mode_of_travel VARCHAR(25), 
IN input_country_of_embarcation VARCHAR(80), 
IN input_port_of_embarcation VARCHAR(80),
IN input_airline_name VARCHAR(45), 
IN input_flight_number VARCHAR(25), 
IN input_vessel_name VARCHAR(50), 
IN input_vessel_number VARCHAR(25), 
IN input_date_of_arrival DATE, 
IN input_date_of_departure DATE,


IN input_mobile VARCHAR(15), 
IN input_home_phone VARCHAR(15), 
IN input_work_phone VARCHAR(15), 
IN input_email_address VARCHAR(145), 
IN input_emergency_contact_firstname VARCHAR(75), 
IN input_emergency_contact_lastname VARCHAR(75),
IN input_emergency_contact_relationship VARCHAR(25), 
IN input_emergency_contact_phone VARCHAR(15),

IN input_first_name VARCHAR(75), 
IN input_middle_name VARCHAR(75),
IN input_last_name VARCHAR(75), 
IN input_gender VARCHAR(6),
IN input_country_of_birth VARCHAR(80),
IN input_nationality VARCHAR(80),


IN input_passport_id VARCHAR(75), 
IN input_document_type VARCHAR(25), 
IN input_immigration_status VARCHAR(45),
IN input_expiration_date DATE,

IN input_photo_upload TEXT, 
IN input_passport_upload TEXT


)
BEGIN

DECLARE share_passport_id VARCHAR(75);
SET share_passport_id = input_passport_id;

INSERT INTO PASSENGER_ADDRESS
(passport_id, country, address, address_cont, city_town, state_province, zip_postal_code)
VALUES
(share_passport_id, input_country, input_address, input_address_cont, input_city_town, 
input_state_province, input_zip_postal_code);


INSERT INTO PASSENGER_ARRIVAL_DEPARTURE_INFO
(number_of_visits, passport_id, arrival_port, mode_of_travel, country_of_embarcation,
port_of_embarcation, airline_name,flight_number,vessel_name,vessel_number,date_of_arrival,
date_of_departure)
VALUES
(input_number_of_visits, share_passport_id, input_arrival_port, input_mode_of_travel, 
input_country_of_embarcation, input_port_of_embarcation, input_airline_name, input_flight_number,
input_vessel_name, input_vessel_number, input_date_of_arrival, input_date_of_departure);


INSERT INTO PASSENGER_CONTACT_INFORMATION
(passport_id, mobile, home_phone, work_phone, email_address, emergency_contact_firstname, 
emergency_contact_lastname, emergency_contact_relationship, emergency_contact_phone)
VALUES
(share_passport_id, input_mobile, input_home_phone, input_work_phone, input_email_address, input_emergency_contact_firstname, 
input_emergency_contact_lastname, input_emergency_contact_relationship, input_emergency_contact_phone);


INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, country_of_birth, nationality,
passport_reg_id)
VALUES
(input_first_name, input_middle_name, input_last_name, input_gender, input_country_of_birth,
 input_nationality, share_passport_id);


INSERT INTO PASSENGER_TRAVEL_DOCUMENTS
(passport_id, document_type, immigration_status, expiration_date)
VALUES
(input_passport_id, input_document_type, input_immigration_status, input_expiration_date);


INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id)
VALUES
(share_passport_id, input_passport_id);


INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id)
VALUES
(input_photo_upload, input_passport_upload, input_passport_id);


INSERT INTO	SYSTEM_QUEUES
(passport_id)
VALUES
(input_passport_id);

END