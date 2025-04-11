<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$servername = "localhost";
$username = "aaron";
$password = "FCSG1879";
$dbname = "typespeedtest";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM words";
$result = $conn->query($sql);

$data = array();
while($row = $result->fetch_assoc()) {
    array_push($data, $row);
}

echo json_encode($data);

$conn->close();
?>
