function validar() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    var userCorreto = "Lucasggiachetto";
    var passCorreto = "16172007";

    if(userCorreto == user && passCorreto == pass){
        alert("Login realizado com sucesso");
        window.location.href = "index.html" 
    }else{
        alert("Usuário ou senha inválidos!!");
    }
}