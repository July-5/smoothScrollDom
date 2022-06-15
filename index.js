let requestAnimationFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
  // 获取当前滚动的高度
  const getScrollTop = function (Dom) {
    return Dom.getBoundingClientRect().top; //导航的高度
  };
  // 设置滚动条
  const setScrollTo = function (start, end) {
    window.scrollTo(start, end);
  };
  // 滚动
  const smoothScroll = function (form, to, duration, count = 1) {
    if (duration < 0) {
      setScrollTo(getScrollTop(form),getScrollTop(to));
      return;
    }
    let diff =getScrollTop(to) - getScrollTop(form);
    if (diff === 0) return;
    let step = diff >= window.innerHeight ? (diff / duration) * 10 : diff / 10;
    return () => {
      requestAnimationFrame(function () {
        setScrollTo(form + step * (count - 1), form + step * count);
        if ((diff > 0 && form + step * count >= to) || (diff < 0 && form <= to)) {
          return;
        }
        smoothScroll(form, to, duration, ++count)();
      });
    };
  };
  export { smoothScroll };
  