<?php


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BUSINESS WEBSITE</title>
<link rel="stylesheet" type="text/css" href="css1/style.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
</head>
</html>


  <!--------------------------------------------------------------------------------NavigationBar------------------------------------------------------------------------------->

  <section id="nav-bar">
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#"><img src="M.Edu.PNG"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
   <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="index.php">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="About.php">ABOUT US</a>
      </li>

       <div class="subnav">
    <button class="subnavbtn">MBA MATERIALS <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      //////////////////////////////////////////////////////////////////////////////<a href="exams.php">MBA EXAMS</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      <a href="chapters.php">CHAPTERS</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      <a href="previouspapers.php">PREVIOUS PAPERS</a>
    </div>
  </div> 
    




      <li class="nav-item">
        <a class="nav-link" href="self-dev.php">SELF DEVELOPMENT</a>
         </li>
         <li class="nav-item">
        <a class="nav-link" href="test.php">PRATICE TESTS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="exams.php">MBA EXAMS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="news.php">NEWS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.php">CONTACT</a>
    </li>
     <li class="nav-item">
        <a class="nav-link" href="register.php">SIGNUP</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="login.php">LOGIN</a>
    </li>
   </ul>
  </div>
</nav>
</section>


<!----------------------------------------------------------------------------------------------->
<style>
body{
    background-image: url('black.jpg');
    background-size: cover;
    background-attachment: fixed;
    color: white;
   }

.flex-column{
  display: flex;
  flex-direction: column;
}

.flex_center{
  justify-content: center;
  align-items: center;
}

h1{

  text-align: center;
  padding-bottom: 10px;
  font-family: 'Nova Square', cursive;
  color: white;
}

.end-form-container {
  width:  100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30rem;
}

input{
  margin-bottom: 1rem;
  width: 20rem;
  padding: 1.5rem;
  font-size: 1.8rem;
  border: none;
  box-shadow: 0 0.1rem 1.4rem 0 rgba(86, 185, 235, 0.5);
}

input::placeholder{
  color: #aaa;
}

#username {
  margin-bottom: 3rem;
  width: 100%;
  outline: none;
}

#end-text {
  font-size: 2.4rem;
  color: #fff;
  text-align: center;
}

#saveScoreBtn {
  border: none;
}

.fa-home {
  margin-left: 1rem;
  font-size: 2rem;
  color: rgb(28, 26, 26);
}

.btn{
  font-size: 2.4rem;
  padding: 2rem 0;
  width: 30rem;
  text-align: center;
  margin-bottom: 1rem;
  text-decoration: none;
  color: rgb(28, 26, 26);
  background: linear-gradient(90deg, rgb(18, 92, 255) 0% rgb(0, 102, 255) 100%);
  border-radius: 4px;
  margin-left: 320px;
}

.btn:hover {
  cursor: pointer;
  box-shadow: 0 0.4rem 1.4rem 0 rgba(8, 114, 244, 0.6);
  transition: transform 150ms;
  transform: scale(1.03);
} 

.btn[disabled]:hover {
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

h5{

  text-align: center;
  padding-bottom: 10px;
  font-family: 'Nova Square', cursive;
  color: white;
  font-size: 40px;
}  

</style>


<body>
  <div class="container">
    <div id="end" class="flex-home flex-column">
      <h5 id="final score">0</h5>
      <br><br><h1 id="end-text">Enter your name below to save your score</h1><br>
      <input type="text" name="name" id="username" placeholder="enter your name">
      <button class="btn" id="saveScoreBtn" type="submit"
        onclick="saveHighScore(event)" disabled>save</button>
        </form>
      <a href="test.php" class="btn">Go Home<i class="fas fa-home"></i></a>
      </div>
  </div>
  <script src="end.js"></script>
</body>




