function validation(){
    var nome = document.querySelector("#name").value;
    var lastName = document.querySelector("#last-name").value;
    var user = document.querySelector("#email").value.substring(0, document.querySelector("#email").value.indexOf("@"));
    var domain = document.querySelector("#email").value.substring(document.querySelector("#email").value.indexOf("@") + 1);
    var password = document.querySelector("#pass").value;

    document.querySelector("#val-name").innerHTML = " ";
    document.querySelector("#val-last-name").innerHTML = " ";
    document.querySelector("#val-email").innerHTML = " ";
    document.querySelector("#val-pass").innerHTML = " ";

    if(nome.length == 0) {
        document.querySelector("#val-name").innerHTML = "Nome não pode estar vazio";
    }
    if(lastName.length == 0) {
        document.querySelector("#val-last-name").innerHTML = "Sobrenome não pode estar vazio";
    } 
    if((user.length >= 1) && (domain.length >= 3) && (user.search("@") == -1) && (domain.search("@") == -1) && (user.search(" ") == -1) && (domain.search(" ") == -1) && (domain.search(".") != -1) && (domain.indexOf(".") >= 1) && (domain.lastIndexOf(".") < domain.length -1)){
    } else{
        document.querySelector("#val-email").innerHTML = "Email não pode estar vazio";
    }
    if(password.length == 0){
        document.querySelector("#val-pass").innerHTML = "Senha não pode estar vazio";
    }
}
