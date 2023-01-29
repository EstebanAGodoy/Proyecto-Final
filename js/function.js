//Esta funcion es cuando el atributo sea visibility
function mostrarInfo(button, info) {
       if (info.style.visibility === "hidden") {
        info.style.visibility = "visible";
    }else {
        info.style.visibility = "hidden";
    }   
}

// y esta es cuando tenga atributo display
function mostrarInfo2(button, info) {
    if (info.style.display === "none") {
        info.style.display = "block";
    }
    else {
        info.style.display = "none";
    }
}

var boton1 = document.getElementById("mostrar");
var boton2 = document.getElementById("mostrar-habilidades");
var boton3 = document.getElementById("mostrar-idiomas");
var informacion1 = document.getElementById("mas-info");
var informacion2 = document.getElementById("Habilidades");
var informacion3 = document.getElementById("idiomas");

boton1.addEventListener("click", function() {
    mostrarInfo2(boton1, informacion1);
});

boton2.addEventListener("click", function() {
    mostrarInfo(boton2, informacion2);
});

boton3.addEventListener("click", function() {
    mostrarInfo(boton3, informacion3);
});