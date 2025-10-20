const btn = document.getElementById("checkBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const age = document.getElementById("age").value;

  if (age === "") {
    result.textContent = "Насаа оруулна уу!";
    result.className = "underage";
    return;
  }

  if (age >= 18) {
    result.textContent = "Та насанд хүрсэн байна 🎉";
    result.className = "adult";
  } else {
    result.textContent = "Та насанд хүрээгүй байна 😢";
    result.className = "underage";
  }
});
