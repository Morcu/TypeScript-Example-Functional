//Clase dato
class Dato {

    valor: number;
    id: string;

    constructor (valor: number, id: string) {   
        this.valor = valor;
        this.id = id;
    }
    toString(){

        return this.id + this.valor;
    }
    
}

//Clase dato
class DatoOriginal {

    valor: number;
    id: string;
    descripcion: string;

    constructor (valor: number, id: string) {   
        this.valor = valor;
        this.id = id;
    }
    toString(){

        return this.id + this.valor;
    }
    
}

//Funciones
function doble(obj: Dato){
    
        return new Dato(obj.valor*2,obj.id);
}

 function menor5(obj: Dato){ 
        
        return obj.valor < 5;
}

function orden(obj1:Dato, obj2:Dato){

    if(obj1.valor===obj2.valor){
        
            if(obj1.id<obj2.id){//Si letra1 es menor que letra2 
                return 1;
            }else if(obj1.id===obj2.id){
                return 0;
            }
            return -1;
    }

    return obj1.valor-obj2.valor;//0, -, +
}

function suma(objAnt: Dato, objAct: Dato, indice: number, vector: any){

    return new Dato(objAnt.valor + objAct.valor,objAnt.id + objAct.id);
}

//Se crean los datos
let datos: Array<Dato> = [];

datos[0] = new Dato(3,"A");
datos[1] = new Dato(1,"B");
datos[2] = new Dato(4,"C");
datos[3] = new Dato(2,"D");
datos[4] = new Dato(5,"E");


//Aplicamos las funciones a los datos
var total: Dato =  datos.map(doble).filter(menor5).sort(orden).reduce(suma);



console.log("El valor total tras aplicar las funciones es: " + total.toString());