CREATE DEFINER=`h5g8w9v3_DEVADM`@`%` PROCEDURE `INSERT_PROFILE_PASSENGER`(
# SQL STORED PROCEDURE CREATED BY TAJH J. SEYMOUR
# ACCEPTED INPUTS FROM PHP/.NET APPLICATION
IN input_passenger_reg_amount INT,

IN input_passenger_record_id VARCHAR(150),

#PASSENGER_ADDRESS
IN input_country VARCHAR(100),
IN input_address VARCHAR(75),
IN input_address_cont VARCHAR(75),
IN input_city_town VARCHAR(75),
IN input_state_province VARCHAR(75),
IN input_zip_postal_code VARCHAR(10),

#PASSENGER_ARRIVAL_DEPARTURE_INFO
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
IN input_emergency_contact_firstname VARCHAR(75), 
IN input_emergency_contact_lastname VARCHAR(75),
IN input_emergency_contact_relationship VARCHAR(25), 
IN input_emergency_contact_phone VARCHAR(15),

#PASSENGER_LOCAL_ADDRESS_INFO
IN input_trip_purpose VARCHAR(75), 
IN input_type_of_accommodation VARCHAR(75),
IN input_hotel_name VARCHAR(45),
IN input_local_city VARCHAR(45),
IN input_local_address VARCHAR(75),
IN input_sponsor_first_name VARCHAR(75),
IN input_sponsor_last_name VARCHAR(75),
IN input_sponsor_phone_number VARCHAR(45),

IN input_passport_id VARCHAR(75), 

#PASSENGER_CONTACT_INFORMATION
IN input_mobile VARCHAR(15), 
IN input_home_phone VARCHAR(15), 
IN input_work_phone VARCHAR(15), 
IN input_email_address VARCHAR(145), 
IN input_first_name VARCHAR(75), 
IN input_middle_name VARCHAR(75),
IN input_last_name VARCHAR(75), 
IN input_gender VARCHAR(6),
IN input_country_of_birth VARCHAR(80),
IN input_nationality VARCHAR(80),
IN input_date_of_birth DATE,
IN input_document_type VARCHAR(25), 
IN input_immigration_status VARCHAR(45),
IN input_expiration_date DATE,
IN input_photo_upload TEXT, 
IN input_passport_upload TEXT,

IN input2_passport_id VARCHAR(75), 

IN input2_number_of_visits INT(11), 
IN input2_mobile VARCHAR(15), 

IN input2_email_address VARCHAR(145), 
IN input2_first_name VARCHAR(75), 
IN input2_middle_name VARCHAR(75),
IN input2_last_name VARCHAR(75), 
IN input2_gender VARCHAR(6),
IN input2_country_of_birth VARCHAR(80),
IN input2_nationality VARCHAR(80),
IN input2_date_of_birth DATE,
IN input2_document_type VARCHAR(25), 
IN input2_immigration_status VARCHAR(45),
IN input2_expiration_date DATE,
IN input2_photo_upload TEXT, 
IN input2_passport_upload TEXT,

IN input3_passport_id varchar(75), 

IN input3_number_of_visits int(11), 
IN input3_mobile varchar(15), 
#IN input3_home_phone varchar(15), 
#IN input3_work_phone varchar(15), 
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
IN input3_passport_upload text,

IN input4_passport_id varchar(75), 

IN input4_number_of_visits int(11), 
IN input4_mobile varchar(15), 
#IN input4_home_phone varchar(15), 
#IN input4_work_phone varchar(15), 
IN input4_email_address varchar(145), 
IN input4_first_name varchar(75), 
IN input4_middle_name varchar(75),
IN input4_last_name varchar(75), 
IN input4_gender varchar(6),
IN input4_country_of_birth varchar(80),
IN input4_nationality varchar(80),
IN input4_date_of_birth date,
IN input4_document_type varchar(25), 
IN input4_immigration_status varchar(45),
IN input4_expiration_date date,
IN input4_photo_upload text, 
IN input4_passport_upload text


)
BEGIN 

DECLARE share_country VARCHAR(100);
DECLARE share_address VARCHAR(75);
DECLARE share_address_cont VARCHAR(75);
DECLARE share_city_town VARCHAR(75);
DECLARE share_state_province VARCHAR(75);
DECLARE share_zip_postal_code VARCHAR(10);
DECLARE share_arrival_port VARCHAR(80);
DECLARE share_mode_of_travel VARCHAR(25);
DECLARE share_country_of_embarcation VARCHAR(80);
DECLARE share_port_of_embarcation VARCHAR(80);
DECLARE share_airline_name VARCHAR(45);
DECLARE share_flight_number VARCHAR(25);
DECLARE share_vessel_name VARCHAR(50);
DECLARE share_vessel_number VARCHAR(25);
DECLARE share_date_of_arrival DATE;
DECLARE share_date_of_departure DATE;
DECLARE share_emergency_contact_firstname VARCHAR(75);
DECLARE share_emergency_contact_lastname VARCHAR(75);
DECLARE share_emergency_contact_relationship VARCHAR(25);
DECLARE share_emergency_contact_phone VARCHAR(15);
DECLARE share_home_phone VARCHAR(15);
DECLARE share_work_phone VARCHAR(15);

DECLARE share_trip_purpose VARCHAR(75); 
DECLARE share_type_of_accommodation VARCHAR(75);
DECLARE share_hotel_name VARCHAR(45);
DECLARE share_local_city VARCHAR(45);
DECLARE share_local_address VARCHAR(75);
DECLARE share_sponsor_first_name VARCHAR(75);
DECLARE share_sponsor_last_name VARCHAR(75);
DECLARE share_sponsor_phone_number VARCHAR(45);


DECLARE add_passenger_reg_amount INT;
DECLARE share_passport_id VARCHAR(75);
DECLARE share_passenger_record_id VARCHAR(150);

SET add_passenger_reg_amount = "1";

SET share_passport_id = input_passport_id;
SET	share_passenger_record_id = input_passenger_record_id;

SET share_trip_purpose = input_trip_purpose;
SET share_type_of_accommodation = input_type_of_accommodation;
SET share_hotel_name = input_hotel_name;
SET share_local_city = input_local_city;
SET share_local_address = input_local_address;
SET share_sponsor_first_name = input_sponsor_first_name;
SET share_sponsor_last_name = input_sponsor_last_name;
SET share_sponsor_phone_number = input_sponsor_phone_number;

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


IF input_passenger_reg_amount = 1
THEN


INSERT INTO PASSENGER_ADDRESS
(passport_id, country, address, address_cont, city_town, state_province, zip_postal_code)
VALUES
(input_passport_id, input_country, input_address, input_address_cont, input_city_town, 
input_state_province, input_zip_postal_code);

INSERT INTO PASSENGER_ARRIVAL_DEPARTURE_INFO
(number_of_visits, passport_id, arrival_port, mode_of_travel, country_of_embarcation,
port_of_embarcation, airline_name,flight_number,vessel_name,vessel_number,date_of_arrival,
date_of_departure)
VALUES
(input_number_of_visits, input_passport_id, input_arrival_port, input_mode_of_travel, 
input_country_of_embarcation, input_port_of_embarcation, input_airline_name, input_flight_number,
input_vessel_name, input_vessel_number, input_date_of_arrival, input_date_of_departure);

INSERT INTO PASSENGER_CONTACT_INFORMATION
(passport_id, mobile, home_phone, work_phone, email_address, emergency_contact_firstname, 
emergency_contact_lastname, emergency_contact_relationship, emergency_contact_phone)
VALUES
(input_passport_id, input_mobile, input_home_phone, input_work_phone, input_email_address, input_emergency_contact_firstname, 
input_emergency_contact_lastname, input_emergency_contact_relationship, input_emergency_contact_phone);

INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, country_of_birth, nationality,
input_passport_id, passenger_record_id)
VALUES
(input_first_name, input_middle_name, input_last_name, input_gender, input_country_of_birth,
input_nationality, input_passport_id, input_passenger_record_id);

INSERT INTO PASSENGER_LOCAL_ADDRESS_INFO
(trip_purpose, type_of_accommodation, hotel_name, local_city, local_address, sponsor_first_name, sponsor_last_name,
sponsor_phone_number, passport_id, passenger_record_id)
VALUES
(input_trip_purpose, input_type_of_accommodation, input_hotel_name, input_local_city, input_local_address, input_sponsor_first_name, input_sponsor_last_name,
input_sponsor_phone_number, input_passport_id, input_passenger_record_id);

INSERT INTO PASSENGER_TRAVEL_DOCUMENTS
(passport_id, document_type, immigration_status, expiration_date)
VALUES
(input_passport_id, document_type, immigration_status, expiration_date);

INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id, passenger_reg_amount, passenger_record_id)
VALUES
(share_passport_id, input_passport_id, input_passenger_reg_amount, input_passenger_record_id);

INSERT INTO	SYSTEM_QUEUES
(passport_id, passenger_record_id)
VALUES
(input_passport_id, input_passenger_record_id);

INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id, passenger_record_id )
VALUES
(input_photo_upload, input_passport_upload, input_passport_id, input_passenger_record_id);


ELSEIF input_passenger_reg_amount = 2
THEN


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
(input2_passport_id, input2_mobile, share_home_phone, share_work_phone, input2_email_address, share_emergency_contact_firstname, 
share_emergency_contact_lastname, share_emergency_contact_relationship, share_emergency_contact_phone);


INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, country_of_birth, nationality,
passport_id, passenger_record_id)
VALUES
(input_first_name, input_middle_name, input_last_name, input_gender, input_country_of_birth,
input_nationality, input_passport_id, input_passenger_record_id);

INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, date_of_birth, country_of_birth, nationality, passport_id,
 passenger_record_id)
VALUES
(input2_first_name, input2_middle_name, input2_last_name, input2_gender, input2_date_of_birth, input2_country_of_birth,
input2_nationality, input2_passport_id, share_passenger_record_id);

INSERT INTO PASSENGER_LOCAL_ADDRESS_INFO
(trip_purpose, type_of_accommodation, hotel_name, local_city, local_address, sponsor_first_name, sponsor_last_name,
sponsor_phone_number, passport_id, passenger_record_id)
VALUES
(input_trip_purpose, input_type_of_accommodation, input_hotel_name, input_local_city, input_local_address, input_sponsor_first_name, input_sponsor_last_name,
input_sponsor_phone_number, input_passport_id, input_passenger_record_id);

INSERT INTO PASSENGER_LOCAL_ADDRESS_INFO
(trip_purpose, type_of_accommodation, hotel_name, local_city, local_address, sponsor_first_name, sponsor_last_name,
sponsor_phone_number, passport_id, passenger_record_id)
VALUES
(share_trip_purpose, share_type_of_accommodation, share_hotel_name, share_local_city, share_local_address, share_sponsor_first_name, share_sponsor_last_name,
share_sponsor_phone_number, input2_passport_id, share_passenger_record_id);

INSERT INTO PASSENGER_TRAVEL_DOCUMENTS
(passport_id, document_type, immigration_status, expiration_date)
VALUES
(input_passport_id, document_type, immigration_status, expiration_date);

INSERT INTO PASSENGER_TRAVEL_DOCUMENTS
(passport_id, document_type, immigration_status, expiration_date)
VALUES
(input2_passport_id, input2_document_type, input2_immigration_status, input2_expiration_date);


INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id, passenger_reg_amount, passenger_record_id)
VALUES
(share_passport_id, input_passport_id, input_passenger_reg_amount, input_passenger_record_id);

INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id, passenger_reg_amount, passenger_record_id)
VALUES
(share_passport_id, input2_passport_id, add_passenger_reg_amount, share_passenger_record_id );

INSERT INTO	SYSTEM_QUEUES
(passport_id, passenger_record_id)
VALUES
(input_passport_id, input_passenger_record_id);

INSERT INTO	SYSTEM_QUEUES
(passport_id, passenger_record_id)
VALUES
(input2_passport_id, share_passenger_record_id);


INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id, passenger_record_id )
VALUES
(input_photo_upload, input_passport_upload, input_passport_id, input_passenger_record_id);

INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id, passenger_record_id)
VALUES
(input2_photo_upload, input2_passport_upload, input2_passport_id, share_passenger_record_id);



ELSEIF input_passenger_reg_amount = 3
THEN


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
(input2_passport_id, input2_mobile, share_home_phone, share_work_phone, input2_email_address, share_emergency_contact_firstname, 
share_emergency_contact_lastname, share_emergency_contact_relationship, share_emergency_contact_phone);

INSERT INTO PASSENGER_CONTACT_INFORMATION
(passport_id, mobile, home_phone, work_phone, email_address, emergency_contact_firstname, 
emergency_contact_lastname, emergency_contact_relationship, emergency_contact_phone)
VALUES
(input3_passport_id, input3_mobile, share_home_phone, share_work_phone, input3_email_address, share_emergency_contact_firstname, 
share_emergency_contact_lastname, share_emergency_contact_relationship, share_emergency_contact_phone);

INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, country_of_birth, nationality,
passport_id, passenger_record_id)
VALUES
(input_first_name, input_middle_name, input_last_name, input_gender, input_country_of_birth,
input_nationality, input_passport_id, input_passenger_record_id);

INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, date_of_birth, country_of_birth, nationality, passport_id,
 passenger_record_id)
VALUES
(input2_first_name, input2_middle_name, input2_last_name, input2_gender, input2_date_of_birth, input2_country_of_birth,
input2_nationality, input2_passport_id, share_passenger_record_id);

INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, date_of_birth, country_of_birth, nationality, passport_reg_id,
 passenger_record_id)
VALUES
(input3_first_name, input3_middle_name, input3_last_name, input3_gender, input3_date_of_birth, input3_country_of_birth,
input3_nationality, input3_passport_id, share_passenger_record_id);

INSERT INTO PASSENGER_LOCAL_ADDRESS_INFO
(trip_purpose, type_of_accommodation, hotel_name, local_city, local_address, sponsor_first_name, sponsor_last_name,
sponsor_phone_number, passport_id, passenger_record_id)
VALUES
(input_trip_purpose, input_type_of_accommodation, input_hotel_name, input_local_city, input_local_address, input_sponsor_first_name, input_sponsor_last_name,
input_sponsor_phone_number, input_passport_id, input_passenger_record_id);

INSERT INTO PASSENGER_LOCAL_ADDRESS_INFO
(trip_purpose, type_of_accommodation, hotel_name, local_city, local_address, sponsor_first_name, sponsor_last_name,
sponsor_phone_number, passport_id, passenger_record_id)
VALUES
(share_trip_purpose, share_type_of_accommodation, share_hotel_name, share_local_city, share_local_address, share_sponsor_first_name, share_sponsor_last_name,
share_sponsor_phone_number, input2_passport_id, share_passenger_record_id);

INSERT INTO PASSENGER_LOCAL_ADDRESS_INFO
(trip_purpose, type_of_accommodation, hotel_name, local_city, local_address, sponsor_first_name, sponsor_last_name,
sponsor_phone_number, passport_id, passenger_record_id)
VALUES
(share_trip_purpose, share_type_of_accommodation, share_hotel_name, share_local_city, share_local_address, share_sponsor_first_name, share_sponsor_last_name,
share_sponsor_phone_number, input3_passport_id, share_passenger_record_id);

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
(passport_reg_id, passport_id, passenger_reg_amount, passenger_record_id)
VALUES
(share_passport_id, input_passport_id, input_passenger_reg_amount, input_passenger_record_id);

INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id, passenger_reg_amount, passenger_record_id)
VALUES
(share_passport_id, input2_passport_id, add_passenger_reg_amount, share_passenger_record_id );

INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id, passenger_reg_amount, passenger_record_id)
VALUES
(share_passport_id, input3_passport_id, add_passenger_reg_amount, share_passenger_record_id );

INSERT INTO	SYSTEM_QUEUES
(passport_id, passenger_record_id)
VALUES
(input_passport_id, input_passenger_record_id);

INSERT INTO	SYSTEM_QUEUES
(passport_id, passenger_record_id)
VALUES
(input2_passport_id, share_passenger_record_id);

INSERT INTO	SYSTEM_QUEUES
(passport_id, passenger_record_id)
VALUES
(input3_passport_id, share_passenger_record_id);

INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id, passenger_record_id )
VALUES
(input_photo_upload, input_passport_upload, input_passport_id, input_passenger_record_id);

INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id, passenger_record_id)
VALUES
(input2_photo_upload, input2_passport_upload, input2_passport_id, share_passenger_record_id);

INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id, passenger_record_id)
VALUES
(input3_photo_upload, input3_passport_upload, input3_passport_id, share_passenger_record_id);


ELSEIF input_passenger_reg_amount = 4
THEN

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

INSERT INTO PASSENGER_ADDRESS
(passport_id, country, address, address_cont, city_town, state_province, zip_postal_code)
VALUES
(input4_passport_id, share_country, share_address, share_address_cont, share_city_town, 
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

INSERT INTO PASSENGER_ARRIVAL_DEPARTURE_INFO
(number_of_visits, passport_id, arrival_port, mode_of_travel, country_of_embarcation,
port_of_embarcation, airline_name,flight_number,vessel_name,vessel_number,date_of_arrival,
date_of_departure)
VALUES
(input4_number_of_visits, input4_passport_id, share_arrival_port, share_mode_of_travel, 
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
(input2_passport_id, input2_mobile, share_home_phone, share_work_phone, input2_email_address, share_emergency_contact_firstname, 
share_emergency_contact_lastname, share_emergency_contact_relationship, share_emergency_contact_phone);

INSERT INTO PASSENGER_CONTACT_INFORMATION
(passport_id, mobile, home_phone, work_phone, email_address, emergency_contact_firstname, 
emergency_contact_lastname, emergency_contact_relationship, emergency_contact_phone)
VALUES
(input3_passport_id, input3_mobile, share_home_phone, share_work_phone, input3_email_address, share_emergency_contact_firstname, 
share_emergency_contact_lastname, share_emergency_contact_relationship, share_emergency_contact_phone);

INSERT INTO PASSENGER_CONTACT_INFORMATION
(passport_id, mobile, home_phone, work_phone, email_address, emergency_contact_firstname, 
emergency_contact_lastname, emergency_contact_relationship, emergency_contact_phone)
VALUES
(input4_passport_id, input4_mobile, share_home_phone, share_work_phone, input4_email_address, share_emergency_contact_firstname, 
share_emergency_contact_lastname, share_emergency_contact_relationship, share_emergency_contact_phone);

INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, country_of_birth, nationality,
passport_id, passenger_record_id)
VALUES
(input_first_name, input_middle_name, input_last_name, input_gender, input_country_of_birth,
input_nationality, input_passport_id, input_passenger_record_id);

INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, date_of_birth, country_of_birth, nationality, passport_id,
 passenger_record_id)
VALUES
(input2_first_name, input2_middle_name, input2_last_name, input2_gender, input2_date_of_birth, input2_country_of_birth,
input2_nationality, input2_passport_id, share_passenger_record_id);

INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, date_of_birth, country_of_birth, nationality, passport_reg_id,
 passenger_record_id)
VALUES
(input3_first_name, input3_middle_name, input3_last_name, input3_gender, input3_date_of_birth, input3_country_of_birth,
input3_nationality, share_passport_id, share_passenger_record_id);

INSERT INTO PASSENGER_INFORMATION
(first_name, middle_name, last_name, gender, date_of_birth, country_of_birth, nationality, passport_id,
 passenger_record_id)
VALUES
(input4_first_name, input4_middle_name, input4_last_name, input4_gender, input4_date_of_birth, input4_country_of_birth,
input4_nationality, share_passport_id, share_passenger_record_id);

INSERT INTO PASSENGER_LOCAL_ADDRESS_INFO
(trip_purpose, type_of_accommodation, hotel_name, local_city, local_address, sponsor_first_name, sponsor_last_name,
sponsor_phone_number, passport_id, passenger_record_id)
VALUES
(input_trip_purpose, input_type_of_accommodation, input_hotel_name, input_local_city, input_local_address, input_sponsor_first_name, input_sponsor_last_name,
input_sponsor_phone_number, input_passport_id, input_passenger_record_id);

INSERT INTO PASSENGER_LOCAL_ADDRESS_INFO
(trip_purpose, type_of_accommodation, hotel_name, local_city, local_address, sponsor_first_name, sponsor_last_name,
sponsor_phone_number, passport_id, passenger_record_id)
VALUES
(share_trip_purpose, share_type_of_accommodation, share_hotel_name, share_local_city, share_local_address, share_sponsor_first_name, share_sponsor_last_name,
share_sponsor_phone_number, input2_passport_id, share_passenger_record_id);

INSERT INTO PASSENGER_LOCAL_ADDRESS_INFO
(trip_purpose, type_of_accommodation, hotel_name, local_city, local_address, sponsor_first_name, sponsor_last_name,
sponsor_phone_number, passport_id, passenger_record_id)
VALUES
(share_trip_purpose, share_type_of_accommodation, share_hotel_name, share_local_city, share_local_address, share_sponsor_first_name, share_sponsor_last_name,
share_sponsor_phone_number, input3_passport_id, share_passenger_record_id);

INSERT INTO PASSENGER_LOCAL_ADDRESS_INFO
(trip_purpose, type_of_accommodation, hotel_name, local_city, local_address, sponsor_first_name, sponsor_last_name,
sponsor_phone_number, passport_id, passenger_record_id)
VALUES
(share_trip_purpose, share_type_of_accommodation, share_hotel_name, share_local_city, share_local_address, share_sponsor_first_name, share_sponsor_last_name,
share_sponsor_phone_number, input4_passport_id, share_passenger_record_id);

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

INSERT INTO PASSENGER_TRAVEL_DOCUMENTS
(passport_id, document_type, immigration_status, expiration_date)
VALUES
(input3_passport_id, input4_document_type, input4_immigration_status, input4_expiration_date);


INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id, passenger_reg_amount, passenger_record_id)
VALUES
(share_passport_id, input_passport_id, input_passenger_reg_amount, input_passenger_record_id);

INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id, passenger_reg_amount, passenger_record_id)
VALUES
(share_passport_id, input2_passport_id, add_passenger_reg_amount, share_passenger_record_id );

INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id, passenger_reg_amount, passenger_record_id)
VALUES
(share_passport_id, input3_passport_id, add_passenger_reg_amount, share_passenger_record_id );

INSERT INTO REGISTRATION_ID_LINKS
(passport_reg_id, passport_id, passenger_reg_amount, passenger_record_id)
VALUES
(share_passport_id, input4_passport_id, add_passenger_reg_amount, share_passenger_record_id );

INSERT INTO	SYSTEM_QUEUES
(passport_id, passenger_record_id)
VALUES
(input_passport_id, input_passenger_record_id);

INSERT INTO	SYSTEM_QUEUES
(passport_id, passenger_record_id)
VALUES
(input2_passport_id, share_passenger_record_id);

INSERT INTO	SYSTEM_QUEUES
(passport_id, passenger_record_id)
VALUES
(input3_passport_id, share_passenger_record_id);

INSERT INTO	SYSTEM_QUEUES
(passport_id, passenger_record_id)
VALUES
(input4_passport_id, share_passenger_record_id);

INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id, passenger_record_id )
VALUES
(input_photo_upload, input_passport_upload, input_passport_id, input_passenger_record_id);

INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id, passenger_record_id)
VALUES
(input2_photo_upload, input2_passport_upload, input2_passport_id, share_passenger_record_id);

INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id, passenger_record_id)
VALUES
(input3_photo_upload, input3_passport_upload, input3_passport_id, share_passenger_record_id);

INSERT INTO TRAVEL_DOCUMENTS_UPLOAD
(photo_upload, passport_upload, passport_id, passenger_record_id)
VALUES
(input4_photo_upload, input4_passport_upload, input3_passport_id, share_passenger_record_id);


END IF;


END