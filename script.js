let btn = document.querySelectorAll(".keypad > div > button");
let inp = document.querySelector("#input");
let length = 1;
const borderIds = ["border2", "border3", "border4", "border5"];
let borders = borderIds.map((id) => document.getElementById(id));
const text = document.getElementById("recipient");
const limit = 13;
const truncated = text.innerText.substring(0, limit) + "...";
text.innerText = truncated;
const toggle = document.getElementById("toggleText");
let pText = [];

btn.forEach((v) => {
  v.addEventListener("click", () => {
    if (length > 4) {
      return;
    } else {
      let elem = document.createElement("p");
      elem.classList.add("code");
      elem.innerHTML = v.innerText;
      inp.appendChild(elem);
      length++;

      for (let i = 2; i <= 5; i++) {
        const borders = document.getElementById(`border${i}`);

        if (length === i) {
          borders.style.backgroundColor = "gray";
        } else {
          borders.style.backgroundColor = "lightgray";
        }
      }
    }
  });
});

function deleteInput() {
  let elem = document.querySelector("#input > p:last-child");
  elem.parentNode.removeChild(elem);
  length--;

  for (let border of borders) {
    border.style.backgroundColor = "lightgray";
  }
}

function hideShowP() {
  const pTags = inp.getElementsByClassName("code");

  if (pTags[0].innerText === "•") {
    for (let i = 0; i < pTags.length; i++) {
      pTags[i].innerText = pText[i];
    }
    toggle.innerText = "HIDE";
  } else {
    for (let i = 0; i < pTags.length; i++) {
      pText[i] = pTags[i].innerText;
      pTags[i].innerText = "•";
    }
    toggle.innerText = "SHOW";
  }
}
