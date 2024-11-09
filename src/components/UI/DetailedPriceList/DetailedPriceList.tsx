export default function DetailedPriceList() {
  return (
    <div className="defaultPaddings mx-auto w-full max-w-screen-xl">
      <h3 className="flex w-full justify-center py-8 text-3xl font-bold md:text-5xl">
        Dodatkowe atrakcje
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead></thead>
          <tbody>
            <tr className="border-b border-gray-200 ">
              <td className="flex items-center gap-4 px-4 py-4">
                <div>
                  <h3 className="text-base font-medium sm:text-3xl">Sauna</h3>
                </div>
              </td>

              <td className="px-4 py-4 text-right font-medium">150zł / 1,5h</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="flex items-center gap-4 px-4 py-4">
                <div>
                  <h3 className="text-base font-medium sm:text-3xl">Balnia</h3>
                </div>
              </td>

              <td className="px-4 py-4 text-right font-medium">
                2h / 150 zł
                <br />
                Do 4h - 200 zł
                <br />
                Powyżej 4h - 250 zł*
                <br />
              </td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="flex items-center gap-4 px-4 py-4">
                <div>
                  <h3 className="text-base font-medium sm:text-3xl">
                    Wyżywienie
                  </h3>
                </div>
              </td>

              <td className="px-4 py-4 text-right font-medium">
                Ustalana indywidualnie
              </td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="flex items-center gap-4 px-4 py-4">
                <div>
                  <h3 className="text-base font-medium sm:text-3xl">
                    Taczka drewna
                  </h3>
                </div>
              </td>

              <td className="px-4 py-4 text-right font-medium">
                50 zł / sztuka
              </td>
            </tr>
          </tbody>
          <p className="defaultPaddings">
            *Ceny obowiązują od 1 kwietnia do 31 października. W okresie od 1
            listopada do 31 marca koszt wynajęcia bani wzrasta o 50 zł.{" "}
          </p>
        </table>
      </div>
    </div>
  );
}
