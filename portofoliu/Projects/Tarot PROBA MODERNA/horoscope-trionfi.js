const submitBtn = document.querySelector("#submit-btn");

const options = {
  method: "POST",
  headers: {
    "X-RapidAPI-Key": "620d15cf77msh4781f86dac32193p1daa71jsn557c7b39b098",
    "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
  },
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const zodiacSign = document.querySelector("#zodiac-sign").value;
  const date = document.querySelector("#date").value;
//   const color = document.querySelector(".color");

  fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${zodiacSign}&day=${date}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const container = document.querySelector("#result");
      const childrens = container.childNodes;

      childrens.forEach((child) => {
        child.innerHTML = response[child.id];
      });
    })
    .catch((err) => console.error(err));
});
