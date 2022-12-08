let btn = document.querySelectorAll(".keypad > div > button");
let inp = document.querySelector("input");
btn.forEach((v) => {
  v.addEventListener("click", () => {
    inp.value += v.innerText;
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
  let input = document.getElementById("input");
  input.value = input.value.substring(0, input.value.length - 1);
}
