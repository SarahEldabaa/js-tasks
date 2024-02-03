<?php
session_start();

include "config.php";

if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $password = $_POST['password'];

        
        $sql = "SELECT username, password FROM users";
        $ret = mysqli_query($conn, $sql);
        $res = mysqli_fetch_all($ret);

        // echo "<pre>";
        // print_r($res);
        // echo "</pre>";
        
        if(empty($name) || empty($password)) {
                echo "please fill in the form";
        } elseif (!empty($name) && !empty($password)) {
                foreach ($res as $key => $value) {
                        if ($value[0] == $name && $value[1] == $password) {
                                header("Location: welcome.php");
                        } else {
                                echo "invalid credentials";
                        }
                }
        }

        $_SESSION['userName'] = $name;        
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
                <h1 class="text-center">login</h1>
                <span style="color: red;">please fill in your credentials to login</span>
                
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
                        <br>
                        <span>Don't have an account? <a href="signup.php" style="color: blue;" name="signup">Sign up here.</a></span>
                </form>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>