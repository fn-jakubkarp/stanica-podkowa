export default function DetailedPriceList() {
  return (
    <div className="defaultPaddings mx-auto w-full max-w-screen-xl">
      <h3 className="flex w-full justify-center py-8 text-3xl font-bold md:text-5xl">
        Dodatkowe atrakcje
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-b border-text-DARK">
              <th className="px-4 py-3 text-left font-medium text-text-DARK">
                Produkt
              </th>

              <th className="px-4 py-3 text-right font-medium text-text-DARK">
                Cena
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 ">
              <td className="flex items-center gap-4 px-4 py-4">
                <div>
                  <h3 className="text-base font-medium sm:text-3xl">
                    Sauna lub balia
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
        </table>
      </div>
    </div>
  );
}
