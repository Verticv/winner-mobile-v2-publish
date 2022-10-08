export default function horizontalsScroll(array, tapIdPrefix, scrollWrapperId, buttonIndex) {
  const currentPath = window.location.pathname;
  const activeTapId = buttonIndex === 0 ? 0 : buttonIndex || array?.filter((item) => item.path === currentPath)?.[0]?.id
  const scrollWrapper = window.document.querySelector(`#${scrollWrapperId}`);

  if (scrollWrapper) {
    if (activeTapId > 2) {
      setTimeout(() => {
        const elementWidth = window.document.querySelector(`#${tapIdPrefix}${activeTapId}`)?.offsetWidth;
        const leftScrollValue = ((activeTapId - 1.5) * (elementWidth))
        window.uss.scrollXTo(leftScrollValue, scrollWrapper)
        console.log(leftScrollValue, ',,,,,,', `#${tapIdPrefix}${activeTapId}`);
        console.log(elementWidth, 'elementWidth');
        console.log(activeTapId, 'activeTapId');
        console.log(leftScrollValue, 'leftScrollValue');
      }, 0)
    } else {
      scrollWrapper.scrollLeft = 0;
      console.log(scrollWrapper, 'scrollWrapper');
    }
  }
}
