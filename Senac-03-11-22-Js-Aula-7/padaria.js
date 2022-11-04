


function preco() {

    /* Variaveis ligadas a cada produto da lista */
    let paoChapa = window.document.getElementById("paoNaChapa");
    let sonho = window.document.getElementById("sonho");
    let cafe = window.document.getElementById("cafe");
    let bolo = window.document.getElementById("bolo");
    let pastel = window.document.getElementById("pastel");
    let chocolate = window.document.getElementById("chocolate");
    let suco = window.document.getElementById("suco");
    let paoFrances = window.document.getElementById("paoFrances");
/*-------------------------------------------------------------------*/

/**  Variavel do Switch */
    let escolha = [paoChapa, sonho, cafe, bolo, pastel, chocolate, suco, paoFrances];

    /** Variavel do resultado */
    let resultado = window.document.getElementById("precoResultado");

    /** */

    
    switch (escolha) {
        case paoChapa:
            resultado.innerHTML = `<h2>R$ 11,55</h2>`;
            console.log("Pão na chapa!");
            break;

        case sonho:
            resultado.innerHTML = `<h2>R$ 7,50</h2>`;
            console.log("Sonho!");
            break;

        case cafe:
            resultado.innerHTML = `<h2>R$ 3,90</h2>`;
            console.log("Café!");
            break;

        case bolo:
            resultado.innerHTML = `<h2>R$ 8,20</h2>`;
            console.log("Fatia de bolo!");
            break;

        case pastel:
            resultado.innerHTML = `<h2>R$ 4,00</h2>`;
            console.log("Pastel!");
            break;

        case chocolate:
            resultado.innerHTML = `<h2>R$ 5,30</h2>`;
            console.log("Chocolate!");
            break;

        case suco:
            resultado.innerHTML = `<h2>R$ 2,00</h2>`;
            console.log("Sucos diversos!");
            break;

        case paoFrances:
            resultado.innerHTML = `<h2>R$ 14,99</h2>`;
            console.log("Pão Francês!");
            break;

        default:
            resultado.innerHTML = `<h3>Por favor escolha algum produto da lista.</h3>`;
            console.log("Default!");
            break;
    }
}
