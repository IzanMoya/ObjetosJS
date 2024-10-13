/**
 * Definir l'estructura d'una pseudoclasse els objectes de la qual emmagatzemen una factura. També serà necessari crear les pseudoclasses 
 * Element i Client. Les factures estan formades per la informació de la pròpia empresa que no canvia (nom de l'empresa, direcció, telèfon, NIF) , 
 * la informació del client (semblant a la de l'empresa) , una llista d'elements (cada un dels quals disposa de descripció, preu, quantitat) 
 * i una altra informació bàsica de la factura (import total, tipus d'iva, forma de pagament) . Una vegada definides les propietats de l'objecte,
 *  afegir un mètode que calcule l'import total de la factura i actualitze el valor de la propietat corresponent. Finalment, afegir un altre 
 * mètode que mostre per pantalla l'import total de la factura.
 */

//La pseudoclase se pone como una funcion object de java
function Factura(nomEmpresa, cliente, elementos, tipoIva, formaPago) {
    this.nomEmpresa = nomEmpresa;
    this.cliente = cliente;
    this.elementos = elementos;
    this.tipoIva = tipoIva;
    this.formaPago = formaPago;


    this.calcularImpTotal = this.calcularImpTotal();
};

function cliente(nomCliente, direccion, telefono, NIF) {
    this.nomCliente = nomCliente;
    this.direccion = direccion;
    this.telefono = telefono;
    this.NIF;
};

function elemento(descripcion, precio, cantidad) {
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
};

function calcularImpTotal(){
    let importSinIva = 0;

    for(let elemento of this.elemento){
        importSinIva += elemento.precio * elemento.cantidad;
    }

    return importSinIva * (1 + this.tipoIva);
};

function mostrarImporteTotal(){
    console.log(`El importe total de la factura es de: ${this.calcularImpTotal.toFixed(2)} €`)
}

//Ejemplo de uso
const empresa = {
    nomEmpresa: "Empresa S.L.",
    direccion: "Carrer mayor",
    telefono: "123241",
    NIF: "A143141"
};

//Creación del cliente 
const client = new Client("Client Example", "Carrer Client 456", "987654321", "B98765432");

const elemento = [
    new Element("Ordenador portatil", 1000, 2),
    new Element("Ratomn", 25, 3),
    new Element("Teclado", 75, 1)
];

const factura = new Factura(empresa, client, elemento, 0.21, "Targeta de crédito");

factura.mostrarImporteTotal();
