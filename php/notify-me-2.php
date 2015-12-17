<?php

header('content-type: application/json');
$o->status = 'success';
echo json_encode($o);

$email_to = "kbergmann15@my.whitworth.edu"; //Just write your email, no more ...myemail@mail.com:)
$email = $_POST["email"];
$text = "Congratulations ! A new person wants to be alerted when your site will be online: $email";

$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
$headers .= "From:<$email>\n";
mail($email_to, "Message", $text, $headers);

?>

