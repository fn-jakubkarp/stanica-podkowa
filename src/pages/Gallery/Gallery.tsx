const Gallery: React.FC = () => {
  const placeholder = "";

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <section>
          <img src={placeholder} alt="" />
          <h3>Posiadłość</h3>
        </section>
        <section>
          <img src={placeholder} alt="" />
          <h3>Wnętrze</h3>
        </section>
        <section>
          <img src={placeholder} alt="" />
          <h3>Okolica zimą</h3>
        </section>
        <section>
          <img src={placeholder} alt="" />
          <h3>Okolica latem</h3>
        </section>
      </div>
    </>
  );
};

export default Gallery;
