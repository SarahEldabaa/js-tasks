<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>

        <div class="container">
                <div class="row mt-5">
                        <div class="col-md-10">
                                <h1>USER DETAILS</h1>
                        </div>
                        <div class="col-md-2"><button class="btn btn-success"><a class="text-decoration-none text-white" href="taskday3.php">Add user</a></button></div>
                </div>
                <hr>
                <?php

                include 'config.php';

                mysqli_select_db($conn, $dbname);
                // echo "Database <span style='color:red'>$dbname </span>created & selected successfully\n";
                // mysqli_close($conn);

                $sql = "SELECT id,name, email, gender , MailStatus FROM users";
                // mysqli_select_db($conn, $dbname);
                $result = mysqli_query($conn, $sql);



                if (!$result) {
                        die('Could not get data: ' . mysqli_error($conn));
                }
                if (mysqli_num_rows($result) > 0) {
                        // output data of each row

                        echo "<table class='table table table-striped'>";
                        echo "<thead>";
                        echo "<tr>";
                        echo  "<th scope='col'>#</th>";
                        echo "<th scope='col'>Name</th>";
                        echo "<th scope='col'>Email</th>";
                        echo "<th scope='col'>Gender</th>";
                        echo "<th scope='col'>Mail status</th>";
                        echo "<th scope='col'>Action</th>";
                        echo "</tr>";
                        echo "</thead>";
                        echo "<tbody>";
                        while ($row = mysqli_fetch_assoc($result)) {
                                echo "<tr>";
                                echo "<td>{$row['id']}</td> " .
                                        "<td> {$row['name']} </td> " .
                                        "<td> {$row['email']} </td> " .
                                        "<td> {$row['gender']} </td> " .
                                        "<td> {$row['MailStatus']} </td> " .
                                        "<td> 
                                        <a class='btn btn-primary ' href='show.php?id={$row['id']}'>Show</a>
                                        <a class='btn btn-success' href='edit.php?id={$row['id']}'>Edit</a>
                                        <a class='btn btn-danger' href='delete.php?id={$row['id']}'>Delete</a>
                                        
                                        </td> ";
                                echo "</tr>";
                        }
                        echo "</tbody>";
                        echo "</table>";
                } else {
                        echo "0 results";
                }

                ?>

        </div>


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>