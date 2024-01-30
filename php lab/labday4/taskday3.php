<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>form-php-task-part1</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
        <?php

        include 'config.php';

        $nameErr = $emailErr = $genderErr = "";
        $name = $email = $gender =  $agree =  "";
        if (isset($_POST["submit"])) {
                if (empty($_POST["name"])) {
                        $nameErr = "Name is required";
                } else {
                        $name = $_POST["name"];
                }
                if (empty($_POST["email"])) {
                        $emailErr = "Email is required";
                } else {
                        $email = $_POST["email"];
                }
                if (empty($_POST["gender"])) {
                        $genderErr = "Gender is required";
                } else {
                        $gender = $_POST["gender"];
                }
                if (empty($_POST["agree"])) {
                        $groupErr = "Agree is required";
                } else {
                        $agree = $_POST["agree"];
                }

                // if (!empty($name) && !empty($email)  && !empty($gender) || !empty($agree)) {
                //         echo "<h2>Entered data:</h2>";
                //         echo "Name: " . $name . "<br>";
                //         echo "Email: " . $email . "<br>";
                //         echo "Gender: " . $gender . "<br>";
                //         echo "Agree: " . $agree . "<br>";
                // }

                $sql2 = "INSERT INTO users(name, email, gender, mailstatus) 
                        VALUES ('$name' , '$email' , '$gender' , '$agree')";

                $retval = mysqli_query($conn, $sql2);

                if (!$retval) {
                        die('Could not insert to table: ' . mysqli_error($conn));
                }

                echo "<br>Data inserted to table successfully\n";
        }
        ?>
        <h3 style="color: red;">* Required fields</h1>
                <form method="POST" action="<?php $_PHP_SELF ?>" class="w-25 p-3 border m-auto mt-5">
                        <div class="mb-3">
                                <label for="" class="form-label">Name</label>
                                <input type="text" class="form-control" id="" name="name" value="<?php echo $name; ?>">
                                <span style="color: red;">* <?php echo $nameErr; ?></span>
                        </div>
                        <div class="mb-3">
                                <label for="" class="form-label">E-mail </label>
                                <input type="email" class="form-control" id="" name="email" value="<?php echo $email; ?>">
                                <span style="color: red;">* <?php echo $emailErr; ?></span>
                        </div>
                        <div class="mb-3">
                                <div><label for="" class="form-label ms-1">Gender : </label></div>
                                <div>
                                        <input type="radio" name="gender" value="female">
                                        <label for="">F</label>
                                </div>
                                <div>
                                        <input type="radio" name="gender" value="male">
                                        <label for="">M</label>
                                </div>
                        </div>
                        <div class="mb-3">
                                <input type="hidden" name="agree" value="No">
                                <input type="checkbox" name="agree" value="YES">
                                <label for="">Receive email from us</label>
                        </div>
                        <input type="submit" class="btn btn-primary" name="submit" value="submit">
                        <button class="btn btn-light"><a href="labday4.php" class="text-decoration-none text-dark">cancel</a></button>
                        <button class="btn btn-success"><a href="labday4.php" ><a class="text-decoration-none text-white" href="tabletask.php">show table</a></a></button>
                </form>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>