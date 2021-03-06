document.addEventListener('DOMContentLoaded', function(){
    let menu = document.querySelector('.menu__links');
    if(menu != null){
        /**
         * Переход по вкладкам в меню
         */
        menu.addEventListener('click', function(){
            let target = event.target;
            let id_block = 'about';
            //если щелчек произошел по ссылке
            if(target.tagName == 'A'){
                let id_block = target.getAttribute('data-id');
                activeMenu(menu, id_block);
                showBlock(id_block);
            }
            // если по элементу списка
        });
        /**
         *  убрать у всех элементов списка класс active,
         *  и добавить у нужного
         */
        function activeMenu(menu, id_block){
            let lis = menu.querySelectorAll('li');
            for (var i=0; i<lis.length; i++){
                let child = lis[i].querySelector('a');
                console.log(child.getAttribute('data-id'));
                if(child.getAttribute('data-id') == id_block){
                    lis[i].classList.add('active');
                }else{
                    lis[i].classList.remove('active');
                }
            }
        }

        /**
         * Открываем блоки
         */
        function showBlock(id_block){
            let main = document.querySelector('main');
            if(main != null){
                let blocks = main.querySelectorAll('section');
                for( var i = 0; i < blocks.length; i++){
                    if(blocks[i].getAttribute('id') == id_block){
                        blocks[i].classList.add("show");
                    }else{
                        blocks[i].classList.remove("show");
                    }
                }
            }
        }

        /**
         * отображвем меню в мобильной версии
         */
        let btn_menu = document.querySelector('.btn-menu'),
            btn_close_menu = document.querySelector('.menu>.btn-close');
        
        if(btn_menu != null){
           
            btn_menu.addEventListener('click', function(){
                showMenu();
            });

            btn_close_menu.addEventListener('click', function(){
                hideMenu();
            });

        }
        function showMenu(){
            let  menu = document.querySelector('.menu');
            btn_menu.classList.add('none');
            menu.classList.add('show');
        }

        function hideMenu(){
            let  menu = document.querySelector('.menu');
            btn_menu.classList.remove('none');
            menu.classList.remove('show');
        }

    }
});