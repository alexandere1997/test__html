import Swiper, { Navigation } from 'swiper';
import SwiperCore, {Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);
Swiper.use([Navigation]);
  import 'swiper/swiper-bundle.css';

  let slider = () => {

    var swiper = new Swiper('.swiper-container', {
      cssMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination'
      },
      mousewheel: true,
      keyboard: true,
    });
  }

  export default slider;