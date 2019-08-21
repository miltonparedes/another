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

// Exelent little functions to use any time when class modification is needed
function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += "" + cls;
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, '');
  }
}

// Add event from js the keep the markup clean
function init() {
  let elementsArray = document.querySelectorAll(".menu-toggle");
  elementsArray.forEach(function (element) {
    element.addEventListener("click", toggleMenu);
  });
}

// The actual function
function toggleMenu() {
  var ele = document.getElementsByTagName('body')[0];
  if (!hasClass(ele, "open")) {
    addClass(ele, "open");
  } else {
    removeClass(ele, "open");
  }
}

// Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function () {
  if (document.readyState === "complete") {
    init();
  }
});

// Tabs

window.addEventListener("load", function () {
  // store tabs variable
  var myTabs = document.querySelectorAll("ul.nav-tabs > li");
  function myTabClicks(tabClickEvent) {
    for (var i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove("active");
    }
    var clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add("active");
    tabClickEvent.preventDefault();
    var myContentPanes = document.querySelectorAll(".tab-pane");
    for (i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove("active");
    }
    var anchorReference = tabClickEvent.target;
    var activePaneId = anchorReference.getAttribute("href");
    var activePane = document.querySelector(activePaneId);
    activePane.classList.add("active");
  }
  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener("click", myTabClicks)
  }
});
