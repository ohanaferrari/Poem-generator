

function displayPoem(response) {

  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let input = document.querySelector(".input-text");
  let apiKey = "at320d4o2fcf70104aac4f08799bd0b0";
  let prompt = `Generate a funny very short sarcastic poem about ${input.value}, please. Make sure to add <br /> at the end of each line - EXCEPT the last one.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${apiKey}`;

  let poemElement = document.querySelector(".poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛ Generating your veeery serious poem... Wait a sec!</div>`;
  axios.get(apiUrl).then(displayPoem);
}


let button = document.querySelector("#generateButton");
button.addEventListener("click", generatePoem);
