"use strict";

function shiftLeft() {
  var boxes = document.querySelectorAll(".experience__box");
  var tmpNode = boxes[0];
  boxes[0].className = "experience__box move-out-from-left";
  setTimeout(function () {
    boxes[1].className = "experience__box move-to-position1-from-left";
    boxes[2].className = "experience__box move-to-position2-from-left";
    boxes[3].className = "experience__box move-to-position3-from-left";
    boxes[4].className = "experience__box move-to-position4-from-left";
    boxes[0].remove();
    document.querySelector(".experience__cards-container").appendChild(tmpNode);
  }, 500);
}

function shiftRight() {
  var boxes = document.querySelectorAll(".experience__box");
  boxes[4].className = "experience__box move-out-from-right";
  setTimeout(function () {
    var noOfCards = boxes.length;
    var tmpNode = boxes[noOfCards - 1];
    tmpNode.classList.remove("experience__box--hide");
    boxes[noOfCards - 1].remove();
    var parentObj = document.querySelector(".experience__cards-container");
    parentObj.insertBefore(tmpNode, parentObj.firstChild);
    tmpNode.className = "experience__box move-to-position1-from-right";
    boxes[0].className = "experience__box move-to-position2-from-right";
    boxes[1].className = "experience__box move-to-position3-from-right";
    boxes[2].className = "experience__box move-to-position4-from-right";
    boxes[3].className = "experience__box move-to-position5-from-right";
  }, 500);
}