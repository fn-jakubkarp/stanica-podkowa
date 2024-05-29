export const handleCall = (tel: string) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    const userConfirmed = window.confirm(
      `Chcesz zadzwonić do ${tel}?`,
    );
    if (userConfirmed) {
      window.location.href = `tel:${tel}`;
    }
  } else {
    window.location.href = "#kontakt";
  }
};
