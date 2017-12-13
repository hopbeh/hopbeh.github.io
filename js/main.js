/*

 > Document - весь файл HTML
 > .ready - метод, который означает, что скрипты, которые есть тут, 
 > будут работать когда загрузится все стили и файлы.
 > function() - вызываемая функция, в которой работают все скрипты.

*/
$(document).ready(function() {
        // slick-gallery - скрипт для слайдера
        $('.slick-gallery').slick({
           lazyLoad: 'ondemand',
          slidesToShow: 3,
          slidesToScroll: 1
        })
        $('.parallax-window').parallax({imageSrc: '/img/bg.jpg'});
        $('.parallax-windowsecond').parallax({imageSrc: '/img/img4.jpg'});
      });


/*

  Slick Slider - скачан с сайта
  Parallax Effect - скачан с сайт

*/