interface JakDojechacProps {}

const JakDojechac: React.FC<JakDojechacProps> = ({}) => {
  return (
    <>
      <section
        id="jak-dojechac"
        className="flex flex-col w-screen  justify-center"
      >
        <p>Męcina Wielka 115, 38-307 Sękowa</p>
        <iframe
          src="https://snazzymaps.com/embed/607749"
          width="100%"
          height="300px"
          className="border-none"
        ></iframe>
      </section>
    </>
  );
};

export default JakDojechac;
