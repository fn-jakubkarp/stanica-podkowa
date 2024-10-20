const FloatingFacebookButton = () => {
  return (
    <a
      href="https://www.facebook.com/agroturystykapodkowa/"
      className="fixed bottom-16 right-4 rounded-full bg-blue-600 p-3 text-white shadow-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit our Facebook page"
    >
      <svg
        className="h-6 w-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 8 19"
      >
        <path
          fillRule="evenodd"
          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
};

export default FloatingFacebookButton;
