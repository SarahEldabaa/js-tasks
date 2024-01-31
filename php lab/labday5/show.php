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
                $err= "<p class='text-danger mt-3 ms-3'>No records found</p></p>";
                http_response_code(404);
        } else {
                $user = mysqli_fetch_assoc($result);
        }
        mysqli_close($conn);

        ?>

<h1 class="text-center" style="color: red;">View fields</h1>
                <?php
                if (isset($user)) { ?>
                        <form method="POST" action="<?php $_PHP_SELF ?>" class="w-25 p-3 border m-auto mt-5">
                                <div class="mb-3">
                                        <label for="" class="form-label">Name</label>
                                        <p class="form-label ms-1"> <?php echo $user['name']; ?> </p>
                                </div>
                                <div class="mb-3">
                                        <label for="" class="form-label">E-mail </label>
                                        <p class="form-label ms-1"> <?php echo $user['email']; ?> </p>
                                </div>
                                <div class="mb-3">
                                        <div><label for="" class="form-label ms-1">Gender : </label></div>
                                        <div>
                                                <p class="form-label ms-1"> <?php echo $user['gender']; ?> </p>
                                        </div>

                                </div>
                                <div class="mb-3">
                                        <label for="">Receive email from us :</label>
                                        <p class="form-label ms-1"> <?php echo $user['MailStatus']; ?> </p>
                                </div>
                                <button class="btn btn-success"><a href="labday4.php"><a class="text-decoration-none text-white" href="tabletask.php">show table</a></a></button>
                        </form>
                <?php }else {
                        echo $err;
                } ?>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>