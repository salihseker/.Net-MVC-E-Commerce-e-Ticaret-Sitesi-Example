<?php

/*
  |--------------------------------------------------------------------------
  | Project Mailer module
  |--------------------------------------------------------------------------
  |
  | These modules are used when sending email from project form
  |
 */


/* SECTION I - CONFIGURATION */

$receiver_mail = 'example@mail.com';
$mail_title    = ( ! empty( $_POST[ 'name' ] )) ? $_POST[ 'name' ] . ' from ' . $_POST[ 'email' ] : ' from [WebSite]';

/* SECTION II - CODE */

if ( ! empty( $_POST[ 'name' ] ) && ! empty( $_POST [ 'email' ] ) && ! empty( $_POST [ 'message' ] ) ) {
	$email   = $_POST[ 'email' ];
	$name    = $_POST[ 'name' ];
	$message = wordwrap( $_POST [ 'message' ], 70, "\r\n" );
	$message.= "\r\n Name : $name";
	$message.= "\r\n Email : $email";
	$message.= ($_POST['phone'])? "\r\n Phone : {$_POST['phone']}" : '';
	$message.= ($_POST['website'])? "\r\n Website : {$_POST['website']}" : '';
	$message.= ($_POST['project_type'])? "\r\n Product Type : {$_POST['project_type']}" : '';
	$message.= ($_POST['product_type'])? "\r\n Product Type : {$_POST['product_type']}" : '';
	$subject = $mail_title;
	$header .= 'From: ' . $_POST[ 'name' ] . "\r\n";
	$header .= 'Reply-To: ' . $email;
	if ( mail( $receiver_mail, $subject, $message, $header ) )
		$result = 'Message successfully sent.';
	else
		$result = 'Message could not be sent.';
} else {
	$result  = 'Please fill all the fields in the form.';
}
echo $result;