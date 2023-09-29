const spyNav = document.getElementById('sub-nav');
const sections = [...document.querySelectorAll('section')];

const spyItem = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  entries.forEach((entry) => {
    const { id } = entry.target; // <- Gets the section id.
    const spy = spyNav?.querySelector(`[href="#${id}"]`); // <- Query the DOM for the nav item.

    spy?.classList.remove('active');
    if (!entry.isIntersecting) return;
    spy?.classList.add('active');
  });
};

const observer = new IntersectionObserver(spyItem, {
  rootMargin: '-5% 0% -95% 0%',
});

sections.forEach((section) => observer.observe(section));
