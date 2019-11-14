
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
