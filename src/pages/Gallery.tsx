const Gallery: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-hidden min-h-screen">
        <div className="flex flex-col-reverse column-reverse gap-4">
          <div className="w-full h-full bg-red-500"></div>
          <div className="w-full h-full bg-red-500"></div>
          <div className="w-full h-full bg-red-500"></div>
          <div className="w-full h-full bg-red-500"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full h-full bg-blue-500"></div>
          <div className="w-full h-full bg-blue-500"></div>
          <div className="w-full h-full bg-blue-500"></div>
          <div className="w-full h-full bg-blue-500"></div>
        </div>
        <div className="hidden md:flex flex-col-reverse column-reverse gap-4">
          <div className="w-full h-full bg-red-500"></div>
          <div className="w-full h-full bg-red-500"></div>
          <div className="w-full h-full bg-red-500"></div>
          <div className="w-full h-full bg-red-500"></div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
