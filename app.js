
// for top nav
function openNav() {
   document.getElementsByClassName('side-nav')[0].style.left = "0";
}
function closeNav() {
   document.getElementsByClassName('side-nav')[0].style.left = "-900px";
}

// for fixed scroll to top button
window.onload = function () {
   const shownOnPx = 900;
   const btn = document.querySelector(".to-top");

   const scrollFunc = () => {
      return document.documentElement || document.body;
   }

   document.addEventListener("scroll", () => {
      if (scrollFunc().scrollTop > shownOnPx) {
         btn.classList.remove("hidden")
      } else {
         btn.classList.add("hidden")
      }
   })

   const toTop = () => {
      document.body.scrollIntoView({
         behavior: "smooth",
      });
   }

   btn.addEventListener("click", toTop)
}