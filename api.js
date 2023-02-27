<?php
  $captcha = $_POST['g-recaptcha-response'];
  $secret_key = '6Ldez7gkAAAAAIQyqM3V53IpAiBajrcRgfHDX3C_';
  $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secret_key."&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
  $response = json_decode($response, true);

  if($response['success'] == true) {
    // captcha validation successful, proceed with login
  } else {
    // captcha validation failed, display error message
  }
?>
