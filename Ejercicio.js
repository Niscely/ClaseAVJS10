
let codigo = prompt("Ingrese el codigo:");
let nombre = prompt("ingrese el nombre");
let not1 = Number(prompt("Nota 1:"));
let not2 = Number(prompt("Nota 2:"));
let not3 = Number(prompt("Nota 3:"));
let not4 = Number(prompt("Nota 4:"));

class Alumno {
    constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
//promedio: 15-20-25-40
    promedio( ) {
        let promedio = (this.nota1 * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25) + (this.nota4 * 0.4)
        return promedio;
    }
//desaprobado y aprobado, 
    condicion() {
        let promedio = this.promedio()
        let condicion = "";

        if(promedio < 12){
            condicion = "Desaprobado";
        
        }else{
            condicion = "Aprobado";
        }
        return condicion;
    }

    obsequio(){
        let promedio = this.promedio();
        let condicion = this.condicion();
        let obsequio = "";

        if(condicion = "Aprobado"){

         }if(promedio > 16){
            obsequio = "Gano una mochila";

         }else {
            obsequio = "Promedio menor a 17, no obtuvo el premio";
        }
        return obsequio;
    }

}

let nombress = new Alumno (codigo, nombre, not1, not2, not3, not4)

console.log(nombress);
console.log("Promedio:" + nombress.promedio());
console.log("Condicion:" + nombress.condicion());
console.log(nombress.obsequio());

/*condicion(){}
obsequio(){}*/
