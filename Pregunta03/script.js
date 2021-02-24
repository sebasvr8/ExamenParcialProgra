function hideDivById(divId) {
    hideAllDivW3Includes()
    var element = document.getElementById(divId)
    if (element.style.display === "none") {
        element.style.display = "block"
    }
}

//Ocultar todo el contenido de pestañas de HTML
function hideAllDivW3Includes() {
    var elementArray = document.getElementsByName("pages")
    for (var element of elementArray) {
        element.style.display = "none"
    }
}

w3.includeHTML()

function calcular() {
    var presupuesto = document.getElementById("presupuesto").value
    var compra = document.getElementById("compra").value
    var precio = document.getElementById("precio").value
    var cantidad = document.getElementById("cantidad").value
    var subtotal = precio*cantidad
    if(subtotal>presupuesto) 
        "dentro" 
    else 
        "fuera"
    var table1 = document.createElement("tbody")
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3); 
    var cell5 = newRow.insertCell(4)
    cell1.innerHTML = compra;
    cell2.innerHTML = precio;
    cell3.innerHTML = cantidad;
    cell4.innerHTML = subtotal ;
    cell5.innerHTML = "estado"

    
    alert("Presupuesto: "+ presupuesto + "\nCompra: "+ compra + "\n Precio:"+ precio + "\n Cantidad: "+ cantidad + "\nsubtotal: "+(subtotal) )
}
function sumaTotal () {
    var diferencia = 0;
    var total = 0; 
    
    diferencia = total - presupuesto;
    document.getElementById("totalText").innerHTML = Total + ".";
    document.getElementById("diferenciaText").innerHTML = Diferencia + ".";


}