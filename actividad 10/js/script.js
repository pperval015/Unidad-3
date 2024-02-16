function Calificar() {
    let nombres = ["Juan", "Daisy", "Álvaro"];
    let array = [];
    array[0]= parseInt(prompt ("Inserta la nota: "));
    array[1]= parseInt(prompt ("Inserta la nota: "));
    array[2]= parseInt(prompt ("Inserta la nota: "));

    document.getElementById("solucion").innerHTML = 
        nombres[0] + " ha sacado un: " + array[0]+ 
        "<br>"+ nombres[1] +" ha sacado un: " + array[1] + 
        "<br>"+ nombres[2] +" ha sacado un: " + array[2];
}