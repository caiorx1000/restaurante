window.sr = ScrollReveal({ reset: true });

sr.reveal('.text-header', {duration:2000})

sr.reveal('.secao-2', {
    rotate: { x: 0,  y:10, z: 0 },
    duration:3000
});

sr.reveal('footer', {
    rotate: { x: 0,  y:80, z: 0 },
    duration:3000
});

function fazerAcao() {
    var area = document.getElementById('')
}
function adicionarIngrediente(){
    var ing = document.getElementById("ingrediente").value;

    var listahtml = document.getElementById ("lista").innerHTML;

    listahtml = listahtml + '<li>'+ ing +"</li>";

    document.getElementById("lista").innerHTML = listahtml;
}

