CREATE DEFINER=`h5g8w9v3_DEVADM`@`%` PROCEDURE `UPDATE_PROFILE_ONE_PASSENGER`(

IN input_country varchar(100),
IN input_address varchar(75),
IN input_address_cont varchar(75),
IN input_city_town varchar(75),
IN input_state_province varchar(75),
IN input_zip_postal_code varchar(10),

IN input_number_of_visits int(11), 

IN input_arrival_port varchar(80), 
IN input_mode_of_travel varchar(25), 
IN input_country_of_embarcation varchar(80), 
IN input_port_of_embarcation varchar(80),
IN input_airline_name varchar(45), 
IN input_flight_number varchar(25), 
IN input_vessel_name varchar(50), 
IN input_vessel_number varchar(25), 
IN input_date_of_arrival date, 
IN input_date_of_departure date,

IN input_mobile varchar(15), 
IN input_home_phone varchar(15), 
IN input_work_phone varchar(15), 
IN input_email_address varchar(145), 
IN input_emergency_contact_firstname varchar(75), 
IN input_emergency_contact_lastname varchar(75),
IN input_emergency_contact_relationship varchar(25), 
IN input_emergency_contact_phone varchar(15),

IN input_first_name varchar(75), 
IN input_middle_name varchar(75),
IN input_last_name varchar(75), 
IN input_gender varchar(6),
IN input_country_of_birth varchar(80),
IN input_nationality varchar(80),

IN input_passport_id varchar(75), 
IN input_document_type varchar(25), 
IN input_immigration_status varchar(45),
IN input_expiration_date date,

IN input_photo_upload text, 
IN input_passport_upload text
)
BEGIN

DECLARE share_passport_id varchar(75);
SET share_passport_id = input_passport_id;

UPDATE PASSENGER_ADDRESS SET
	country = input_country,
    address = input_address,
    address_cont = input_address_cont,
    city_town = input_city_town,
    state_province = input_state_province,
    zip_postal_code = input_zip_postal_code
WHERE 
	passport_id = input_passport_id;      
   
   
UPDATE PASSENGER_ARRIVAL_DEPARTURE_INFO SET 
	number_of_visits = input_number_of_visits,
	arrival_port = input_arrival_port,
	mode_of_travel = input_mode_of_travel,
	country_of_embarcation = input_country_of_embarcation,
	port_of_embarcation =input_port_of_embarcation,
	airline_name = input_airline_name,
	flight_number = input_flight_number,
	vessel_name = input_vessel_name,
	vessel_number = input_vessel_number,
	date_of_arrival = input_date_of_arrival,
	date_of_departure = input_date_of_departure   
WHERE 
	passport_id = input_passport_id;


UPDATE PASSENGER_CONTACT_INFORMATION SET
	mobile = input_mobile,
	home_phone = input_home_phone,
	work_phone = input_work_phone,
	email_address = input_email_address,
	emergency_contact_firstname = input_emergency_contact_firstname,
	emergency_contact_lastname = input_emergency_contact_lastname,
	emergency_contact_relationship =input_emergency_contact_relationship,
	emergency_contact_phone =input_emergency_contact_phone
WHERE 
	passport_id = input_passport_id;


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


END