export const handleCall = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    const userConfirmed = window.confirm(
      "Do you want to call +48 510 058 955?",
    );
    if (userConfirmed) {
      window.location.href = "tel:+48510058955";
    }
  } else {
    window.location.href = "#kontakt";
  }
};
