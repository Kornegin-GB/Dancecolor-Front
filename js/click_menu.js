"use strict";

document.addEventListener("click", function (e) {
   const targetElement = e.target;

   const mainMenu = document.getElementsByClassName("hidden-menu__main-menu");

   const currentElem = targetElement.getAttribute("oneclick");
   if (targetElement.length !== 0) {
      if (targetElement.getAttribute("class") === "hidden-menu__main-menu") {
         console.log(targetElement.getAttribute("class"));
         for (let index = 0; index < mainMenu.length; index++) {
            const element = mainMenu[index];
            const del = element.getElementsByClassName("notDel")
            for (let index = 0; index < del.length; index++) {
               const el = del[index];
               el.setAttribute("class", "del");
            }
         }
      }
   }




   if (targetElement.getAttribute("class") === "burger-checkbox") {
      if (targetElement["checked"]) {
         // console.log(targetElement);
         openMenu([
            "Аренда павильонов и студий",
            "Аренда светового оборудования",
            "Декорации и сценография",
            "Монтаж видео и звука",
            "Выдача программ ",
            "Дата-центр",
            "Реклама в центре",
         ], mainMenu[0]);
      }
   } else {
      switch (targetElement.getAttribute("href")) {
         case "#services": {
            openMenu([
               "Аренда павильонов и студий",
               "Аренда светового оборудования",
               "Декорации и сценография",
               "Монтаж видео и звука",
               "Выдача программ ",
               "Дата-центр",
               "Реклама в центре",
            ], targetElement);
            break;
         }
         case "#excursions": {
            openMenu(["Первое меню", "Второе меню"], targetElement);
            break;
         }
         case "#news": {
            openMenu(["Первое меню", "Второе меню", "Третье меню"], targetElement);
            break;
         }
         case "#about": {
            openMenu(["Первое меню", "Второе меню", "Третье меню", "Четвертое меню"], targetElement);
            break;
         }
         case "#contacts": {
            openMenu(["Первое меню", "Второе меню"], targetElement);
            break;
         }
      }

   }

});

function openMenu(menuList, targetElement) {
   const arrow = targetElement.getElementsByClassName("del");
   if (arrow.length > 0) {
      // console.log(arrow);
      arrow[0].setAttribute("class", "notDel")
   }
   const element = document.getElementsByClassName("hidden-menu__right");
   if (element.length > 0) {
      const elementDiv = element[0];
      while (elementDiv.firstChild) {
         elementDiv.removeChild(elementDiv.firstChild);
      }
      for (let index = 0; index < menuList.length; index++) {
         const itemMenu = document.createElement("a");
         itemMenu.href = "#";
         itemMenu.setAttribute("class", "hidden-menu__child-menu");
         itemMenu.innerText = menuList[index];
         elementDiv.appendChild(itemMenu);
      }

   }
}

