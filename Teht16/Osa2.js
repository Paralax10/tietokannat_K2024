const readline = require('readline');

const ry = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function onPalindromi(sana){
    sana = sana.replace(/\s/g, '').toLowerCase();

    const reversedSana = sana.split('').reverse().join('');

    if (sana == reversedSana){
        return true;
    } 
    else{
        return false;
    }
}

ry.question('Anna sana: ',(sana) => {
    if(onPalindromi(sana)) { 
        console.log(`${sana} on palindromi`);
    }
    else{
        console.log(`${sana} ei ole palindromi`);
    }
    ry.close();
});