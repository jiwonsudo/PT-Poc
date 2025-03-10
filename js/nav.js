const nav = document.getElementById('nav');

// 스크롤 부분
let preScrollTop = 0;
let isMobile = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <= 580 ? true : false;
const minScrollHeight = isMobile ? 100 : 30;

addEventListener('scroll', () => {
  let nextScrollTop =  window.scrollY || window.pageYOffset;

  if (nextScrollTop < minScrollHeight) {
    nav.classList.remove('clear');
  } else {
    if (preScrollTop < nextScrollTop) { //down
      nav.classList.add('clear');
    } else { // up
      nav.classList.remove('clear');
    }
  }

  preScrollTop = nextScrollTop;
});