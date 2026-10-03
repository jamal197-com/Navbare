let open = document.getElementById('open');
let clos = document.getElementById('clos');
let contanier = document.querySelector('.contanier');

clos.onclick = function (){
    contanier.classList.add('hide');
    this.classList.add('hide');
    open.classList.remove('hide');

}
open.onclick = function(){
    this.classList.add('hide');
    contanier.classList.remove('hide');
    clos.classList.remove('hide');
}

