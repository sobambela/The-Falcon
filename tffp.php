<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP

    // $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    // $mail->SMTPAuth = true;                               // Enable SMTP authentication
    // $mail->Username = 'sobambela@gmail.com';                 // SMTP username
    // $mail->Password = 'appl3tr33GM001';                           // SMTP password

    $mail->Host = 'mail.thefalconcottage.co.za';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'bookings@thefalconcottage.co.za';                 // SMTP username
    $mail->Password = 'appl3tr33';                           // SMTP password

    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('bookings@thefalconcottage.co.za', 'The Falcon Website');
    $mail->addAddress('sobambela@gmail.com', 'Yongama');     // Add a recipient
    //$mail->addAddress('atthefalcon@gmail.com', 'Morgan Moodley ');               // Name is optional
    $mail->addReplyTo($_POST['email'] , $_POST['realname'] . ' ' . $_POST['surname']);

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Enquiry From The Falcon Website';
    $mail->Body    = 'Good day <br />';
    $mail->Body    .= '<br />The following enquiry was made on the website. <br />';
    $mail->Body    .= 'Name <strong>' . $_POST['realname'] . $_POST['surname'] . '</strong><br />';
    $mail->Body    .= 'Email <strong>' . $_POST['email'] .  '</strong><br />';
    $mail->Body    .= 'Cell Number: <strong>' . $_POST['cellphone'] .  '</strong><br />';
    $mail->Body    .= 'Telephone: <strong>' . $_POST['telephone'] .  '</strong><br />';
    $mail->Body    .= 'Town/Country: <strong>' . $_POST['country'] .  '</strong><br />';
    $mail->Body    .= 'Arrival Date: <strong>' . $_POST['arrival_date'] .  '</strong><br />';
    $mail->Body    .= 'Departure Date: <strong>' . $_POST['departure_date'] .  '</strong><br />';
    $mail->Body    .= 'No. of Nights: <strong>' . $_POST['no_of_nights'] .  '</strong><br />';
    $mail->Body    .= 'No. of Guests: <strong>' . $_POST['no_of_guests']  . '</strong><br />';
    $mail->Body    .= 'No. of Bedrooms: <strong>' . $_POST['no_of_bedrooms']  . '</strong><br />';
    $mail->Body    .= 'Additional Requests: <strong>' . $_POST['additional_requirements']  . '</strong><br />';
    $mail->Body    .= '<br />Regards<br />The Falcon';

    if (!$mail->send()) {
    	die(json_encode(['results'=>'0','msg'=>"<strong style='color: red;'>Booking could not be sent. Mailer Error: $mail->ErrorInfo</strong>"]));
    }else{
    	die(json_encode(['results'=>'1','msg'=>"<strong style='color: green;'>Thank you. Your Booking enquiry has been recieved.</strong>"]));

    }
} catch (Exception $e) {
    die(json_encode(["results"=>"0","msg"=>"<strong style='color: red;'>Booking could not be sent. Mailer Error: $mail->ErrorInfo</strong>"]));
}