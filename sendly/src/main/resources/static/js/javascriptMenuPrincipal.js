
const usuarioId = sessionStorage.getItem('usuarioId');//Recebe o Cookie
const name = document.querySelector('#name');
const endereco = document.querySelector('#endereco');
const iconPerfil = document.querySelector('#iconPerfil');
const entregasAtivas = document.querySelector('#entregasAtivas');
const statusPedido = document.querySelector('#statusPedido');
const statusTempo = document.querySelector('#statusTempo');
const statusDSM = document.querySelector('#statusDSM');
const statusEndereco = document.querySelector('#statusEndereco');
const statusEntregador = document.querySelector('#statusEntregador');

//Todo este registro de HTML em variáveis abaixo morre ao trocar o main, por conta da cascata
//Por isso o Event Listener é no main com condição para os filhos e não neles, além de buscar por id e não referência
const main = document.querySelector('main');//Único vivo
const buttonsRealizarEntrega = document.querySelector("#realizarEntrega");
const buttonsRastrearPedido = document.querySelector("#rastrearPedido");
const buttonsTrabalheConosco = document.querySelector("#trabalheConosco");
const buttonsSelecionarServico = document.querySelector("#selecionarServicoButton")

//Deslogando, será necessário carregar isto:
//sessionStorage.removeItem('usuarioId');
//window.location.href = './login.html';

//Apagar todos os cookies: sessionStorage.clear();

async function menuInfo(){ 
const usuarioId = sessionStorage.getItem('usuarioId');//Recebe o Cookie
let data = await fetch(
    `https://sendly.up.railway.app/cadastro?id=${usuarioId}`
);

data = await data.json();

name.innerHTML = data.name;
endereco.innerHTML = data.endereco;
entregasAtivas.innerHTML = data.entregasAtivas;
statusPedido.innerHTML = data.statusEntregaRecente;
statusTempo.innerHTML = data.estimativaER;
statusEndereco.innerHTML = 'Av.Paulo Guilguer Reimberg';
statusEntregador.innerHTML = 'Jorge Tomato Silva';
//iconPerfil?
};

main.addEventListener(`click`, function(click){
    const button = click.target.closest("button");

    if(button || main.contains(button)){
        setup(button);
    }
});

function setup(button){
    switch(button.id){
        case "realizarEntrega":buttonsRealizarEntregaPage(); 
        break;
        case "selecionarServicoButton":buttonsSelecionarServicoPage();
        break;
    };
}


async function buttonsRealizarEntregaPage(){ 
    main.innerHTML = `
        <section id="paragrafoHero">
            <div>
                <h1>Sendly</h1>
                <p>Somos uma séria empresa de negócios, onde você e o pacote</p>
                <p> são a prioridade.</p>
            </div>
        </section>
        <section id="imagemHero">
            <img src="imgs/icon_box.png" alt="boxHero">
        </section>
        <section id="buttonsHero">
            <button id="realizarEntrega">Solicitar Serviço</button>
            <button id="selecionarServicoButton">Selecionar Serviço</button>
        </section>
    `;
}

async function buttonsSelecionarServicoPage(){
    main.innerHTML = `
        <section id="buttonsHero">
            <button id="realizarEntrega">Solicitar Serviço</button>
            <button id="selecionarServicoButton">Selecionar Se</button>
        </section>
    `;
};
/*
buttonsRastrearPedido.
buttonsTravalheConosco.
*/
menuInfo();
setInterval(menuInfo, 180000);