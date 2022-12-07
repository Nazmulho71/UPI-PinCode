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
    console.log("SHOW");
  } else {
    x.type = "password";
    document.getElementById("toggleText").childNodes[0].textContent = "SHOW";
    console.log("HIDE");
  }
}
