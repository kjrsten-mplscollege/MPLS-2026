//button variables

const cat_btn = document.getElementById("cat_btn");
const dog_btn = document.getElementById("dog_btn");
const cat_result = document.getElementById("cat_result");
const dog_result = document.getElementById("dog_result");

//event listeners

cat_btn.addEventListener("click", getRandomCat);
dog_btn.addEventListener("click", getRandomDog);

//functions that run when event listeners are clicked

function getRandomCat() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      cat_result.innerHTML = `<img src=${data.message} alt="cat"/>`;
    });
}

function getRandomDog() {
  fetch("https://random.dog/woof.json").then((res) =>
    res.json().then((data) => {
      if (data.url.includes(".mp4")) {
        getRandomDog();
      } else {
        dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
      }
    })
  );
}
