<?php

/*
  |--------------------------------------------------------------------------
  | Subscription module
  |--------------------------------------------------------------------------
  |
  | These module are used when subscribing email from input text
  |
 */



/* SECTION I - CONFIGURATION */

ini_set('track_errors', 1);
$myFile = "../subscriptions.txt";
$date = date("Y-m-d H:i:s");

/* SECTION II - CODE */
if ( ! empty( $_POST[ 'newsletter-email' ] ) ) {
  $fh = fopen( $myFile, 'a' ) or die( $php_errormsg );
  $stringData = ($_POST[ 'newsletter-email' ]) . (!empty($_POST[ 'newsletter-name' ])?' ('.$_POST[ 'newsletter-name' ].')':'') . ", " . $date . "\r\n";
  if ( fwrite( $fh, $stringData ) )
    $result = "Subscription completed!";
  else
    $result = "Operation failed, try again.";
  fclose( $fh );
}else {
  $result = "Please insert your email";
}
echo $result;