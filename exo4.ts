
// initialisation du tableau	
let list : Array<number> = [1,2,9,4,8,3];
// Affichage de la taille du tableau
console.log(list.length);
// Augmente de 15 les contenus dont les indices sont " 3 et 4
list[3] = list[3]+15;
list[4] = list[4]+15;
//  Affichage du tableau  modifié ajout de 15
console.log(list);

let MaxTableau = 6;
let A,B,C,D;

console.log("Au Début : ");
for(A = 0; A < MaxTableau; A++) 
console.log(list[A],); 
for(C = MaxTableau - 2;C >= 0; C--) 
{
    for(D = 0; D <= C; D++)
    {
        if(list[D + 1] < list[D]) 
        {
            let t = list[D + 1];
            list[D + 1] = list[D];
            list[D] = t;
        }
    }
}
console.log("Trié : ");
for(B = 0; B < MaxTableau; B++) 
{
    console.log(list[B]);
}