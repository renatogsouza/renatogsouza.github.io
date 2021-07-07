function transitionPage(page) {
  const tl = gsap.timeline({ duration: 1 });
  tl.to(page, { x: 300 });
}
barba.init({
  transition: [
    {
      name: 'the best of transition',
      leave({ current }) {
        console.log('helo leave', current.container);
        transitionPage(current);
      },
    },
  ],
});