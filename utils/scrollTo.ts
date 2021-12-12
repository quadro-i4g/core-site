const scrollTo = (target: string) => {
  document.querySelector(`#${target}`)?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};

export default scrollTo;
