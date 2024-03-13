const inputs = document.querySelector("#input");
let string = "";
let buttons = document.querySelectorAll(".button button");
let buttonsList = Array.from(buttons);
buttonsList.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.innerHTML === "=") {
      // string += e.target.innerHTML;
      string = eval(string);
      inputs.value = string;
    } else if (e.target.innerHTML === "Ac") {
      string = "";
      inputs.value = string;
    } else if (e.target.innerHTML === "Del") {
      string = string.substring(0, string.length - 1);
      inputs.value = string;
    } else {
      string += e.target.innerHTML;
      inputs.value = string;
    }
  });
});
