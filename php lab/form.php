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
        $nameErr = $emailErr = $genderErr = $groupErr = "";
        $name = $email = $gender = $classDetails = $agree = $group = "";
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
                $group = $_POST["group"];
                $classDetails = $_POST["classDetails"];



                if (!empty($name) && !empty($email) && !empty($group) && !empty($classDetails)  && !empty($gender) && !empty($agree)) {
                        echo "<h2>Entered data:</h2>";
                        echo "Name: " . $name . "<br>";
                        echo "Email: " . $email . "<br>";
                        echo "Group: " . $group . "<br>";
                        echo "selected tracks: ";
                        foreach ($_POST['select'] as $select) {
                                print_r($select);
                                echo "  ";
                        }
                        echo "<br>";
                        echo "Class Details: " . $classDetails . "<br>";
                        echo "Gender: " . $gender . "<br>";
                        echo "Agree: " . $agree . "<br>";
                }
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
                                <label for="" class="form-label">Group</label>
                                <input type="text" class="form-control" id="" name="group">
                        </div>
                        <div class="mb-3">
                                <label for="" class="form-label">Class details</label>
                                <textarea class="form-control" id="" name="classDetails"></textarea>
                        </div>
                        <div class="mb-3">
                                <label for="" class="form-label ms-1">Gender : </label>
                                <input type="radio" name="gender" value="female">
                                <label for="">female</label>
                                <input type="radio" name="gender" value="male">
                                <label for="">male</label>
                                <span style="color: red;">* <?php echo $genderErr; ?></span>

                        </div>
                        <div class="mb-3">
                                <label for="" class="form-label">Select</label>
                                <select name="select[]" id="" multiple>
                                        <option value="PHP">PHP</option>
                                        <option value="Java Script">Java Script</option>
                                        <option value="MySql">MySql</option>
                                        <option value="HTML">HTML</option>
                                </select>
                        </div>

                        <div class="mb-3">
                                <label for="">Agree</label>
                                <input type="checkbox" name="agree" value="agree">
                                <span style="color: red;">* <?php echo $groupErr; ?></span>
                        </div>
                        <input type="submit" class="btn btn-primary" name="submit" value="submit">
                </form>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

<?php

// echo "<h2>Entered data:</h2>";
// echo $name;
// echo "<br>";
// echo $email;
// echo "<br>";
// echo  $group;
// echo "<br>";
// echo  $classDetails;
// echo "<br>";
// echo  $gender;
// echo "<br>";
// echo  $agree;
// echo "<br>";

?>

</html>