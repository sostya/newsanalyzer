import './about.css';
import '../blocks/header/header.css';
import '../blocks/footer/footer.css';
import '../blocks/about/about.css';

function carouselFlkty() {
  let flkty;
  if (window.matchMedia("(max-width: 990px").matches) {
      flkty = new Flickity( '.main-carousel', {
          cellAlign: 'left',
          contain: true,
          wrapAround: true,
          groupCells: '80%',
          setGallerySize: false,
          freeScroll: true,
          arrowShape: {
              x0: 30,
              x1: 55, y1: 25,
              x2: 60, y2: 20,
              x3: 40
          }
      });
  } else {
      flkty = new Flickity( '.main-carousel', {
          cellAlign: 'center',
          contain: true,
          wrapAround: true,
          groupCells: '80%',
          setGallerySize: false,
          freeScroll: true,
          arrowShape: {
              x0: 30,
              x1: 55, y1: 25,
              x2: 60, y2: 20,
              x3: 40
          }
      });
  }
}

carouselFlkty();
window.addEventListener('resize', () => carouselFlkty());
