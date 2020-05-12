var contaner = document.querySelector(".container");
var score = document.querySelector(".score");
var question = document.querySelector(".question");
var scoreCard = document.querySelector("#scoreCard");
var button = document.getElementById("button");
var ipt1 = document.querySelector(".inpp");
var prece = document.getElementById("prece");
var scoreNem = document.getElementById("scoreNem");
var scorePr = document.getElementById("scorepr");
var para = document.getElementById("paragraph");
var blo = document.getElementById("clicked");
var dom = document.getElementsByClassName("preambule");
var etape = document.querySelectorAll(".etape h5");
var btn = document.querySelector(".btn");

var app = {
    questions: [{
            q: "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",
        },
        {
            q: "Quelle est votre température corporelle ?",
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
            q: "Actuellement, comment vous vous sentez ?",
        },
        {
            q: "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.",
        },
        {
            q: "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
        },
        {
            q: "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
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
        if (this.index < 21) {
            question.innerHTML = this.questions[this.index].q;
            button.disabled = true;
            ipt1.innerHTML = "";
            ipt1.innerHTML += `
                         <div>
                            <input type="radio" name="choice" id="oui" class="lab" value="oui">
                            <label for="oui">
                                <i class="fas fa-check"></i>
                                <span>Oui</span>
                            </label>
                        </div>
                        <div>
                        <input type="radio" name="choice" id="non" class="lab" value="non">
                        <label for="non">
                            <i class="fas fa-times""></i>
                            <span>Non</span>
                        </label>
                        </div>`;

            if (this.index === 1) {
                ipt1.innerHTML = `
                                    <input type="number" min="34" max="42" placeholder="34-42" id="inputTom">
                                    <span id="inputDeg" >
                                    degrés </span>
                                    `;
            } else if (this.index === 9) {
                ipt1.innerHTML = "";
                ipt1.innerHTML += `<div class="imoji">
                                                <div class="pre">
                                                    <input type="radio" name="choice" id="oui" class="like lab" value="Bien">
                                                    <label for="oui">
                                                        <i class="far fa-laugh"> </i>
                                                        <span> Bien </span> 
                                                    </label>
                                                </div>
                                                <div class="dos">
                                                    <input type="radio" name="choice" id="non" class="like lab" value="Assez bien">
                                                    <label label for="non" >
                                                        <i class="far fa-smile-beam"></i>
                                                    <span> Assez bien </span> 
                                                    </label>
                                                </div>
                                                <div class="tro">
                                                    <input type="radio" name="choice" id="aba" class="like lab" value="Fatigué(e)">
                                                    <label for="aba">
                                                        <i class="far fa-frown"></i>
                                                    <span> Fatigué(e) </span> 
                                                    </label>
                                                 </div>
                                                 <div class="cat">
                                                    <input type="radio" name="choice" id="ana" class="like lab" value="Très fatigué(e)">
                                                    <label for="ana">
                                                        <i class="far fa-dizzy"></i>
                                                    <span> Très fatigué(e) </span> 
                                                    </label>
                                                </div>
                                   </div>`;
            } else if (this.index === 10) {
                ipt1.innerHTML = `<input type="number" min="15" max="110" placeholder="15-110" id="inputTom">
                                    <span id = "inputDeg" >
                                    ans </span>`;
            } else if (this.index === 11) {
                ipt1.innerHTML = `<input type="number" min="20" max="250" placeholder="20-250" id="inputTom">
                                    <span id = "inputDeg" >
                                    Kg </span>`;
            } else if (this.index === 12) {
                ipt1.innerHTML = `<input type="number" min="80" max="250" placeholder="80-250" id="inputTom">
                                    <span id = "inputDeg" >
                                    cm </span>`;
            } else if (this.index === 19) {
                ipt1.innerHTML = "";
                ipt1.innerHTML += `
                        <div>
                            <input type="radio" name="choice" id="oui" class="lab" value="oui">
                            <label for="oui">
                                <i class="fas fa-check"></i>
                                <span>Oui</span>
                            </label>
                        </div>
                        <div>
                        <input type="radio" name="choice" id="non" class="lab" value="non">
                        <label for="non">
                            <i class="fas fa-times""></i>
                            <span>Non</span>
                        </label>
                        </div>
                        <div>
                        <input type="radio" name="choice" id="hom" class="lab">
                        <label for="hom">
                            <i class="fas fa-male"></i>
                            <span>Homme</span>
                        </label>
                        </div>`;
            } else if (this.index === 21) {
                button.innerHTML = "Terminer le test";
            }
        }
        if (this.index === 0) {
            prece.style.visibility = "hidden";
        } else {
            prece.style.visibility = "visible";
        }
    },

    next: function() {
        this.index++;
        this.load();
        if (this.index < 21) {
            button.innerHTML = "Suivans";
        } else if (this.index >= 21) {
            button.innerHTML = "Terminer le Test";
        }
    },
    previous: function() {
        this.index--;
        this.load();
    },
    scoreB: function() {
        if (this.index <= 21) {
            scoreNem.style.width = ((this.index + 1) * 100) / 22 + "%";
            scorePr.innerHTML = this.index + 1 + "/" + this.questions.length;
        }
    },
};
window.onload = app.load();
window.onload = app.scoreB();

function next() {
    app.next();
    app.scoreB();
    suiveQuetion();
}

function previous() {
    app.previous();
    app.scoreB();
    // preceQuetion();
}

function newFunction() {
    para.style.display = "none";
    blo.style.display = "none";
    button.innerHTML = "Suivans";
    document.getElementById("test").style.display = "block";
    etape[0].classList.remove("ball");
    etape[1].classList.add("ball");
}

ipt1.addEventListener("change", (event) => {
    const input = event.target;
    if (input.type === "radio") {
        button.disabled = false;
        btn.addEventListener("onmouseout", () => {
            btn.style.backgroundColor = "#1078ad";
        });
    } else {
        button.disabled = false;
    }
});

// // afficher next questions

// function suiveQuetion() {
//     var inputTom = document.querySelector("#inputTom");
//     if (ipt1.children[0].id === "inputTom") {
//         if (inputTom.value === " ") {
//             alert("SVP choisir une valeur");
//             return;
//         } else if (
//             this.index === 1 &&
//             (inputTom.value < 34 || inputTom.value > 42)
//         ) {
//             alert("la temperature doit etre comprise entre 34 et 42");
//             return;
//         } else if (
//             this.index === 10 &&
//             (inputTom.value < 15 || inputTom.value > 110)
//         ) {
//             alert("l'age doit etre comprise entre 15 et 110");
//             return;
//         } else if (
//             this.index === 11 &&
//             (inputTom.value < 20 || inputTom.value > 250)
//         ) {
//             alert("le poids doit etre comprise entre 20 et 250");
//             return;
//         } else if (
//             this.index === 12 &&
//             (inputTom.value < 80 || inputTom.value > 250)
//         ) {
//             alert("la taille doit etre compris entre 80 et 250");
//             return;
//         } else {
//             var number = parseFloat(inputTom.value);
//             valeurs.push(number);
//             console.log(valeurs);
//         }
//     } else {
//         var selectR = document.querySelectorAll('input[type="radio"]:checked');
//         if (!selectR) {
//             alert("SVP choisir une reponse!");
//             return;
//         } else {
//             var value = selectR.getAttribute("value");
//             valeurs.push(value);
//             console.log(valeurs);
//         }
//     }
//     this.index++;
// }

// function preceQuetion() {
//     this.index--;
//     valeurs.pop(this.index); // supprimer la reponse enregister a la fin de tableau s'il ya un retour vers la question precedente (modification)

//     console.log(valeurs);
// }
// index = 0;
// var condition = 0;
var valeurs = [];

function suiveQuetion() {
    this.index = this.index - 1;
    var inputTom = document.getElementById("inputTom");
    if (ipt1.children[0].id === "inputTom") {
        if (inputTom.value = "  ") {
            alert("Svth zfeh");
            return;
        } else {
            // var number = parseFloat(inputTom.value);
            valeurs.push(inputTom.value);
            console.log(valeurs);
        }
    } else {
        var selectR = document.querySelector('input[name="choice"]:checked');
        if (!selectR) {
            alert("SVP choisir une reponse!");
            return;
        } else {
            var value = selectR.getAttribute("value");
            valeurs.push(value);
            console.log(valeurs

            }
        }
    }