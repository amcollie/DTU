<?php

include 'dbconnection.php';
require('uploads.php');

// Connect to db.   

//Code to generate the record ids for resume/recover events.
// This function will return
// A random string of specified length
function random_strings($length_of_string) {
	// sha1 the timestamps and returns substring
	// of specified length
	return substr(sha1(time()), 0, $length_of_string);
}
// This function will generate
// Random string of length 15
//echo random_strings(15);

// If the form was submitted.
if($_POST)
{

    // Retrieve data from form. 
    $input_passenger_reg_amount = $_POST ['input_passenger_reg_amount'];
    $input_passenger_record_id  = $_POST [random_strings(15)];

    // Passenger address information
    $input_country          = $_POST ['input_country'];
    $input_address          = $_POST ['input_address'];
    $input_address_cont     = $_POST ['input_address_cont'];
    $input_city_town        = $_POST ['input_city_town'];
    $input_state_province   = $_POST ['input_state_province'];
    $input_zip_postal_code  = $_POST ['input_zip_postal_code'];

    // Passenger arrival and departure information
    $input_number_of_visits                 = $_POST['input_number_of_visits'];

    $input_arrival_port                     = $_POST ['input_arrival_port'];
    $input_mode_of_travel                   = $_POST ['input_mode_of_travel'];
    $input_country_of_embarcation           = $_POST ['input_country_of_embarcation'];
    $input_port_of_embarcation              = $_POST ['input_port_of_embarcation'];
    $input_airline_name                     = $_POST ['input_airline_name'];
    $input_flight_number                    = $_POST ['input_flight_number'];
    $input_vessel_name                      = $_POST  ['input_vessel_name'];
    $input_vessel_number                    = $_POST ['input_vessel_number'];
    $input_date_of_arrival                  = $_POST ['input_date_of_arrival'];
    $input_date_of_departure                = $_POST ['input_date_of_departure'];

    $input_emergency_contact_firstname      = $_POST ['input_emergency_contact_firstname'];
    $input_emergency_contact_lastname       = $_POST ['input_emergency_contact_lastname'];
    $input_emergency_contact_relationship   = $_POST ['input_emergency_contact_relationship'];
    $input_emergency_contact_phone          = $_POST ['input_emergency_contact_phone'];

    $input_passport_id                      = $_POST ['input_passport_id'];

    // Passenger local address information
    $input_trip_purpose         = $_POST ['input_trip_purpose'];
    $input_type_of_accommodate  = $_POST ['input_type_of_accommodate'];
    $input_hotel_name           = $_POST ['input_hotel_name'];
    $input_hotel_city           = $_POST ['input_hotel_city'];
    $input_local_city           = $_POST ['input_local_city'];
    $input_local_address        = $_POST ['input_local_address'];
    $input_sponsor_name         = $_POST ['input_sponsor_name'];
    $input_sponsor_last_name    = $_POST ['input_sponsor_last_name'];
    $input_sponsor_phone_number = $_POST ['input_sponsor_phone_number'];
    
    // Passenger contact information
    $input_mobile               = $_POST ['input_mobile']; 
    $input_home_phone           = $_POST ['input_home_phone'];
    $input_work_phone           = $_POST ['input_work_phone'];
    $input_email_address        = $_POST ['input_email_address'];
    $input_first_name           = $_POST ['input_first_name'];
    $input_middle_name          = $_POST ['input_middle_name'];
    $input_last_name            = $_POST ['input_last_name'];
    $input_gender               = $_POST ['input_gender'];
    $input_country_of_birth     = $_POST ['input_country_of_birth'];
    $input_nationality          = $_POST ['input_nationality'];
    $input_date_of_birth        = $_POST ['input_date_of_birth'];
    $input_document_type        = $_POST ['input_document_type'];
    $input_immigration_status   = $_POST ['input_immigration_status'];
    $input_expiration_date      = $_POST ['input_expiration_date'];

    $passport_path = upload_photo($input_passport_id, $_POST['input_passport_upload']);
    $input_passport_upload      = $passport_path;

    // Passenger two information
    $input2_passport_id         = $_POST ['input2_passport_id'];

    $input2_number_of_visits    = $_POST ['input2_number_of_visits'];
    $input2_mobile              = $_POST ['input2_mobile'];
    $input2_email_address       = $_POST ['input2_work_phone'];
    $input2_first_name          = $_POST ['input2_first_name']; 
    $input2_middle_name         = $_POST ['input2_middle_name'];
    $input2_last_name           = $_POST ['input2_last_name'];
    $input2_gender              = $_POST ['input2_gender'];
    $input2_country_of_birth    = $_POST ['input2_country_of_birth'];
    $input2_nationality         = $_POST ['input2_nationality'];
    $input2_date_of_birth       = $_POST ['input2_date_of_birth'];
    $input2_document_type       = $_POST ['input2_document_type'];
    $input2_immigration_status  = $_POST ['input2_immigration_status'];
    $input2_expiration_date     = $_POST ['input2_expiration_date'];

    $passport_path = upload_photo($input2_passport_id, $_POST['input2_passport_upload']);
    $input2_passport_upload     = $passport_path;

    // Passenger three information
    $input3_passport_id         = $_POST ['input3_passport_id'];

    $input3_number_of_visits    = $_POST ['input3_number_of_visits'];
    $input3_mobile              = $_POST ['input3_mobile'];
    $input3_email_address       = $_POST ['input3_email_address'];
    $input3_first_name          = $_POST ['input3_first_name'];
    $input3_middle_name         = $_POST ['input3_middle_name'];
    $input3_last_name           = $_POST ['input3_last_name']; 
    $input3_gender              = $_POST ['input3_gender'];
    $input3_country_of_birth    = $_POST ['input3_country_of_birth'];
    $input3_nationality         = $_POST ['input3_nationality'];
    $input3_date_of_birth       = $_POST ['input3_date_of_birth'];
    $input3_document_type       = $_POST ['input3_document_type'];
    $input3_immigration_status  = $_POST ['input3_immigration_status'];
    $input3_expiration_date     = $_POST ['input3_expiration_date'];

    $passport_path = upload_photo($input3_passport_id, $_POST['input3_passport_upload']);
    $input3_passport_upload     = $_POST ['input3_passport_upload'];

    // Passenger four information
    $input4_passport_id         = $_POST ['input4_passport_id'];

    $input4_number_of_visits    = $_POST ['input4_number_of_visits']; 
    $input4_mobile              = $_POST ['input4_mobile']; 
    $input4_email_address       = $_POST ['input4_email_address'];
    $input4_first_name          = $_POST ['input4_first_name'];
    $input4_middle_name         = $_POST ['input4_middle_name'];
    $input4_last_name           = $_POST ['input4_last_name'];
    $input4_gender              = $_POST ['input4_gender'];
    $input4_country_of_birth    = $_POST ['input4_country_of_birth'];
    $input4_nationality         = $_POST ['input4_nationality'];
    $input4_date_of_birth       = $_POST ['input4_date_of_birth'];
    $input4_document_type       = $_POST ['input4_document_type']; 
    $input4_immigration_status  = $_POST ['input4_immigration_status'];
    $input4_expiration_date     = $_POST ['input4_expiration_date'];

    $passport_path = upload_photo($input4_passport_id, $_POST['input4_passport_upload']);
    $input4_passport_upload     = $passport_path;

    // Insertion of passenger profile
    if (!$mysqli->query(
        "CALL INSERT_PROFILE_PASSENGER(
            '$input_passenger_reg_amount',
            '$input_passenger_record_id',

            // Passenger address
            '$input_country,
            '$input_address',
            '$input_address_cont',
            '$input_city_town',
            '$input_state_province',
            '$input_zip_postal_code',

            // Passenger arrival and departure information
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
            '$input_emergency_contact_firstname',
            '$input_emergency_contact_lastname',
            '$input_emergency_contact_relationship',
            '$input_emergency_contact_phone',

            // Passenger local address information
            '$input_trip_purpose',
            '$input_type_of_accommodate',
            '$input_hotel_name',
            '$input_local_city',
            '$input_local_address',
            '$input_sponsor_name',
            '$input_sponsor_last_name',
            '$input_sponsor_phone_number',
            
            '$input_passport_id',

            // Passenger contact information
            '$input_mobile',
            '$input_home_phone',
            '$input_work_phone',
            '$input_email_address',
            '$input_first_name',
            '$input_middle_name',
            '$input_last_name',
            '$input_gender',
            '$input_country_of_birth',   
            '$input_nationality',
            '$input_date_of_birth',
            '$input_document_type',
            '$input_immigration_status',
            '$input_expiration_date',
            '$input_passport_upload',

            // Passenger two information
            '$input2_passport_id', 
            '$input2_number_of_visits',
            '$input2_mobile',
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
            '$input2_passport_upload',

            // Passenger three information
            '$input3_passport_id',
            '$input3_number_of_visits',
            '$input3_mobile',
            '$input3_email_address',
            '$input3_first_name',
            '$input3_middle_name',
            '$input3_last_name', 
            '$input3_gender',
            '$input3_country_of_birth',
            '$input3_nationality',
            '$input3_date_of_birth',
            '$input3_document_type',
            '$input3_immigration_status',
            '$input3_expiration_date',
            '$input3_passport_upload',

            // Passenger four information
            '$input4_passport_id',
            '$input4_number_of_visits',
            '$input4_mobile', 
            '$input4_email_address',
            '$input4_first_name',
            '$input4_middle_name',
            '$input4_last_name',
            '$input4_gender',
            '$input4_country_of_birth',
            '$input4_nationality',
            '$input4_date_of_birth',
            '$input4_document_type',
            '$input4_immigration_status',
            '$input4_expiration_date',
            '$input4_passport_upload'
        )"
    ))
    {
        echo "CALL failed : (" .$mysqli->errno .")" .$mysqli->error;
    } else {
        header('Location: thank_you.html?record_id=' . $input_passenger_record_id);
    }

    if(!$res = $mysqli->query("SELECT * FROM main"))
    {
        echo "SELECT failed : (" .$mysqli->errno .")" .$mysqli->error;
    }
}
?>
