function validerDateOfBirth()
{
    var elementDate = document.getElementById("date_naissance")
    var elementValue =new Date(elementDate.value) ;
    const dateAujourdhui = new Date();
    if (elementValue>=dateAujourdhui)
    {
        alert("please select a correct date that is before today");
    }
    else
    {
        alert("date is valid")
    }
}

var formElement = document.getElementById("form");
var nameElement = document.getElementById("nom");
formElement.addEventListener("submit",function(event)){
    event.preventDefault();
    validateName()
}

function validateName(){
    var NameValue = nameElement.value;
    var pattern = /^[a-z A-Z]+$/
    var nameError = document.getElementById("NameError")
    if(!NameValue.match(pattern))
    {
        nameError.innerHTML = "<span style = 'color :red'> Nom ne doit contenir que des lettres et doit avoir au moins un caractere</span> "
    }
    else
    {
        nameError.innerHTML = "<span style ='color:green'>Correct</span>"
    }
}

