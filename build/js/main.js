"use strict";

addBtag();
document.addEventListener("DOMContentLoaded", function () {
  appearanceChips();
  swiper();
});

function addBtag() {
  var hrefLanding = window.location.href,
      btag = hrefLanding.split("btag=")[1],
      link = document.querySelectorAll("a");

  if (btag) {
    link.forEach(function (item) {
      var itemHref = item.getAttribute("href");
      item.setAttribute("href", itemHref + "&btag=" + btag);
    });
  }
}

function appearanceChips() {
  var sectionReason = document.querySelector(".reason"),
      chipItem = document.querySelectorAll(".reason__chip-item-wrapper"),
      chipItemText = document.querySelectorAll(".reason__text");
  var sectionHeightTop = sectionReason.getBoundingClientRect().top;
  var alreadyDone = false;
  window.addEventListener("scroll", function () {
    if (document.documentElement.clientWidth >= 992) {
      if (!alreadyDone && window.pageYOffset >= sectionHeightTop) {
        chipItem.forEach(function (item) {
          item.style.cssText = "animation: backInLeftChips 1s forwards;";
        });
        chipItemText.forEach(function (item) {
          item.style.cssText = "animation: backInLeftChips 1s forwards;";
        });
        alreadyDone = true;
      }
    } else if (!alreadyDone && window.pageYOffset + 200 >= sectionHeightTop) {
      chipItem.forEach(function (item) {
        item.style.cssText = "animation: backInLeftChips 1s forwards;";
      });
      chipItemText.forEach(function (item) {
        item.style.cssText = "animation: backInLeftChips 1s forwards;";
      });
      alreadyDone = true;
    }
  });
}

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    preloadImages: false,
    lazy: true,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    speed: 2000,
    // zoom: {
    //   maxRatio: 1.5,
    // },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      1920: {
        centeredSlides: true,
        slidesPerView: "auto"
      }
    }
  }); // const swiperSlide = document.getElementsByClassName("swiper-slide");
  // for (let i = 0; i < swiperSlide.length; i++) {
  //   swiperSlide[i].addEventListener("mouseover", function (e) {
  //     swiper.zoom.in();
  //   });
  //   swiperSlide[i].addEventListener("mouseout", function (e) {
  //     swiper.zoom.out();
  //   });
  // }
}