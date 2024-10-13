/**
 * Definir en Javascript els següents objectes :
- Animal : Té com a atributs (propietats) el nom, l'espècie, el numere de potes i si té cua.
Definir els mètodes getter i setter.
- Vaca : Té tots els atributs d'Animal i un altre en què es controle la llet que proporciona. A
més dels mètodes getter i setter, tindrà un altre mètode que actualitze al nombre de litres
obtinguts cada vegada que es muny
- Tigre : Té tots els atributs d'Animal i un altre en què es comptabilitze el nombre de
víctimes caçades. A més dels mètodes getter i setter, tindrà un altre mètode que actualitze el
número de mates caçades.
 */

class animal  {
    constructor(nom, especie, patas, cola){
        this.nom = nom;
        this.especie = especie;
        this.patas = patas;
        this.cola = cola;
    }
    //Metodos Getter
    get nom(){
        return this.nom;
    }

    get especie(){
        return this.especie;
    }

    get patas(){
        return this.patas;
    }

    get cola(){
        return this.cola;
    }
    //Metodos Setter
    set nom(nuevoNom){
        this.nom = nuevoNom;
    }

    set especie(nuevaEspecie){
        this.especie = nuevaEspecie;
    }

    set patas(nuevaPatas){
        this.patas = nuevaPatas;
    }

    set cola(nuevaCola){
        this.cola = nuevaCola;
    } 
}

class Vaca extends animal {
    constructor(nom, especie, numPotes, teCua, litrosLeche = 0) {
        super(nom, especie, numPotes, cola);
        this.litrosLeche = litrosLeche;
    }
}

animal.extend(vaca);