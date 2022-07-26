<?php
function upload_photo($passport_number, $upload_file) {
    $max_file_size = 2 * 1024 * 1024;

    if (isset($_POST['submit'])) {
        $file = $_FILES[$upload_file];
        $file_name = $file['name'];
        $file_tmp_name = $file['tmp_name'];
        $file_size = $file['size'];
        $file_error = $file['error'];
        $file_parts = explode('.', $file_name);
        $file_ext = strtolower(end($file_parts));

        $allowed_ext = ['jpg', 'jpeg'];
        if (in_array($file_ext, $allowed_ext) && $file_error == 0) {
            if ($file_size <= $max_file_size) {
                $current_date = date('Y-m-d');
                $file_new_name = $passport_number . '-' . $current_date . '.' . $file_ext;
                echo '<pre>';
                echo $file_new_name;
                echo '</pre>';

                $file_path = __DIR__ . '/uploads/passport/' . $file_new_name;
                echo '<pre>';
                echo $file_path;
                echo '</pre>';

                if (move_uploaded_file($file_tmp_name, $file_path)) {
                    return $file_new_name;
                } else {
                    echo 'File upload failed.';
                }
            } else {
                echo 'File exceeds maximum size.';
            }
        } else {
            echo 'An error occurred while uploading file.';
        }
    }

    return NULL;
}
