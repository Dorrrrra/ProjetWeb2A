<?php
include '../Model/employe.php';
include '../Controller/EmployeC.php';


$emp = New Employe("Test","Test","Password123","8798987","Test@gmail.com","12/09/2000");
var_dump($emp); 

$employeC = new EmployeC();
$employeC->show($emp);
?>