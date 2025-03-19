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
?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>عرض الأسماء</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-5">
    <h2 class="text-center mb-4">قائمة المستخدمين</h2>
    
    <div class="d-flex justify-content-between mb-3">
        <button onclick="downloadExcel()" class="btn btn-success">📥 تحميل البيانات كـ Excel</button>
    </div>

    <table class="table table-bordered table-striped">
        <thead class="table-dark">
            <tr>
                <th>الاسم</th>
                <th>البريد الإلكتروني</th>
                <th>رقم الهاتف</th>
            </tr>
        </thead>
        <tbody>
            <?php while ($row = $result->fetch_assoc()): ?>
                <tr>
                    <td><?= htmlspecialchars($row['name']) ?></td>
                    <td><?= htmlspecialchars($row['email']) ?></td>
                    <td><?= htmlspecialchars($row['phone']) ?></td>
                </tr>
            <?php endwhile; ?>
        </tbody>
    </table>
</div>

<script>
    function downloadExcel() {
        window.location.href = "export.php";
    }
</script>

</body>
</html>

<?php $conn->close(); ?>
