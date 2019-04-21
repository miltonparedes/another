const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
};
const initTheme = (t1, t2) => {
  document.getElementById(t1).addEventListener("click", () => {
    setTheme(t1);
    localStorage.setItem("theme", t1);
  });
};
const theme = localStorage.getItem("theme") || "light";
setTheme(theme);
initTheme("light", "dark");
initTheme("dark", "light");
