console.log("Sesion JS06 Dom");

//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
encontrarPorSelector();

function encontrarPorId(){
    // Obtenemos el objeto a través de su ID
    const element = document.getElementById("titulo-h1");
    console.log("Datos del elemento: " + element.innerHTML);
    
    //cambiamos los datos en el objeto
    element.innerHTML= `El <em class="color-em">texto</em> es: "${element.innerHTML} `;
    }

function encontrarPorTagName(){
    // Obtenemos los objetos que cumplan con el tag indicado
    // getElementsByTagName() entrega una colección con los objetos encontrados
    let elements = document.getElementsByTagName("p");
    console.log("Elementos encontrados: "+ elements.length);

    //Obtenemos el elemento del índice 1;
    let parrafo = elements[1].innerHTML;
    console.log("Contenido en p[1]: " + parrafo);
    console.log("Contenido en P[1] usando innerText : " + elements[1].innerText )
    // innerHTML nos entrega el objeto con sus elementos anidados
    // inner Text nos entrega el texto del objeto, sin elementos anidados, y sin
    // dobles espacios.
}

function encontrarPorClase(){
    const elements = document.getElementsByClassName("color");
    console.log("Elementos encontrados: " + elements.length);

    elements[0].innerHTML = "Reacciones Pro";
}

function encontrarPorSelector(){
    const elements = document.querySelectorAll("h3>.color");
    console.log("Elementos encontrados: " + elements.length);

    elements[0].innerHTML = "ganas de comprar";
}