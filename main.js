/** @format */

"use strict";

const nav = document.querySelector(".nav");
const btn = document.querySelector(".navBtn");

btn.addEventListener("click", function () {
  nav.classList.toggle("stick");
});
const navs = document.querySelectorAll(".navs");

navs.forEach((button) => {
  button.addEventListener("click", function () {
    nav.classList.remove("stick");
  });
});

// STICKY NAV
const headerSection = document.querySelector(".header");

const navObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-50px",
  }
);

navObserver.observe(headerSection);
