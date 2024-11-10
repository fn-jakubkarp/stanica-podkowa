const DetailedPriceList = () => {
  const prices = [
    {
      name: "Sauna",
      price: "150zł / 1,5h"
    },
    {
      name: "Balnia",
      price: <>
        2h / 150 zł<br />
        Do 4h - 200 zł<br />
        Powyżej 4h - 250 zł*
      </>
    },
    {
      name: "Wyżywienie",
      price: "Ustalana indywidualnie"
    },
    {
      name: "Taczka drewna",
      price: "50 zł / sztuka"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-6 text-2xl font-bold text-primary-700 md:text-4xl lg:text-5xl">
          Dodatkowe atrakcje
        </h3>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-lg">
        <table className="w-full table-auto">
          <tbody>
            {prices.map((item, index) => (
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
          <p className="text-sm text-primary-700/80 md:text-base italic">
            *Ceny obowiązują od 1 kwietnia do 31 października. W okresie od 1 listopada do 31 marca koszt wynajęcia bani wzrasta o 50 zł.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailedPriceList;