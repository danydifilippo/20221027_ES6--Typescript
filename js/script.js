"use strict";
class Abbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        return this.saldo -= this.prezzoivainclusa;
    }
    getacquistocapo() {
        return this.saldo += this.prezzoivainclusa;
    }
}
let URLApi = "./json/Abbigliamento.json";
let promise = fetch(URLApi).then(response => response.json());
promise.then((ecommerce) => {
    console.log(ecommerce);
    let capo = [];
    for (let i = 0; i < ecommerce.length; i++) {
        capo[i] = new Abbigliamento(ecommerce[i].id, ecommerce[i].codprod, ecommerce[i].collezione, ecommerce[i].capo, ecommerce[i].modello, ecommerce[i].quantita, ecommerce[i].colore, ecommerce[i].prezzoivaesclusa, ecommerce[i].prezzoivainclusa, ecommerce[i].disponibile, ecommerce[i].saldo);
    }
    console.log(capo[0].prezzoivainclusa);
    // window.onload = () => {
    //     let capoAbb = document.getElementById('capoAbb') as HTMLSelectElement
    //     let
    //     let btn = document.getElementById('btn') as HTMLButtonElement
    //     btn.addEventListener('click', function() {
    //     });
});
