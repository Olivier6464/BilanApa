const items = document.querySelectorAll("li");
// console.log(items);
let timeOut;

items.forEach((elem) =>
  elem.addEventListener(
    "click",
    function (event) {
      navigator.clipboard.writeText(event.target.innerText.substring(0, 7));
      event.target.classList.add("copied");
      timeOut = setTimeout(() => {
        event.target.classList.remove("copied");
      }, 1000);
    },
    false
  )
);
