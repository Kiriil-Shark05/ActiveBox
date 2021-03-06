
  let oneBlock = document.querySelector('.block-one');
  let header = document.querySelector('header');
  let header_block_item = document.querySelector('.header-block-item');
  let header_burger = document.querySelector('.header_burger');

  const animItems = document.querySelectorAll('._anim-items');


  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 6;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active')
          header.classList.remove('header-active');
          header_block_item.classList.remove('header_block_item-active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
            header.classList.add('header-active');
            header_block_item.classList.add('header_block_item-active');
          }

        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
      animOnScroll();
    }, 300);
}
