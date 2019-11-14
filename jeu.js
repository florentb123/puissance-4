// Fonction de création du board
function createBoard(ligne,colonne){
    // On vide l'affichage
    contenuElt.innerHTML="";
    // On crée l'élément table du DOM
    let tableElt=document.createElement('table');
    // Chaque case est un élément du tableau à deux dimensions
    // On parcours les lignes
    for (let i=0; i<ligne;i++){
        // Deuxième dimension du tableau
        board[i]=new Array();
        // Element tr du DOM
        let ligneElt=document.createElement('tr');
        ligneElt.id="L"+i;
        // On parcours les colonnes de la ligne
        for (let j=0; j<colonne; j++){
            // Chaque case est initialisée à 0
            board[i][j]=0;
            // Element td du DOM
            let colonneElt=document.createElement('td');
            colonneElt.id="L"+i+"C"+j;
            // Ajout des colonnes à la ligne
            ligneElt.appendChild(colonneElt);
        };
        // Ajout des lignes au tableau
        tableElt.appendChild(ligneElt);
    };
    // ajout du tableau au contenu
    contenuElt.appendChild(tableElt);
}

// Fonction d'initialisation d'une nouvelle partie
function newGame(){
    createBoard(ligne,colonne);
    createEvent(ligne,colonne);
}


// Fonction d'ajout des évènement click sur le tableau

function verifVictoire(i,j){
    // Vérification horizontale
    let countLigne=0;
    let h=0;
    while (h<colonne){
        if (board[i][h]==player){
            countLigne++;
            h++;
        }
        else if (board[i][h]!==player&&countLigne==4){
            h++;
        }
        else {
            countLigne=0;
            h++;
        };
    }; 
    // Vérification anti-diagonale
    let countAntiDiag=0;
    let a=-Math.min(i,colonne-1-j);
    while(i+a<ligne&&j-a<colonne&&i+a>=0&&j-a>=0){
        if (board[i+a][j-a]==player){
            countAntiDiag++;
            a++;
        }
        else if (board[i+a][j-a]!==player&&countAntiDiag==4){
            a++;
        }
        else {
            countAntiDiag=0;
            a++;
        };
    } ;
    
    // Affichage Résultat
    if (countLigne>=4||countColonne>=4||countDiag>=4||countAntiDiag>=4){
        
        // On supprime les évènements clics
        for (let i=0; i<ligne;i++){
        };
       
    }
    else {
        console.log("tour suivant");
        // Affichage Tour suivant 
    };
}

// Initialisation
let colonne=5;
let ligne=5;
let board=new Array();
let contenuElt=document.getElementById('contenu');

let player=1;

let boutonElt = document.getElementById('newGame');
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", function(){
    // Joueur 1 est le joueur rouge
    player=1;
    newGame();
});

// Initialisation
let colonne=7;
let ligne=6;
let board=new Array();
let contenuElt=document.getElementById('contenu');
let player=1;

let boutonElt = document.getElementById('newGame');
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", function(){
    // Joueur 1 est le joueur rouge
    player=1;
    newGame();
});
