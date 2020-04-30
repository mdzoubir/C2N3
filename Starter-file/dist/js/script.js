var contaner = document.querySelector(".container");
var score = document.querySelector(".score");
var question = document.querySelector(".question");
var scoreCard = document.querySelector("#scoreCard");
var button = document.getElementById("button");





var app = {
    questions: [{
            q: "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",
        },
        {
            q: "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
        },
        {
            q: "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
        },
        {
            q: "Ces derniers jours, avez-vous un mal de gorge ?",
        },
        {
            q: "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
        },
        {
            q: "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
        },
        {
            q: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
        },
        {
            q: "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
        },
        {
            q: "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        },
        {
            q: "Êtes-vous diabétique ?",
        },
        {
            q: "Avez-vous ou avez-vous eu un cancer ?",
        },
        {
            q: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        },
        {
            q: "Avez-vous une insuffisance rénale chronique dialysée ?",
        },
        {
            q: "Avez-vous une maladie chronique du foie ?",
        },
        {
            q: "Êtes-vous enceinte ?",
        },
        {
            q: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
        },
        {
            q: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
        },
    ],
    index: 0,

    load: function() {
        question.innerHTML = this.questions[this.index].q;
    },
    next: function() {
        this.index++;
        this.load();
    },
    previous: function() {
        this.index--;
        this.load();


    },
    score: 1,
    scoreCard: function() {
        // scoreCard.innerHTML = this.score + "/" + this.questions.length;

    },
};

window.onload = app.scoreCard();
window.onload = app.load();

function next() {
    app.next();
    document.getElementById('prece').style.visibility = "visible";

}

function previous() {
    app.previous();
}



var para = document.getElementById('paragraph');

var blo = document.getElementById('clicked');
var dom = document.getElementsByClassName("preambule");


blo.style.cursor = "pointer";

function newFunction() {
    para.style.display = "none";
    blo.style.display = "none";
    document.getElementById('test').style.display = "block"
};



button.disabled = true;

function suiv() {
    button.disabled = false;
    button.style.opacity = 1;
    button.style.cursor = "pointer";
}