document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const btn = document.getElementById("themeToggle");

  body.classList.add("dark");

  btn?.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    btn.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
  });
});
