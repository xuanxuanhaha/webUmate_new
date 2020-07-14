<?php
include 'includes_zoobar.php';

$filePath = get_path();
if (file_exists($filePath)) {
    $imageContents = 'data:application/pdf;base64,'.base64_encode(file_get_contents($filePath));
    echo json_encode(array('status' => true, 'content' => $imageContents));
} else {
    echo json_encode(array('error' => true));
}

?>