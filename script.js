let btn = document.querySelectorAll(".keypad > div > button");
let inp = document.querySelector("#input");
const borderIds = ["border1", "border2", "border3", "border4"];
let borders = borderIds.map((id) => document.getElementById(id));

const text = document.getElementById("recipient");
const limit = 13;
const truncated = text.innerText.substring(0, limit) + "...";
text.innerText = truncated;

btn.forEach((v) => {
  v.addEventListener("click", () => {
    if (inp.value.length === 4) {
      null;
    } else {
      inp.value += v.innerText;

      if (inp.value != null) {
        for (let i = 1; i <= 4; i++) {
          const borders = document.getElementById(`border${i}`);

          if (inp.value.length === i) {
            borders.style.backgroundColor = "gray";
          } else {
            borders.style.backgroundColor = "lightgray";
          }
        }
      }
    }
  });
});

function togglePin() {
  let x = document.getElementById("input");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("toggleText").childNodes[0].textContent = "HIDE";
    document.getElementById("input").style.fontSize = "24px";
    document.getElementById("input").style.marginBottom = "14px";
  } else {
    x.type = "password";
    document.getElementById("toggleText").childNodes[0].textContent = "SHOW";
    document.getElementById("input").style.fontSize = "36px";
    document.getElementById("input").style.marginBottom = "0";
  }
}

function deleteInput() {
  inp.value = inp.value.substring(0, inp.value.length - 1);
  for (let border of borders) {
    border.style.backgroundColor = "lightgray";
  }
}
