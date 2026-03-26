let text = " Robinson wesonga";
;

let i = 0;

function typing() {

    if (i < text.length) {

        document.querySelector(".typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 100);

    }

}

typing();

function showtime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("timebox").
        textContent = time;
}
setInterval(showtime, 1000);
showtime();