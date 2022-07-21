CREATE DEFINER=`h5g8w9v3_DEVADM`@`%` PROCEDURE `INSERT_PROFILE_THREE_PASSENGER`(

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
IN input_emergency_contact_firstname varchar(75), 
IN input_emergency_contact_lastname varchar(75),
IN input_emergency_contact_relationship varchar(25), 
IN input_emergency_contact_phone varchar(15),

IN input_passport_id varchar(75), 

IN input_mobile varchar(15), 
IN input_home_phone varchar(15), 
IN input_work_phone varchar(15), 
IN input_email_address varchar(145), 
IN input_first_name varchar(75), 
IN input_middle_name varchar(75),
IN input_last_name varchar(75), 
IN input_gender varchar(6),
IN input_country_of_birth varchar(80),
IN input_nationality varchar(80),
IN input_date_of_birth date,
IN input_document_type varchar(25), 
IN input_immigration_status varchar(45),
IN input_expiration_date date,
IN input_photo_upload text, 
IN input_passport_upload text,

IN input2_passport_id varchar(75), 

IN input2_number_of_visits int(11), 
IN input2_mobile varchar(15), 
IN input2_home_phone varchar(15), 
IN input2_work_phone varchar(15), 
IN input2_email_address varchar(145), 
IN input2_first_name varchar(75), 
IN input2_middle_name varchar(75),
IN input2_last_name varchar(75), 
IN input2_gender varchar(6),
IN input2_country_of_birth varchar(80),
IN input2_nationality varchar(80),
IN input2_date_of_birth date,
IN input2_document_type varchar(25), 
IN input2_immigration_status varchar(45),
IN input2_expiration_date date,
IN input2_photo_upload text, 
IN input2_passport_upload text,

IN input3_passport_id varchar(75), 

IN input3_number_of_visits int(11), 
IN input3_mobile varchar(15), 
IN input3_home_phone varchar(15), 
IN input3_work_phone varchar(15), 
IN input3_email_address varchar(145), 
IN input3_first_name varchar(75), 
IN input3_middle_name varchar(75),
IN input3_last_name varchar(75), 
IN input3_gender varchar(6),
IN input3_country_of_birth varchar(80),
IN input3_nationality varchar(80),
IN input3_date_of_birth date,
IN input3_document_type varchar(25), 
IN input3_immigration_status varchar(45),
IN input3_expiration_date date,
IN input3_photo_upload text, 
IN input3_passport_upload text

)
BEGIN

DECLARE share_country varchar(100);
DECLARE share_address varchar(75);
DECLARE share_address_cont varchar(75);
DECLARE share_city_town varchar(75);
DECLARE share_state_province varchar(75);
DECLARE share_zip_postal_code varchar(10);
DECLARE share_arrival_port varchar(80);
DECLARE share_mode_of_travel varchar(25);
DECLARE share_country_of_embarcation varchar(80);
DECLARE share_port_of_embarcation varchar(80);
DECLARE share_airline_name varchar(45);
DECLARE share_flight_number varchar(25);
DECLARE share_vessel_name varchar(50);
DECLARE share_vessel_number varchar(25);
DECLARE share_date_of_arrival date;
DECLARE share_date_of_departure date;
DECLARE share_emergency_contact_firstname varchar(75);
DECLARE share_emergency_contact_lastname varchar(75);
DECLARE share_emergency_contact_relationship varchar(25);
DECLARE share_emergency_contact_phone varchar(15);


DECLARE share_passenger_reg_amount int;
DECLARE share_passport_id varchar(75);

SET share_passenger_reg_amount = input_passenger_reg_amount;
SET share_passport_id = input_passport_id;


SET share_country = input_country;
SET share_address = input_address;
SET share_address_cont = input_address_cont;
SET share_city_town = input_city_town;
SET share_state_province = input_state_province;
SET share_zip_postal_code = input_zip_postal_code;
SET share_arrival_port = input_arrival_port;
SET share_mode_of_travel = input_mode_of_travel;
SET share_country_of_embarcation = input_country_of_embarcation ;
SET share_port_of_embarcation = input_port_of_embarcation;
SET share_airline_name = input_airline_name;
SET share_flight_number = input_flight_number;
SET share_vessel_name = input_vessel_name;
SET share_vessel_number = input_vessel_number;
SET share_date_of_arrival = input_date_of_arrival;
SET share_date_of_departure = input_date_of_departure;
SET share_emergency_contact_firstname = input_emergency_contact_firstname;
SET share_emergency_contact_lastname = input_emergency_contact_lastname;
SET share_emergency_contact_relationship = input_emergency_contact_relationship;
SET share_emergency_contact_phone = input_emergency_contact_phone;


INSERT INTO PASSENGER_ADDRESS
(passport_id, country, address, address_cont, city_town, state_province, zip_postal_code)
VALUES
(input_passport_id, input_country, input_address, input_address_cont, input_city_town, 
input_state_province, input_zip_postal_code);

INSERT INTO PASSENGER_ADDRESS
(passport_id, country, address, address_cont, city_town, state_province, zip_postal_code)
VALUES
(input2_passport_id, share_country, share_address, share_address_cont, share_city_town, 
share_state_province, share_zip_postal_code);

INSERT INTO PASSENGER_ADDRESS
(passport_id, country, address, address_cont, city_town, state_province, zip_postal_code)
VALUES
(input3_passport_id, share_country, share_address, share_address_cont, share_city_town, 
share_state_province, share_zip_postal_code);


INSERT INTO PASSENGER_ARRIVAL_DEPARTURE_INFO
(number_of_visits, passport_id, arrival_port, mode_of_travel, country_of_embarcation,
port_of_embarcation, airline_name,flight_number,vessel_name,vessel_number,date_of_arrival,
date_of_departure)
VALUES
(input_number_of_visits, input_passport_id, input_arrival_port, input_mode_of_travel, 
input_country_of_embarcation, input_port_of_embarcation, input_airline_name, input_flight_number,
input_vessel_name, input_vessel_number, input_date_of_arrival, input_date_of_departure);

INSERT INTO PASSENGER_ARRIVAL_DEPARTURE_INFO
(number_of_visits, passport_id, arrival_port, mode_of_travel, country_of_embarcation,
port_of_embarcation, airline_name,flight_number,vessel_name,vessel_number,date_of_arrival,
date_of_departure)
VALUES
(input2_number_of_visits, input2_passport_id, share_arrival_port, share_mode_of_travel, 
share_country_of_embarcation, share_port_of_embarcation, share_airline_name, share_flight_number,
share_vessel_name, share_vessel_number, share_date_of_arrival, share_date_of_departure);

INSERT INTO PASSENGER_ARRIVAL_DEPARTURE_INFO
(number_of_visits, passport_id, arrival_port, mode_of_travel, country_of_embarcation,
port_of_embarcation, airline_name,flight_number,vessel_name,vessel_number,date_of_arrival,
date_of_departure)
VALUES
(input3_number_of_visits, input3_passport_id, share_arrival_port, share_mode_of_travel, 
share_country_of_embarcation, share_port_of_embarcation, share_airline_name, share_flight_number,
share_vessel_name, share_vessel_number, share_date_of_arrival, share_date_of_departure);

INSERT INTO PASSENGER_CONTACT_INFORMATION
(passport_id, mobile, home_phone, work_phone, email_address, emergency_contact_firstname, 
emergency_contact_lastname, emergency_contact_relationship, emergency_contact_phone)
VALUES
(input_passport_id, input_mobile, input_home_phone, input_work_phone, input_email_address, input_emergency_contact_firstname, 
input_emergency_contact_lastname, input_emergency_contact_relationship, input_emergency_contact_phone);

INSERT INTO PASSENGER_CONTACT_INFORMATION
(passport_id, mobile, home_phone, work_phone, email_address, emergency_contact_firstname, 
emergency_contact_lastname, emergency_contact_relationship, emergency_contact_phone)
VALUES
(input2_passport_id, input2_mobile, input2_home_phone, input2_work_phone, input2_email_address, share_emergency_contact_firstname, 
share_emergency_contact_lastname, share_emergency_contact_relationship, share_emergency_contact_phone);

INSERT INTO PASSENGER_CONTACT_INFORMATION
(passport_id, mobile, home_phone, work_phone, email_address, emergency_contact_firstname, 
emergency_contact_lastname, emergency_contact_relationship, emergency_contact_phone)
VALUES
(input3_passport_id, input3_mobile, input3_home_phone, input3_work_phone, input3_email_address, share_emergency_contact_firstname, 
share_emergency_contact_lastname, share_emergency_contact_relationship, share_emergency_contact_phone);

INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, date_of_birth, country_of_birth, nationality, passport_reg_id)
VALUES
(input_first_name, input_middle_name, input_last_name, input_gender, input_date_of_birth, input_country_of_birth,
input_nationality, share_passport_id);

INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, date_of_birth, country_of_birth, nationality, passport_reg_id)
VALUES
(input2_first_name, input2_middle_name, input2_last_name, input2_gender, input2_date_of_birth, input2_country_of_birth,
input2_nationality, share_passport_id);

INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, date_of_birth, country_of_birth, nationality, passport_reg_id)
VALUES
(input3_first_name, input3_middle_name, input3_last_name, input3_gender, input3_date_of_birth, input3_country_of_birth,
input3_nationality, share_passport_id);

INSERT INTO PASSENGER_TRAVEL_DOCUMENTS
(passport_id, document_type, immigration_status, expiration_date)
VALUES
(input_passport_id, document_type, immigration_status, expiration_date);

INSERT INTO PASSENGER_TRAVEL_DOCUMENTS
(passport_id, document_type, immigration_status, expiration_date)
VALUES
(input2_passport_id, input2_document_type, input2_immigration_status, input2_expiration_date);

INSERT INTO PASSENGER_TRAVEL_DOCUMENTS
(passport_id, document_type, immigration_status, expiration_date)
VALUES
(input3_passport_id, input3_document_type, input3_immigration_status, input3_expiration_date);

INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id, passenger_reg_amount)
VALUES
(share_passport_id, input_passport_id, input_passenger_reg_amount);

INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id, passenger_reg_amount)
VALUES
(share_passport_id, input2_passport_id, share_passenger_reg_amount);

INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id, passenger_reg_amount)
VALUES
(share_passport_id, input3_passport_id, share_passenger_reg_amount);


INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id)
VALUES
(input_photo_upload, input_passport_upload, input_passport_id);

INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id)
VALUES
(input2_photo_upload, input2_passport_upload, input2_passport_id);

INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id)
VALUES
(input3_photo_upload, input3_passport_upload, input3_passport_id);

END