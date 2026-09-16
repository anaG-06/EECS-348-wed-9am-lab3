<?php

// echo $_POST["times"];

$t = $_POST["times"];

echo "<table border='1'>";
for ($i = 1; $i <= $t; $i++) // for row until given dimension
    {
        echo "<tr> \n";
        // echo"<td>".($i - 1)."</td>"; //shifts but messes up multiplication
        for ($j = 1; $j <= $t; $j++) // for col until given dimension
            {
                echo"<td>".(($j) * ($i))."</td>"; // multiply both indices
            }
        echo "</tr>";
    }
echo "</table>";

?>