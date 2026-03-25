const text = " Robinson wesonga";
;

let i=0;

function typing(){

if(i<text.length){

document.querySelector(".typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();
