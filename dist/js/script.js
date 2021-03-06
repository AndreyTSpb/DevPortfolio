"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.menu__links');

  if (menu != null) {
    /**
     *  убрать у всех элементов списка класс active,
     *  и добавить у нужного
     */
    var activeMenu = function activeMenu(menu, id_block) {
      var lis = menu.querySelectorAll('li');

      for (var i = 0; i < lis.length; i++) {
        var child = lis[i].querySelector('a');
        console.log(child.getAttribute('data-id'));

        if (child.getAttribute('data-id') == id_block) {
          lis[i].classList.add('active');
        } else {
          lis[i].classList.remove('active');
        }
      }
    };
    /**
     * Открываем блоки
     */


    var showBlock = function showBlock(id_block) {
      var main = document.querySelector('main');

      if (main != null) {
        var blocks = main.querySelectorAll('section');

        for (var i = 0; i < blocks.length; i++) {
          if (blocks[i].getAttribute('id') == id_block) {
            blocks[i].classList.add("show");
          } else {
            blocks[i].classList.remove("show");
          }
        }
      }
    };
    /**
     * отображвем меню в мобильной версии
     */


    var showMenu = function showMenu() {
      var menu = document.querySelector('.menu');
      btn_menu.classList.add('none');
      menu.classList.add('show');
    };

    var hideMenu = function hideMenu() {
      var menu = document.querySelector('.menu');
      btn_menu.classList.remove('none');
      menu.classList.remove('show');
    };

    /**
     * Переход по вкладкам в меню
     */
    menu.addEventListener('click', function () {
      var target = event.target;
      var id_block = 'about'; //если щелчек произошел по ссылке

      if (target.tagName == 'A') {
        var _id_block = target.getAttribute('data-id');

        activeMenu(menu, _id_block);
        showBlock(_id_block);
      } // если по элементу списка

    });
    var btn_menu = document.querySelector('.btn-menu'),
        btn_close_menu = document.querySelector('.menu>.btn-close');

    if (btn_menu != null) {
      btn_menu.addEventListener('click', function () {
        showMenu();
      });
      btn_close_menu.addEventListener('click', function () {
        hideMenu();
      });
    }
  }
});