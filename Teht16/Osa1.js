const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.question('Anna ensimmäinen luku: ', (luku1) => {
  rl.question('Anna toinen luku: ', (luku2) => {
    // Muunna syötteet liukuluvuiksi
    luku1 = parseFloat(luku1);
    luku2 = parseFloat(luku2);
 
    // Tarkistetaan ja ilmoitetaan suurempi luku
    if (isNaN(luku1) || isNaN(luku2)) {
        console.log("Syötä voimassa olevat numerot.");
    } else {
        const suurempiLuku = luku1 > luku2 ? luku1 : luku2;
        console.log("Suurempi luku on: " + suurempiLuku);
    }
    rl.close();
  });
});