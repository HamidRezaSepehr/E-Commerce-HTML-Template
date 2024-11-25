<?php

    if (isset($_POST['submit'])) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        //Add your email here
        $EmailTo = "email@example.com";
        $headers = "From: " . $email;

        $Subject = "New Message Received";

        // prepare email body text
        $Body = "";
        $Body .= "Name: ";
        $Body .= $name;
        $Body .= "\n";
        $Body .= "Email: ";
        $Body .= $email;
        $Body .= "\n";
        $Body .= "Message: ";
        $Body .= $message;
        $Body .= "\n";

        // send email
        $success = mail($EmailTo, $Subject, $Body, $headers);

        // redirect to success page
        if ($success){
            header("Location: success.html");
            exit();
        }
        // redirect to erro page
        else{
            header("Location: error.html");
            exit();

        }
        
    }

?>