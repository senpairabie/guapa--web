<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "db";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("فشل الاتصال بقاعدة البيانات: " . $conn->connect_error);
}

$sql = "SELECT name, email, phone FROM users";
$result = $conn->query($sql);

header("Content-Type: application/vnd.ms-excel");
header("Content-Disposition: attachment; filename=users_data.xls");
header("Pragma: no-cache");
header("Expires: 0");

echo "الاسم\tالبريد الإلكتروني\tرقم الهاتف\n";

while ($row = $result->fetch_assoc()) {
    echo "{$row['name']}\t{$row['email']}\t{$row['phone']}\n";
}

$conn->close();
?>
