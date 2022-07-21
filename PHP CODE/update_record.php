<?php

// Connect to db.
include 'dbconnection.php';

// If the form is submitted
if ($_POST) {
    // Retrieve data from form
    $input_passenger_reg_amount = $_POST['input_passenger_reg_amount'];
    $input_passenger_record_id = $_POST['input_passenger_record_id'];
    $input_country = $_POST['input_country'];
    $input_address = $_POST['input_address'];
    $input_address_cont = $_POST['input_address_cont'];
    $input_city_town = $_POST ['input_city_town'];
    $input_state_province = $_POST ['input_state_province'];
    $input_zip_postal_code = $_POST ['input_zip_postal_code'];

    $input_number_of_visits = $_POST['input_number_of_visits'];

    $input_arrival_port = $_POST ['input_arrival_port'];
    $input_mode_of_travel = $_POST ['input_mode_of_travel'];
    $input_country_of_embarcation = $_POST ['input_country_of_embarcation'];
    $input_port_of_embarcation = $_POST ['input_port_of_embarcation'];
    $input_airline_name = $_POST ['input_airline_name'];
    $input_flight_number = $_POST ['input_flight_number'];
    $input_vessel_name = $_POST  ['input_vessel_name'];
    $input_vessel_number = $_POST ['input_vessel_number'];
    $input_date_of_arrival = $_POST ['input_date_of_arrival'];
    $input_date_of_departure = $_POST ['input_date_of_departure'];


    $input_mobile = $_POST ['input_mobile']; 
    $input_home_phone  = $_POST ['input_home_phone'];
    $input_work_phone  = $_POST ['input_work_phone'];
    $input_email_address   = $_POST ['input_email_address'];
    $input_emergency_contact_firstname  = $_POST ['input_emergency_contact_firstname'];
    $input_emergency_contact_lastname  = $_POST ['input_emergency_contact_lastname'];
    $input_emergency_contact_relationship  = $_POST ['input_emergency_contact_relationship'];
    $input_emergency_contact_phone  = $_POST ['input_emergency_contact_phone'];

    $input_first_name   = $_POST ['input_first_name'];
    $input_middle_name   = $_POST ['input_middle_name'];
    $input_last_name   = $_POST ['input_last_name'];
    $input_gender     = $_POST ['input_gender'];
    $input_country_of_birth      = $_POST ['input_country_of_birth'];
    $input_nationality   = $_POST ['input_nationality'];


    $input_passport_id  = $_POST ['input_passport_id'];
    $input_document_type   = $_POST ['input_document_type'];
    $input_immigration_status   = $_POST ['input_immigration_status'];
    $input_expiration_date  = $_POST ['input_expiration_date'];

    $input_photo_upload = $_POST ['input_photo_upload'];
    $input_passport_upload = $_POST ['input_passport_upload'];

    $input2_passport_id  = $_POST ['input2_passport_id'];

    $input2_number_of_visits = $_POST ['input2_number_of_visits'];
    $input2_mobile  = $_POST ['input2_mobile'];
    $input2_home_phone  = $_POST ['input2_home_phone'];
    $input2_work_phone  = $_POST ['input2_work_phone'];
    $input2_email_address   = $_POST ['input2_work_phone'];
    $input2_first_name   = $_POST ['input2_first_name']; 
    $input2_middle_name     = $_POST ['input2_middle_name'];
    $input2_last_name   = $_POST ['input2_last_name'];
    $input2_gender  = $_POST ['input2_gender'];
    $input2_country_of_birth    = $_POST ['input2_country_of_birth'];
    $input2_nationality     = $_POST ['input2_nationality'];
    $input2_date_of_birth   = $_POST ['input2_date_of_birth'];
    $input2_document_type   = $_POST ['input2_document_type'];
    $input2_immigration_status  = $_POST ['input2_immigration_status'];
    $input2_expiration_date     = $_POST ['input2_expiration_date'];
    $input2_photo_upload    = $_POST ['input2_photo_upload'];
    $input2_passport_upload     = $_POST ['input2_passport_upload'];

    if (!$msqli->query(
        "CALL UPDATE_PROFILE_PASSENGER(
            '$input_passenger_reg_amount',
            '$input_passenger_record_id',
            '$input_country,
            '$input_address',
            '$input_address_cont',
            '$input_city_town',
            '$input_state_province',
            '$input_zip_postal_code',
            '$input_number_of_visits',
            '$input_arrival_port',
            '$input_mode_of_travel',
            '$input_country_of_embarcation',
            '$input_port_of_embarcation', 
            '$input_airline_name',
            '$input_flight_number',
            '$input_vessel_name',
            '$input_vessel_number',
            '$input_date_of_arrival',
            '$input_date_of_departure,
            '$input_mobile',
            '$input_home_phone',
            '$input_work_phone',
            '$input_email_address',
            '$input_emergency_contact_firstname',
            '$input_emergency_contact_lastname',
            '$input_emergency_contact_relationship',
            '$input_emergency_contact_phone' 
            '$input_first_name',
            '$input_middle_name',
            '$input_last_name',
            '$input_gender',
            '$input_country_of_birth',   
            '$input_nationality',
            '$input_passport_id',
            '$input_document_type',
            '$input_immigration_status',
            '$input_expiration_date',
            '$input_photo_upload',
            '$input_passport_upload',

            '$input2_passport_id', 
            '$input2_number_of_visits',
            '$input2_mobile',
            '$input2_home_phone',
            '$input2_work_phone',
            '$input2_email_address',
            '$input2_first_name',
            '$input2_middle_name'
            '$input2_last_name',
            '$input2_gender', 
            '$input2_country_of_birth',
            '$input2_nationality',
            '$input2_date_of_birth',
            '$input2_document_type',
            '$input2_immigration_status',
            '$input2_expiration_date',
            '$input2_photo_upload',
            '$input2_passport_upload',
        )"
    ))
    {
        echo "CALL failed : (" .$mysqli->errno .")" .$mysqli->error;
    } else {
        echo "Service Request Number : " .$srn;
    }
}