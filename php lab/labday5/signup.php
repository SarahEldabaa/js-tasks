<?php
session_start();
include 'config.php';

if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $password = $_POST['password'];
        $_SESSION['userName'] = $name;

        if (empty($name) || empty($password)) {
                echo "please fill in the form";
        } elseif (!empty($name) && !empty($password)) {
                $sql1 = "SELECT username FROM users WHERE username = '$name'";
                $retavl1 = mysqli_query($conn, $sql1);
                $res1 = mysqli_fetch_assoc($retavl1);
                if ($res1['username'] == $name) {
                        echo "user already exists";
                } else {
                        $sql2 = "INSERT INTO users (username, password) VALUES ('$name', '$password')";
                        $res2 = mysqli_query($conn, $sql2);
                        header("Location: login.php");
                }
        }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
        <div class="container mt-5">
                <h1 class="text-center">Sign Up</h1>
                <span style="color: red;">please fill this form to sign up</span>
                <!-- <h2 class="text-center" style="color: red;"><?php echo $err; ?></h2> -->

        </div>
        <div class="container mt-5 w-50">
                <form action="<?php $_PHP_SELF ?>" method="post">
                        <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">User name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" name="name">
                        </div>
                        <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" name="password">
                        </div>
                        
                        <button type="submit" class="btn btn-primary" name="submit">Submit</button>
                        <button type="submit" class="btn btn-light border border-black" name="submit">Rest</button>
                        <br>
                </form>
                <span>Already have an account? <a href="login.php" style="color: blue;">Login here.</a></span>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>