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
        if (isset($_GET['id'])) {
                $id = $_GET['id'];
        } else {
                $id = 1;
        }

        $sql = "SELECT name, email, gender , MailStatus FROM users WHERE id = $id";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) == 0) {
                $err = "<p class='text-danger mt-3 ms-3'>No records found</p></p>";
                http_response_code(404);
        } else {
                $user = mysqli_fetch_assoc($result);
                if (isset($_POST['submit'])) {
                        $sql = "UPDATE users SET name = '$_POST[name]', email = '$_POST[email]', gender = '$_POST[gender]', MailStatus = '$_POST[agree]' WHERE id = $id";
                        $result = mysqli_query($conn, $sql);
                }
        }
        mysqli_close($conn);

        ?>

        <h1 class="text-center" style="color: red;">Edit fields</h1>

        <form method="POST" action="<?php $_PHP_SELF ?>" class="w-25 p-3 border m-auto mt-5">
                <div class="mb-3">
                        <label for="" class="form-label">Name</label>
                        <input type="text" class="form-control" id="" name="name" value="<?php if (isset($_POST["submit"])) {
                                                                                                        echo $_POST["name"];
                                                                                                } else {
                                                                                                        echo $user['name'];
                                                                                                } ?>">
                </div>
                <div class="mb-3">
                        <label for="" class="form-label">E-mail </label>
                        <input type="email" class="form-control" id="" name="email" value="<?php if (isset($_POST["submit"])) {
                                                                                                        echo $_POST["email"];
                                                                                                } else {
                                                                                                        echo $user['email'];
                                                                                                } ?>">
                </div>
                <div class="mb-3">
                        <div><label for="" class="form-label ms-1">Gender : </label></div>
                        <div>
                                <input type="radio" name="gender" value="female" <?php if (isset($_POST["submit"])) {
                                                                                                if ($_POST["gender"] == "female") {
                                                                                                        echo "checked";
                                                                                                }
                                                                                        } else {
                                                                                                if ($user["gender"] == "female") {
                                                                                                        echo "checked";
                                                                                                }
                                                                                        } ?>>
                                <la>
                                        <label for="">F</label>
                        </div>
                        <div>
                                <input type="radio" name="gender" value="male" <?php if (isset($_POST["submit"])) {
                                                                                        if ($_POST["gender"] == "male") {
                                                                                                echo "checked";
                                                                                        }
                                                                                } else {
                                                                                        if ($user["gender"] == "male") {
                                                                                                echo "checked";
                                                                                        }
                                                                                } ?>>
                                <label for="">M</label>
                        </div>
                </div>
                <div class="mb-3">
                        <input type="hidden" name="agree" value="No">
                        <input type="checkbox" name="agree" value="YES" <?php if (isset($_POST["submit"])) {
                                                                                if ($_POST["agree"] == "YES") {
                                                                                        echo "checked";
                                                                                }
                                                                        } else {
                                                                                if ($user["MailStatus"] == "YES") {
                                                                                        echo "checked";
                                                                                }
                                                                        }


                                                                        ?>>
                        <label for="">Receive email from us</label>
                </div>
                <input type="submit" class="btn btn-primary" name="submit" value="submit">
                <button class="btn btn-success"><a href="labday4.php"><a class="text-decoration-none text-white" href="tabletask.php">show table</a></a></button>
        </form>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>