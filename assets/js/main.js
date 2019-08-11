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

//Exelent little functions to use any time when class modification is needed
function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      ele.className = ele.className.replace(reg, ' ');
  }
}

//Add event from js the keep the marup clean
function init() {
  document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
}

//The actual fuction
function toggleMenu() {
  var ele = document.getElementsByTagName('body')[0];
  if (!hasClass(ele, "open")) {
      addClass(ele, "open");
  } else {
      removeClass(ele, "open");
  }
}

//Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function() {
  if (document.readyState === "complete") {
      init();
  }
});
