const PriceDetails = () => {
  const additionalPrices = [
    {
      name: "Sauna",
      price: "100zł / 1,5h",
    },
    {
      name: "Balia",
      price: (
        <>
          150zł / 1.5h
          <br />
          200zł / 2h
          <br />
          250zł / 4h*
        </>
      ),
    },
    {
      name: "Wyżywienie",
      price: "Ustalana indywidualnie",
    },
    {
      name: "Taczka drewna",
      price: "50 zł / sztuka",
    },
  ];

  const roomPrices = [
    { people: "1 osoba", price: "130" },
    { people: "2 osoby", price: "200" },
    { people: "3 osoby", price: "270" },
    { people: "4 osoby", price: "320" },
  ];

  return (
    <div className="space-y-16 pt-12 md:py-20 lg:pt-24">
      {/* Room Prices Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-6 text-2xl font-bold text-primary-700 md:text-4xl lg:text-5xl">
            Cennik pokoi gościnnych
          </h3>
          <p className="text-sm text-primary-700/80 md:text-base">
            <span className="mr-2 text-accent-500">*</span>
            Ceny za pokój przy wynajmnie na minimum 2 doby. Przy wynajmie na
            jedną dobę ceny ustalane są indywidualnie
          </p>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <table className="w-full table-auto">
            <tbody>
              {roomPrices.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-primary-100 last:border-none"
                >
                  <td className="p-4 md:p-6">
                    <h4 className="text-lg font-medium text-primary-700 md:text-xl lg:text-2xl">
                      {row.people}
                    </h4>
                  </td>
                  <td className="p-4 text-right text-lg font-medium text-primary-500 md:p-6 md:text-xl lg:text-2xl">
                    {row.price} zł / noc
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Attractions Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-6 text-2xl font-bold text-primary-700 md:text-4xl lg:text-5xl">
            Dodatkowe atrakcje
          </h3>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <table className="w-full table-auto">
            <tbody>
              {additionalPrices.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-primary-100 last:border-none"
                >
                  <td className="p-4 md:p-6">
                    <h4 className="text-lg font-medium text-primary-700 md:text-xl lg:text-2xl">
                      {item.name}
                    </h4>
                  </td>
                  <td className="p-4 text-right text-lg font-medium text-primary-500 md:p-6 md:text-xl lg:text-2xl">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 md:p-6">
            <p className="text-sm italic text-primary-700/80 md:text-base">
              *W okresie 1 listopada do 31 marca koszt wynajęcia bani wzrasta o 50zł.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
