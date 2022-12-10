/* CASO ECOMMERCE :
ABUELO MARIO, SE TRATA DE UN SITIO WEB QUE VENDE PRODUCTOS PARA BARBERIAS, COMO ASI TAMBIEN VENTA AL PÚBLICO EN GENERAL*/


//1) ARRAY DE OBJETOS, EL CUAL CONTIENE PRODUCTOS DE PROYECTO FINAL (ECOMERCE, PRODUCTOS PARA BARBERIAS).-

let productos = [
    {
        id: 01,
        nombre: "Chicle",
        precio: 400, /* producto con 15% de descuento */
        descripcion: "Ceras ABM linea Candy Fruits. Fijación media a fuerte HIDRATA y MODELA",
        tipo: "cera",
        oferta: true,
    },
    {
        id: 02,
        nombre: "Brutus",
        precio: 600,
        descripcion: "Balsamo para Barba y Bigote.Nuestro bálsamo para barba exfolia e hidrata",
        tipo: "pomada",
        oferta: false,
    },
    {   
        id: 03,
        nombre: "Desert Clay",
        precio: 550,
        descripcion: "Arcilla de alta calidad: Ingredientes orgánicos puros y arcilla bentonita",
        tipo: "pomada",
        oferta: false,
    },
    {   
        id: 04,
        nombre: "Gel Capilar",
        precio: 450,
        descripcion: "Gel GOMINA de extra brillo y fijación ultra fuerte.Fragancia Kosiuko, efecto humedo",
        tipo: "gel",
        oferta: false,
    },
    {
        id: 05,
        nombre: "Manzana INK",
        precio: 400, /* producto con 15% de descuento */
        descripcion: "Ceras ABM linea Candy Fruits. Fijación media a fuerte HIDRATA y MODELA",
        tipo: "cera",
        oferta: true,
    },
    {   
        id: 06,
        nombre: "Marine",
        precio: 450,
        descripcion: "Fragancia exclusiva Staygold: notas cítricas, acuáticas y amaderadas",
        tipo: "cera",
        oferta: false,
    },
    {   
        id: 07,
        nombre: "Matte String",
        precio: 450,
        descripcion: "Pomada de fijación media y acabado mate/opaco. Enriquecido con extractos naturales",
        tipo: "cera",
        oferta: false,
    },
    {   
        id: 08,
        nombre: "Oleo para barba",
        precio: 550,
        descripcion: "Óleo Formulado con mezcla de aceites que promueven el crecimiento del bello de la barba",
        tipo: "oleo",
        oferta: false,
    },
    {   
        id: 09,
        nombre: "ABM Powder",
        precio: 600,
        descripcion: "Polvo voluminizador 3D para cabello normal y fino. Enriquecido con pantenol",
        tipo: "powder",
        oferta: false,
    },
    {   
        id: 10,
        nombre: "Shaving gel",
        precio: 550,
        descripcion: "Shaving Gel es un gel de afeitado que no oscurece, tampoco se convierte en espuma",
        tipo: "gel",
        oferta: false,
    },
]


//2) ESTA FUNCION, CALCULA EL 15 PORCIENTO DE DESCUENTO Y LO APLICA DIRECTAMENTE AL PRECIO FINAL, MOSTRANDO LOS PRODUCTOS EN CONSOLA ACUTALIZADOS.-

function descuento (pr){
const productosConDescuento = productos.filter(( elemento ) => {
    if (elemento.oferta==true) {
    elemento.precio=elemento.precio - elemento.precio*15/100;
    return elemento.precio
    }
})
console.log (`Productos: `, productos)
}
descuento(productos)

// 3) ESTA FUNCIÓN ORDENA ALFABETICAMENTE A LOS PRODUCTOS, MUESTRA ORDENADOS ALFABETICAMENTE LOS OBJETOS.-

function ordenarAlfabeticamente (item) {
    const productosOrdenados = [...productos].sort(( a, b) => {
        if ( a.nombre < b.nombre ){
            return -1
        } else if ( a.nombre > b.nombre){
            return 1
        } else {
            return 0
        }    })
    console.log(productosOrdenados)
}
    ordenarAlfabeticamente (productos)

//4) ESTA FUNCIÓN REALIZA UN FILTRO, Y MUESTRA LOS PRODUCTOS CON DESCUENTO.-

    function mostrarProductosConDescuento (pr) {
    const prodDescuento = productos.filter(( elemento ) => {
    elemento = (elemento.oferta==true)
    return elemento})
    if (confirm ("¿Desea ver los productos con descuento?")) {
    console.log(`Los productos con descuento son: `, prodDescuento)}
    }
    mostrarProductosConDescuento (productos)

//5) ESTA FUNCIÓN PERMITE AL USUARIO INGRESAR UN PRODUCTO Y MOSTRAR SI HAY ALGUNO DISPONIBLE, CON RESPECTO A LA BUSQUEDA.-

function verProductoSeleccionado (pr) {
let buscar = prompt("Ingrese que tipo de producto desea ver: cera, pomada, oleo, gel");
let muestra = productos.find ((busqueda) => {
    return busqueda.tipo==buscar.toLocaleLowerCase()}
    )
    console.log(`Los productos disponibles son:`, muestra)
    alert(`Los productos disponibles son:`, muestra)    
}
verProductoSeleccionado (productos)
