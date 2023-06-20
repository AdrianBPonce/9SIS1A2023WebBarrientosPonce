/*
    Como habiamos dicho, js es multiparadigma
    en este caso vamos a ver como seria manejar
    js en poo (programacion orientada a objetos).
*/

class figuraGeometrica{
    //constructor
    constructor()
    //puede o no tener alguna implementacion
}

//metodos
area(){
    //metodo que se encarga de calcular el area
}

perimetro(){
    //metodo para el calculo de perimetros
    console.log("Este metodo calcula el perimetro")
}

class Rectangulo extends figuraGeometrica{
    //constructor
    constructor(base,altura){
        super();
        this._base = base;
        this._altura = altura;
        this._area = null;
        this._perimetro = null;
        this._actualizarArea = false;
        this._actualizarPerimetro = false;
    }

    get area(){
        if(this._actualizarArea || this._area){
            this._area = this.calcularArea();
        }
        return this._area;
    }

    get perimetro(){
        if(this._actualizarPerimetro || this._perimetro){
            this._perimetro = this.calcularPerimetro();
        }
        return this._perimetro;
    }

    calcularArea(){
      console.log(this._base);
      console.log(this._perimetro);
      return this._base * this._altura;
    }
    calcularPerimetro(){
        console.log(this._base);
        console.log(this._perimetro);
        return this._base + this._altura;
      }
}

const objetoRectangulo = new Rectangulo(2,5);

console-log(objetoRectangulo.calcularArea());
console-log(objetoRectangulo.calcularPerimetro());



//spread es una sintaxis que nos permite a un elemneto iterable poder contra los argumentos que pasan por dicho argumento


const arregloOrdenadoMayorMenor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(`Arreglo ordenado: ${arregloOrdenandoMayorMenor}`);

const[valorMasGrande] = arregloOrdenadoMayorMenor;
console.log (`Valor mas grande: ${valorMasGrande}`);

const[valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoValores] = arregloOrdenadoMayorMenor;

console.log(`VMG1, VMG2, VMG3, ...Resto : ${valorMasGrande1, valorMasGrande2, valorMasGrande3}, ${restoValores}`)

const resultadoDeBusqueda = {
    resultados[
    "resultado1",
    "resultado2",
    "resultado3",
    "resultado4",
    "resultado5",
    "resultado6",
    "resultado7",
],
total: 7,
mejorCoincidecia : "resultado3"
};

console.log(`Resultado de l busqueda : ${resultadoDeBusqueda}`);

const {mejorCoincidecia} = resultadoDeBusqueda;

console.log(`Mejor Coincidecia : ${mejorCoincidecia}`);

const copiaResultadoDeBusqueda = {...
    resultadoDeBusqueda};

    console.log (`Copia del resultado de busqueda : ${copiaResultadoDeBusqueda}`);

    const copiaResultadoDeBusquedaModificar = {...
    resultadoDeBusqueda, cadenaBuscada : "resultado3"};

    console.log(`Copia modificada : ${copiaResultadoDeBusquedaModificar}`);




