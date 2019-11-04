  let tab: Array<number> = [1, 2, 9, 4, 8, 3];
    console.log('Taille: ' + tab.length);
    tab[3] += 15, tab[4] += 15;
    console.log("Tableau: " + tab);
    tab = tab.sort(function(a,b){
        return a-b;
    });
    console.log("Tableau trié: " + tab);