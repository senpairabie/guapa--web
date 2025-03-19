<?php
header("Content-Type: application/json");

$servername = "localhost";
$username = "root"; 
$password = ""; 
$database = "db"; 

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "فشل الاتصال بقاعدة البيانات"]));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name  = $conn->real_escape_string($_POST["name"]);
    $email = $conn->real_escape_string($_POST["email"]);
    $phone = $conn->real_escape_string($_POST["phone"]);

    $sql = "INSERT INTO users (name, email, phone) VALUES ('$name', '$email', '$phone')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "خطأ في الإدخال: " . $conn->error]);
    }
}

$conn->close();
?>
