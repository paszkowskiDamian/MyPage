<?php 
    $params = json_decode(file_get_contents('php://input'),true);

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
    $headers .= 'From: <damian@paszkowski.net.pl>' . "\r\n";

    if(strlen($params['message'])!=0 && !filter_var($params['email'], FILTER_VALIDATE_EMAIL) === false ){
         mail("paszko.damian@gmail.com","Message from ".$params['name'] ,htmlentities($params['message']).'<br><br><strong>FROM: '.$params['email'].'</strong>',$headers);
         echo 'sucess';
    }else{
        echo 'error';
    }
   
?>