const $submit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $visible = document.getElementById("visible");

document.addEventListener("change", (e)=>{
    if(e.target === $visible){
        if($visible.checked === false) $password.type = "password";
        else $password.type ="text";
    }
});


function login(){
    var user, pass;
    user= document.getElementById("username").value;
    pass= document.getElementById("password").value;
    console.log("login")      

    if(user == "Julian" && pass == "1234"){
        
        window.location="index.html"
    }
    else{
        alert("Usuario no encontrado, intente de nuevo por favor")
      }
}

