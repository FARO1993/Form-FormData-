function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = Object.fromEntries(data.entries());

  console.log({ value });
}

function main() {
  const form = document.querySelector(".mi-form");
  form.addEventListener("submit", handleSubmit);
}

main();
