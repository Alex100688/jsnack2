const parola= prompt("Inserisci la parola");
const parolaDue=prompt ("Inserisci la parola");

let frase= true;

if(parola>parolaDue){
    frase=true;
    console.log(frase)
   
}
else if (parola<parolaDue)
    {
        frase=false;
        console.log(frase)
    }