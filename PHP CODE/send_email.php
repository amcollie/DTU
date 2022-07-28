<?php
  require_once('barcode.php');

  $codes = GenerateImageCode($_POST['record_id']);

  $success = mail(
    $_POST['email'],
    'Bahamas Immigration: Your Code Is Ready',
    "
      <div style='text-align:center;margin:10px auto;'>
        <p>
          Thank you for applying at arrivebahamas.gov.bs;
          we look forward to welcoming you on our beautiful islands!

          Please see below a copy of your Travel Record ID and codes
          for scanning upon arrival in The Bahamas.
        </p>
      </div>
      $codes
    "
  );

  echo $success;
?>