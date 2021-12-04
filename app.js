const Personne = function (sonNom, sonPrenom, sonAge, sonSexe) {
    this.nom = sonNom;
    this.prenom = sonPrenom;
    this.age = sonAge;
    this.sexe = sonSexe;

    this.maPremiereMethode = function () {
        return "Ma personne s'apelle " + this.nom + " " + this.prenom + " elle à " + this.age + " ans" + " son sexe est: " + this.sexe;

    }

    this.setPersonne = function (modificationNom, modificationPrenom) {
        this.nom = modificationNom;
        this.prenom = modificationPrenom;
    }

}

let personne1 = new Personne("Decroix", "Noah", "18 ans", "masculin");
let personne2 = new Personne("Delcroix", "Michel", "55 ans", "masculin");
let personne3 = new Personne("Delcroix", "Micheline", "60 ans", "féminin");
let personne4 = new Personne("jeCPa", "aucunneInspi", "180 ans", "masculin");
let personne5 = new Personne("inspi0", "Tjrpasl'inspi", "114 ans", "féminine");

const myTable = [personne1, personne2, personne3, personne4, personne5];

for (let i = 0; i < myTable.length; i ++) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = myTable[i].nom + " " + myTable[i].prenom + " " + myTable[i].age + " " + myTable[i].sexe;
    document.getElementById("container").append(newDiv);
}

