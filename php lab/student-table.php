<?php
include 'students.php';

if (isset($students)) {
        echo "<table>";
        echo "<tr>";
        echo "<th>Name</th>";
        echo "<th>Email</th>";
        echo "<th>Status</th>";
        echo "</tr>";
        foreach ($students as $student) {
                if ($student['status'] == 'PHP') {
                        echo "<tr style='color:red;'>";
                        echo "<td>" . $student['name'] . "</td>";
                        echo "<td>" . $student['email'] . "</td>";
                        echo "<td>" . $student['status'] . "</td>";
                        echo "</tr>";
                } else {
                        echo "<tr>";
                        echo "<td>" . $student['name'] . "</td>";
                        echo "<td>" . $student['email'] . "</td>";
                        echo "<td>" . $student['status'] . "</td>";
                        echo "</tr>";
                }
        }
        echo "</table>";
}
