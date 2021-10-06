<?php
	session_start();

	if(isset($_POST['submit'])){
		if($_POST['username'] != ""){
			if($_POST['password'] != ""){
				if($_POST['email'] != ""){

					
					$user[1] = ['username'=> $_POST['username'], 'password'=> $_POST['password']];
					$user[2] = ['username'=> $_POST['username'], 'password'=> $_POST['password']];
					$_SESSION['user'] = $user;
					
					header('location: login.html');
				}else{
					echo "Invalid email...";
				}	
			}else{
				echo "Invalid password...";
			}
		}else{
			echo "Invalid username...";
		}
	}
?>