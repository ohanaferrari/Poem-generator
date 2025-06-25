

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
  let prompt = `Generate a funny very short sarcastic poem about ${input.value}, please. Make sure to add <br /> at the end of each line, except the last.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}


let button = document.querySelector("#generateButton");
button.addEventListener("click", generatePoem);
