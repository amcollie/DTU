<?php
// declare(strict_types=1);

use chillerlan\QRCode\QRCode;
use chillerlan\QRCode\QROptions;
require_once __DIR__.'/vendor/autoload.php';

// Generates and displays Barcode, and QRCode encoded with given variable $record_id
function GenerateImageCode($record_id) {
    // Generate Barcode
    $generator = new Picqer\Barcode\BarcodeGeneratorSVG();
    $barcode = $generator->getBarcode($record_id, $generator::TYPE_CODE_128);

    // Generate QRCode
    $options = new QROptions([
        'eccLevel' => QRCode::ECC_L,
        'outputType' => QRCode::OUTPUT_MARKUP_SVG,
        'imageBase64'  => false,
        // 'svgViewBoxSize' => 530,
        'version' => 5
    ]);
    
    $qrcode = (new QRCode($options))->render($record_id);

    echo "<div style='text-align: center; box-shadow: 5px 10px #cccccc; padding: 8px;'>
            <h1 style='color: black;'> $record_id </h1>
            <div style='margin: auto; width: 50%;'> $qrcode </div>
            <br>
            <div style='background: white; display: flex; justify-content: center;'> $barcode </div>
            <br>
        </div>";
}

// GenerateImageCode('123AIJSDI9021');
?>
