function generatePoem(event) {
    event.preventDefault();

new Typewriter(".poem", {
    strings: "La tombe dit à la rose :<br>« Tu es belle, mais tu es éphémère. »<br>La rose répond :<br>« La beauté est un cadeau, même s'il est fugace. »",
    autoStart: true,
    loop: false,
    delay: 1, 
});
}

let poemForm = document.querySelector(".poem-form");
poemForm.addEventListener("submit", generatePoem);