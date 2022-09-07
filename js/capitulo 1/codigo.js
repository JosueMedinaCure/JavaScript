

/* 
COFLA PARTE 1

OP LOGUICOS

 
 dineroCofla = prompt("cuanto dinero tienes Cofla?");
 dineroRoberto = prompt("cuanto dinero tienes Roberto?");
 dineroPedro = prompt("cuanto dinero tienes Pedro?");

dineroCofla = parseInt( dineroCofla); 

if (dineroCofla >= 0.6 && dineroCofla < 1 ) {
    alert("Cofla, comprate el helado de agua");
    alert("y te sobran" + (dineroCofla - 0.6));
}

else if ( dineroCofla >= 1 && dineroCofla< 1.6  ) {

    alert("Cofla, comprate el helado de crema");
    alert("y te sobran" + (dineroCofla - 1));
} 

else if (dineroCofla >= 1.6 && dineroCofla < 1.7 ){
    alert("Cofla, comprate el helado de helaidix");
    alert("y te sobran" + (dineroCofla - 1.6));
}

else if ( dineroCofla >= 1.7 && dineroCofla < 1.8 ){
    alert( "Cofla, comprate el helado de heladovich ");
    alert("y te sobran" + (dineroCofla - 1.7));
}

else if( dineroCofla >= 1.8 && dineroCofla < 2.9 ){
    alert("Cofla, comprate el helado de helardo");
    alert("y te sobran" + (dineroCofla - 1.8));
}

else if (dineroCofla  >= 2.9 ){
    alert( " Cofla, helado con confites o el pote de 1kg ");
    alert("y te sobran" + (dineroCofla - 2.9));
     
}
else {
     alert( " lo siento Cofla,  pobre de mierda no te aclanza para nada ");
}




if (dineroRoberto >= 0.6 && dineroRoberto < 1 ) {
    alert("Roberto, comprate el helado de agua");
}

else if ( dineroRoberto >= 1 && dineroRoberto< 1.6  ) {

    alert("Roberto, comprate el helado de crema");
} 

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7 ){
    alert("Roberto, comprate el helado de helaidix");
}

else if ( dineroRoberto >= 1.7 && dineroRoberto < 1.8 ){
    alert( "Roberto, comprate el helado de heladovich ");
}

else if( dineroRoberto >= 1.8 && dineroRoberto < 2.9 ){
    alert("Roberto, comprate el helado de helardo");
}

else if (dineroRoberto  >= 2.9 ){
    alert( "Roberto, helado con confites o el pote de 1kg ");
     
}
else {
     alert( " lo siento Roberto, pobre de mierda no te aclanza para nada ");
}



if (dineroPedro >= 0.6 && dineroPedro < 1 ) {
    alert("Pedro, comprate el helado de agua");
}

else if ( dineroPedro >= 1 && dineroPedro< 1.6  ) {

    alert("Pedro, comprate el helado de crema");
} 

else if (dineroPedro >= 1.6 && dineroPedro < 1.7 ){
    alert("Pedro, comprate el helado de helaidix");
}

else if ( dineroPedro >= 1.7 && dineroPedro < 1.8 ){
    alert( "Pedro, comprate el helado de heladovich ");
}

else if( dineroPedro >= 1.8 && dineroPedro < 2.9 ){
    alert("Pedro, comprate el helado de helardo");
}

else if (dineroPedro  >= 2.9 ){
    alert( " Pedro, helado con confites o el pote de 1kg ");
     
} 
else {
     alert( "lo siento Redro, pobre de mierda no te aclanza para nada");
} */







/* 

ARRAYS Y ARRAYS ASOCIATIVOS



let pc1 = {

    nombre: "DaltoPC",
    procesador: "intel Core I7", 
    ram: "16GB",
    espacio: "1TB"
};

 let pc2 = ["daltoPC", "intel core I7", "16GB", "1TB"];

document.write(pc1["nombre"])  


let nombre = pc1 ["nombre"];
let procesador = pc1 ["procesador"];
let ram = pc1 ["ram "]
let espacio = pc1 ["espacio"];

frase = `el nombre de mi pc es: <b> ${nombre}</b> <br>
         el procesador es: <b> ${procesador}</b> <br>
         la memoria ram es: <b> ${ram}</b> <br>
         el espacio en disco es <b> ${espacio}</b> <br>`;

document.write(frase) */





/*
WHILE

let numero = 0;

while (numero <= 6 ) {

    numero++;

    document.write(numero + "<br>")

} */





 /* 
 
DO WHILE

 let numero = 0;
 

do{

document.write(numero + "<br>")

numero ++;

}

while (numero <= 6)  */



/* let numero = 0;
 

while (numero <= 6){

document.write(numero + "<br>")

numero ++;

} */
   

/* 

BREAK Y CONTINUE


let numero = 0;
 

while (numero < 1000){
numero ++

document.write(numero + "<br>")

if (numero == 12){
    break;
}

}
 */

/* 

FOR

for(let i = 0; i < 6; i++ ){

    document.write(i + "<br>")

} */


 /*

IN Y OF



let animales = ["gato", "perro", "tiranosaurio rex"];

for (animal in animales){
    document.write(animal + "<br>");
}

document.write("<br>");

for (animal of animales){
    document.write(animal + "<br>");
} 

 


LABEL


array1 = [ "maria", "josofa", "Roberta"];
array2 = [ "pedro", "marcelo", array1];

 for( let array in array2 ){

    if (array == 2 ) { 

    for( let array of array1 ){

        document.write(array + "<br>")
       } 

    } 
    else {
          document.write(array2[array] + "<br>")
    }
 
} */


/* 


FUNCIONES

 function saludar () {

    pregunta = prompt("hola josue como fue tu dia?");
    if(pregunta == "bien") {
        alert("me alegro");
    } else{
        alert("chupalo mkon");
    }


 }
 saludar();
  */


 /* 
 
 FUNCIONES - RETURN
    
    function saludar(){
    alert("hola")
    return " la funcien se ejecuto correctamente"

 }
 saludo = saludar();
 document.write(saludo); */



/*   function suma(num1, num2){
    let res = num1 + num2;
    document.write(res)
    document.write("<br>")
  }

    suma("hola", " agua de coco");
    suma(3, 45); */


   /*
   
   ejemplo apara lo que puede servir tabien
   
   let nombre = prompt("cual es tu nombre");

    function saludar (nombre){ 
        let frase = `hola ${nombre} como estas?`;
       
        document.write(frase);
    }
    saludar(nombre); */


    /*  const saludar = (nombre)=> {
        document.write("hola como estas? " + nombre);
     }

     saludar("perro htpa"); */


     /*COFLA PARTE 2*/


   /*  
   
                        FIESTA COFLA 
   
   
   
   let free = false;

    const validarCliente = (time)=>{
        let edad = prompt(" cual es tu edad");

         if(edad >= 18){

            if (time >= 2 &&time < 7 && free == false){
                alert("podes pasar gratis porque eres la primera persona despues de las 2 AM");
                free = true;
            }else{
                alert(`son las ${time}:00HS y puedes pasar, pero tienes que pagar `);
                }

         }else{
             alert("mira papu ne puedes pasar menorcito d mrd");
         }


    }


validarCliente(23);
validarCliente(24);
validarCliente(2);
validarCliente(0.6);
validarCliente(1);
validarCliente(3);
 */


/* 

                    ASISTENCIA DE ALUMNOS



let cantidad = prompt("Cuantos al alumnos son?");

let alumnosTotales = [];

for ( i = 0; i < cantidad; i++) {
    alumnosTotales[i] =[prompt(" nombre del alumno " + (i + 1)),0]


}

const tomarAsistencia = (nombre, p)=>{
    let presencia  = prompt( nombre + " asistio?"  );
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }

}

    for (alumno in alumnosTotales){  

     let resultado = `${alumnosTotales[alumno][0]} :<br> 
    _________ASISTENCIAS: ${alumnosTotales[alumno][1]} :<br>
    _________AUSENCIAS: ${30 - alumnosTotales[alumno][1]} :<br>
    `;
    if ( 30 - alumnosTotales[alumno][1] > 18) {
        resultado += "<br> <b> reprobado por inasistencia: </b> <br>"
    }else{
        resultado += "<br><br>"
    }
     document.write(resultado);
}
 */


/* 

            CALCULADORA COFLA


const sumar = ( num1, num2)=>{
    return parseInt (num1) + parseInt(num2);
}
const restar  = ( num1, num2)=>{
    return parseInt (num1) - parseInt(num2);
}
const dividir  = ( num1, num2)=>{
    return parseInt (num1) / parseInt(num2);
}
const multiplicar = (num1, num2)=>{
    return parseInt (num1) * parseInt(num2);
}

alert ("oue operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: division, 4 :multiplicacion");

if (operacion == 1){
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("primer segundo numero para sumar");
    resultado = sumar(numero1, numero2)
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2){
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = restar(numero1, numero2);
        alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3){
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = dividir(numero1, numero2); 
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4){
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = multiplicar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}

else{
    alert ("no se ha encontrado la opreracion")
}

document.write(resultado); */



/*

            PROGRAMACION ORIENTADA A OBJETOS

                            POO


                    CLASES

ESTA ES LA PRIMERA FORMA

class animal {

    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad} anos 
        y mi color es ${this.color} `;
    }

}

const perro = new animal("perro", "12", "marron");
const gato = new animal("gato", "2", "negro");
const pajaro = new animal("pajaro", "1", "verde");

document.write(perro.info +  "<br>"); 
document.write(gato.info +   "<br>"); 
document.write(pajaro.info + "<br>");  */


/*

        ESTA ES LA SEGUNDA FORMA 



    class animal {

    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad} anos 
        y mi color es ${this.color} `;
    }

    verInfo(){
        document.write(this.info + "<br>")
    }

}

const perro = new animal("perro", "12", "marron");
const gato = new animal("gato", "2", "negro");
const pajaro = new animal("pajaro", "1", "verde");


perro.verInfo();
gato.verInfo();
pajaro.verInfo();*/



/* 

                            HERENCIA



class Animal {

    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad} anos 
        y mi color es ${this.color} `;
    }

    verInfo(){
        document.write(this.info + "<br>")
    }
}


    class Perro extends Animal{
    constructor(especie, edad , color, raza){
        super( especie, edad, color, raza)
        this.raza = (" y soy un " + raza );
    }
    verRaza(){
        document.write( this.info + this.raza);    
    }

        ladrar(){
            alert("wawawa");
        }
}

 const perro = new Perro("perro", "12", "marron", "dobermannnnn ");
 const gato = new Animal("gato", "2", "negro");
 const pajaro = new Animal("pajaro", "1", "verde");


    
    perro.verRaza();    

 */




    /* class Animal {

        constructor(especie,edad,color){
            this.especie = especie;
            this.edad = edad;
            this.color = color;
            this.info = `soy ${this.especie}, tengo ${this.edad} anos 
            y mi color es ${this.color} `;
        }
    
        verInfo(){
            document.write(this.info + "<br>")
        }
    }
    
    
        class Perro extends Animal{
        constructor(especie, edad , color, raza){
            super( especie, edad, color, raza)
            this.raza = null;
        }
        verRaza(){
            document.write( this.info + this.raza);    
        }
    
           set setRaza(newName){
                 this.raza = newName;
            }

            get getRaza(){

                return this.raza;
            }

    }
    
     const perro = new Perro("perro", "12", "marron", "dobermannnnn ");
     const gato = new Animal("gato", "2", "negro");
     const pajaro = new Animal("pajaro", "1", "verde");
    
    
        
        perro.setRaza = "pedro";
        document.write(perro.getRaza); */



/* 
       class Celular{
            constructor( color, peso, rdp, rdc, ram){
                 this.color = color ;
                 this.peso = peso ;
                 this.resolucionDePantalla  = rdp;
                 this.resolucionDeCamara = rdc;
                this.memoriaRam = ram;
                this.encendido = false;
            }
            presionarBotonEncendido(){
                if (this.encendido == false){
                    alert("celular prendido");
                    this.encendido = true;
                }else{
                    alert("celular apagado");
                }
            }

            reiniciar(){
                if(this.encendido = true){
                    alert("reiniciando celular")
                }else{
                    alert("el celular esta apagado")
                }
            }
            tomarfoto(){
                alert(`foto tomada en una resolucion de ${this.resolucionDeCamara}`)
            }
            grabarVideo(){
                alert(`video grabado en uan resolucion de ${this.resolucionDeCamara}`)
            }
            mobileInfo(){
                return `
                color: ${this.color} <br>
                peso: ${this.peso} <br>
                tamano: ${this.tamano} <br>
                resolucion de pantalla: ${this.resolucionDePantalla} <br>
                memoria ram: ${this.memoriaRam} <br>
                resolucion de videos: ${this.resolucionDeCamara} <br>
                `;
            }
        }

        class celularAltaGama extends Celular{
            constructor(color,peso,tamano,rdc,ram,rdce){
            super(color,peso,tamano,rdc,ram);
            this.resolucionDeCamaraExtra = rdce;
        }
        
        grabarVideoLento(){
            alert("estas grabando en camara lenta ");
        }
        reconocimientoFacial(){
            alert("vamos a iniciar reconocimiento facial")
        }

        infoAltagama(){
            return this.mobileInfo() + `resolucion de camara extra : ${this.resolucionDeCamaraExtra}`
        }
    
    }


        celular1 = new Celular("rojo", "150G", "5'", "full hhHD", "2GB")
        celular2 = new Celular("rojo", "120G", "52'", "full HD", "2GB")
        celular3 = new Celular("rojo", "1550G", "51'", "full HD", "2GB")       
 

        celular1 = new celularAltaGama("rojo", "130g", "5.2", "4k", "3gb", "full hd");
        celular2 = new celularAltaGama("negro", "140g", "6.2", "4k", "4gb", "ful hd");
 */
        /* document.write(`
        
        ${celular1.infoAltagama()} <br> <br>
        ${celular2.infoAltagama()} <br>
        

        `); 
 */

      /*    document.write(`${celular1.mobileInfo()}`)
 */


    /* class App{
        constructor(descarga, puntuacion,peso){
        this.descarga = descarga;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false
        this.instalada = false
        }
        abrir(){
            if(this.iniciada == false && this.instalada == true){
                this.iniciada = true;
                alert("app iniciada")
            }
        }
        cerrar(){
            if(this.iniciada == true && this.instalada == true){
                this.iniciada = false;
                alert("app cerrada")
            }
        }
        instalar(){
            if(this.instalada == false){
                this.instalada = true;
                alert("aplicacion instalada correctamente")
            }
        }
        desinstalar(){
            if(this.instalada == true){
                this.instalada = false;
                alert("aplicacion desinstalada correctamente")
            }
        }
        appInfo(){
            return`
            descargas: ${this.descarga} <br>
            puntuacion: ${this.puntuacion} <br>
            peso: ${this.peso}
            `
        }
    }

    app = new App("1.000", "5 estrellas", "900mb")
    app2 = new App("16.000", "5 estrellas", "900mb")
    app3 = new App("16.000", "5 estrellas", "900mb")
    app4 = new App("16.000", "5 estrellas", "900mb")
    app5 = new App("16.000", "5 estrellas", "900mb")
    app6 = new App("16.000", "5 estrellas", "900mb")
    app7 = new App("16.000", "5 estrellas", "900mb")

  /*   app.instalar();
    app.abrir();
    app.cerrar();
    app.desinstalar(); 


    document.write(`
    ${app.appInfo()} <br> <br>
    ${app2.appInfo()}<br> <br>
    ${app3.appInfo()}<br> <br>
    ${app4.appInfo()}<br> <br>
    ${app5.appInfo()}<br> <br>
    ${app6.appInfo()}<br> <br>
    ${app7.appInfo()}<br> <br>

    `) */




      

     
     
     let cadena = "abcdefg";
     
     

     resultado = cadena.toString();
     document.write(resultado); 



