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
var onwan = document.getElementById("onwan");
var nas = document.getElementById("nas");
var nastani = document.getElementById("nastani");
var blas = document.getElementById("blas");
var restart = document.getElementById("restart");

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
                        <input type="radio" name="choice" id="hom" class="lab" value="homme">
                        <label for="hom">
                            <i class="fas fa-male"></i>
                            <span>Homme</span>
                        </label>
                        </div>`;
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
            button.innerHTML = "Suivant";
        } else if (this.index >= 21) {
            button.innerHTML = "Terminer le Test";
            if (this.index === 21) {
                button.addEventListener("click", showResult());

            }

        }
    },
    previous: function() {
        this.index--;
        this.load();
        if (this.index < 21) {
            button.innerHTML = "Suivant";
        } else if (this.index === 20) {
            button.innerHTML = "Terminer le Test";
        }
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
    getAnswer();
    app.next();
    app.scoreB();
}

function previous() {
    app.previous();
    app.scoreB();
    delAnswer();
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
    } else {
        button.disabled = false;
    }
});

var valeurs = [];
var cond = 0;

function getAnswer() {
    var inputTom = document.getElementById("inputTom");
    if (ipt1.children[0].id === "inputTom") {
        if (inputTom.value) {
            var number = parseFloat(inputTom.value);
            valeurs.push(number);
            console.log(valeurs);
        } else {
            alert("pas de valeur");
        }
    } else {
        var selectR = document.querySelector('input[name="choice"]:checked');
        if (selectR) {
            var value = selectR.getAttribute("value");
            valeurs.push(value);
            console.log(valeurs);
        } else {
            alert("pas de reponse");
        }
    }
    console.log(cond);
    cond++;
}

function delAnswer() {
    cond--;
    valeurs.pop(cond);
    console.log(valeurs);
}

function showResult() {
    para.style.display = "block";
    blo.style.display = "block";
    document.getElementById("test").style.display = "none";
    onwan.innerHTML = "Résultats";
    nastani.innerHTML = "Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène. "
    blas.innerHTML = 'Restart Test';
    // restart.style.marginLeft = '100px';
    var fGMin, fGMag, fProno;

    //les facteur de gravité mineur;
    if (
        (valeurs[0] === "oui" && valeurs[1] >= 39) ||
        valeurs[6] === "oui" ||
        valeurs[9] === "Fatigué(e)" ||
        valeurs[9] === "Très fatigué(e)"
    ) {
        fGMin = true;
    } else {
        fGMin = false;
    }
    if (
        (valeurs[0] === "oui" &&
            valeurs[1] >= 39 &&
            valeurs[6] === "non" &&
            (valeurs[9] === "Assez bien" || valeurs[9] === "Bien")) ||
        (valeurs[0] === "non" &&
            valeurs[6] === "oui" &&
            (valeurs[9] === "Assez bien" || valeurs[9] === "Bien")) |
        (valeurs[0] === "non" &&
            valeurs[6] === "non" &&
            (valeurs[9] === "Fatigué(e)" || valeurs[9] === "Très fatigué(e)"))
    ) {
        fGMin = 1;
    } else if (
        (valeurs[0] === "oui" &&
            valeurs[1] >= 39 &&
            valeurs[6] === "oui" &&
            (valeurs[9] === "Fatigué(e)" || valeurs[9] === "Très fatigué(e)")) ||
        (valeurs[0] === "oui" &&
            valeurs[1] >= 39 &&
            valeurs[6] === "oui" &&
            (valeurs[9] === "Assez bien" || valeurs[9] === "Bien")) ||
        (valeurs[0] === "oui" &&
            valeurs[1] >= 39 &&
            valeurs[6] === "non" &&
            (valeurs[9] === "Fatigué(e)" || valeurs[9] === "Très fatigué(e)")) ||
        (valeurs[0] === "non" &&
            valeurs[6] === "oui" &&
            (valeurs[9] === "Fatigué(e)" || valeurs[9] === "Très fatigué(e)"))
    ) {
        fGMin = 2;
    }
    //les facteur de gravité majeur;
    if (
        (valeurs[0] === "oui" && valeurs[1] <= 35) ||
        valeurs[7] === "oui" ||
        valeurs[8] === "oui"
    ) {
        fGMag = true;
    } else {
        fGMag = false;
    }
    //les facteurs pronostiques :
    if (
        valeurs[10] >= 70 ||
        valeurs[13] === "oui" ||
        valeurs[14] === "oui" ||
        valeurs[15] === "oui" ||
        valeurs[16] === "oui" ||
        valeurs[17] === "oui" ||
        valeurs[18] === "oui" ||
        valeurs[19] === "oui" ||
        valeurs[20] === "oui" ||
        valeurs[21] === "oui"
    ) {
        fProno = true;
    } else {
        fProno = false;
    }

    //la premier cas
    if (
        valeurs[0] === "oui" ||
        (valeurs[2] === "oui" && valeurs[3] === "oui") ||
        (valeurs[2] === "oui" && valeurs[4] === "oui") ||
        (valeurs[0] === "oui" && valeurs[5] === "oui")
    ) {
        if (fProno === false) {
            if (fGMag === false && fGMin === false && valeurs[10] > 50) {

                nas.innerHTML =
                    " nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes. ";
            } else if (
                fGMag === false &&
                fGMin === false &&
                (valeurs[10] < 50 || valeurs[10] > 69)
            ) {

                nas.innerHTML =
                    "téléconsultation ou médecin généraliste ou visite à domicile ";
            }
        } else if ((fProno === false || fProno === true) && fGMag === true) {
            nas.innerHTML = "Appel 141";
        } else {
            if (fGMag === false && fGMin === false) {
                nas.innerHTML =
                    "téléconsultation ou médecin généraliste ou visite à domicile ";
            } else if (fGMag === false && fGMin === 1) {
                nas.innerHTML =
                    "téléconsultation ou médecin généraliste ou visite à domicile";
            } else if (fGMag === false && fGMin === 2) {
                nas.innerHTML = "appel 141";
            }
        }

        //la 2eme cas:
    } else if (valeurs[0] === "oui" && valeurs[2] === "oui") {
        if (fProno === false) {
            if (
                (fGMag === false && fGMin === false) ||
                (fGMin === true && fGMag === false)
            ) {
                nas.innerHTML =
                    " téléconsultation ou médecin généraliste ou visite à domicile";
            }
        } else if ((fProno === false || fProno === true) && fGMag === true) {
            nas.innerHTML = " appel 141 ";
        } else {
            if (fGMag === false && fGMin === false) {
                nas.innerHTML =
                    " téléconsultation ou médecin généraliste ou visite à domicile ";
            } else if (fGMin === 1) {
                nas.innerHTML =
                    "téléconsultation ou médecin généraliste ou visite à domicile";
            } else if (fGMin === 2) {
                nas.innerHTML = " appel 141 ";
            }
        }
        //la 3eme cas
    } else if (
        (valeurs[0] === "oui" &&
            valeurs[2] === "non" &&
            valeurs[3] === "non" &&
            valeurs[4] === "non") ||
        (valeurs[0] === "non" &&
            valeurs[2] === "oui" &&
            valeurs[3] === "non" &&
            valeurs[4] === "non") ||
        (valeurs[0] === "non" &&
            valeurs[2] === "non" &&
            valeurs[3] === "oui" &&
            valeurs[4] === "non") ||
        (valeurs[0] === "non" &&
            valeurs[2] === "non" &&
            valeurs[3] === "non" &&
            valeurs[4] === "oui")
    ) {
        if (fGMag === false && fGMin === false) {
            nas.innerHTML =
                "Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute. ";
        } else if ((fGMag === true && fGMin === true) || fProno === true) {
            nas.innerHTML =
                "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141";
        }
    }
    //cas 4
    else if (
        valeurs[0] === "non" &&
        valeurs[2] === "non" &&
        valeurs[3] === "non" &&
        valeurs[4] === "non"
    ) {
        nas.innerHTML =
            "Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.";
    } else {
        nas.innerHTML = 'rak bikhir'
    }

}