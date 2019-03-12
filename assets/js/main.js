const setTheme = (t1, t2) => {
  document.body.classList.replace(t1, t2);
};
const initTheme = (t1, t2) => {
  document.getElementById(t1).addEventListener("click", () => {
    setTheme(t2, t1);
    localStorage.setItem("theme", t1);
  });
};
const theme = localStorage.getItem("theme") || "light";
setTheme("light", theme);
initTheme("light", "dark");
initTheme("dark", "light");
