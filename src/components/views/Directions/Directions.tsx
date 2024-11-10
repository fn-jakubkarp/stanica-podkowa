interface DirectionsProps {}

const Directions: React.FC<DirectionsProps> = ({}) => {
  return (
    <>
      <section
        id="jak-dojechac"
        className="mx-auto defaultPaddings flex w-screen max-w-screen-xl"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2585.0024750878188!2d21.2534391!3d49.616558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dcf5d0304bf7b%3A0xcc18615867d72c9d!2sAgroturystyka%20Noclegi%20%22Stanica%20Podkowa%22%20Beskid%20Niski%20Gorlice-M%C4%99cina%20Wielka!5e0!3m2!1spl!2spl!4v1716456251808!5m2!1spl!2spl"
          title="Nawigacja do Stanica Podkowa"
          width="100%"
          height="450"
          loading="lazy"
          className="max-w-screen-2xl"
        ></iframe>
      </section>
    </>
  );
};

export default Directions;
