//  I

const Carnitine = [{name: 'Temo', age: 25}, {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]



function Sponge(info) {

    info.sort( (m,n) => m.age-n.age);
    return info[0];
 }
 
 var youngest = Sponge(Carnitine) 
 console.log(youngest.name);


// II

const GorisYulaba = {
    name: 'shuqura',
    Reason: 'ristvis moevlina arc tviton ar icis',
    age: 27,
    Username: 'Nebismieri sxva saxeli'

}

function mcenare(GorisYulaba) {
    const Gorisyulaba1 =GorisYulaba;
    return Gorisyulaba1;
}

const nadiroba = mcenare(GorisYulaba);
console.log(nadiroba)




// III



function WiteliReinjeri() {
    return Math.floor(Math.random() * 10)
}


let KrakadziliA = WiteliReinjeri();
let KrakadziliB = WiteliReinjeri();



function Geraldinho() {
    let xmeliFotoli = 0;
    let Shnuri = 0;
    while (true) {
        xmeliFotoli++;
        if (WiteliReinjeri() === 3) {
            console.log(`პირველს დასჭირდა ${xmeliFotoli} მცდელობა`);
            console.log("პირველმა მოიგო")
            break;
        }
        Shnuri++;
        if (WiteliReinjeri() === 3) {
            console.log(`მეორეს დასჭირდა ${Shnuri} მცდელობა`);
            console.log('მეორემ მოიგო')
            break;
        }
        
    }
    

    
    
    

}

Geraldinho();