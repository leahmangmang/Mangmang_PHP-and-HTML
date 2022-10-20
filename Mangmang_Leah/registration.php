<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>YOUR INPUTS!</title>
</head>
<body style="background-image: url(https://wallpapercave.com/wp/wp8443013.jpg) ;  background-repeat: no-repeat;
    background-size: cover;">
<?php
    $firstname = $lastname = $address = $email = $password = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $firstname = validate_input($_POST['firstname']);
        $lastname = validate_input($_POST['lastname']);
        $address = validate_input($_POST['address']);
        $email = validate_input($_POST['email']);
        $password = validate_input($_POST['password']);
        $password2 = validate_input($_POST['password2']);
    }

    function validate_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    ?>
 <div class="account" align="center">
        <p id="noErrors">Successfully Registered</p>
        <div class="main-box" >
            <div class="user-details">
                <h3>Acount Details</h3>
                <?php
                echo "<section style='text-align: centertart; color: black;'>";
                echo "<p> First Name: <span style='font-weight: 600; text-align:center;'>" . $firstname . " </span></p>";
                echo "<p> Last Name: <span style='font-weight: 600; text-align:center;'>" . $lastname . " </span></p>";
                echo "<p> Address: <span style='font-weight: 600;text-align:center;'>" . $address . " </span></p>";
                echo "<p> Email: <span style='font-weight: 600;text-align:center;'>" . $email . " </span></p>";
                echo "<p> Password: <span style='font-weight: 600; text-align:center;'>" . $password . " </span></p>";
                echo "</section>"
                ?>
            </div>
            <div class="OUT"><a href="index.html">LOGOUT</a></div>
        </div>
    </div>

</body>
</html>