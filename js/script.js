class Persona {

    constructor (nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar (){
        alert(`Hola ${this.nombre} ${this.apellido}, tienes ${this.edad} años`);
    }

}

eduardo = new Persona('Eduardo', 'Garcia', 46);
eduardo.saludar();
carlos = new Persona('Carlos', 'Pedraza', 52);
carlos.saludar();