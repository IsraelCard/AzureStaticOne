//Crea una constante con el nombre de tu mascota
const GaleriaGatos = document.getElementById("Gatitos");
//Agrega este evento
GaleriaGatos.addEventListener("click",()=>{
    window.location.href = "view/gatitos.html";
});


const GaleriaPerros = document.getElementById("Perros");

GaleriaPerros.addEventListener("click",()=>{
    window.location.href = "view/Perros.html";
});


const GaleriaLoros = document.getElementById("Loros");

GaleriaLoros.addEventListener("click",()=>{
    window.location.href = "view/Loros.html";
});