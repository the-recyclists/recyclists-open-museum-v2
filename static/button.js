async function recordButtonClick() {
  const response = await fetch("/button_clicked", { method: "POST" });
}

const button = document.getElementById("learn_more_button")

button.addEventListener("click", recordButtonClick)
