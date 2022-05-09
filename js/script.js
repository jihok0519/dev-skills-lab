const btn = document.querySelector("button");

btn.addEventListener("click", function (evt) {
    const li = document.createElement("li");
    const input = document.querySelector("input");
  li.textContent = input.value;
  document.querySelector('ul').appendChild(li);
});