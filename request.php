<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$date = $_POST['date'];


$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$date = htmlspecialchars($date);



$name = urldecode($name);
$tel = urldecode($tel);
$date = urldecode($date);



$name = trim($name);
$tel = trim($tel);
$date = trim($date);


$message = '';
$message .= 'Имя: '.$name.PHP_EOL;
$message .= 'Телефон: '.$tel.PHP_EOL;
$message .= 'Дата рождения: '.$date.PHP_EOL;



$sended = mail("info@malibu.ru",
"Заявка на звонок", $message, "From: admin@malibu.ru");

if ($sended)
{
    echo json_encode("Ваша заявка принята, ожидайте звонка");
} else {
    echo json_encode("Извините, при отправке заявки возникла ошибка :(");
}
