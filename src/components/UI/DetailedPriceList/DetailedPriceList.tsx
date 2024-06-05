export default function DetailedPriceList() {
  return (
    <div className="defaultPaddings w-full mx-auto max-w-screen-xl">
      <h3 className="flex w-full justify-center text-3xl font-bold md:text-5xl py-8">
        Dodatkowe atrakcje
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-text-DARK border-b">
              <th className="px-4 py-3 text-left font-medium text-text-DARK">
                Produkt
              </th>
              <th className="px-4 py-3 text-left font-medium text-text-DARK">
                Opis
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
                  <h3 className="text-base sm:text-3xl font-medium">Sauna lub balia</h3>
                </div>
              </td>
              <td className="py-4">
                <p className="text-sm text-gray-500 sm:text-2xl">
                  Zrelaksuj się
                </p>
              </td>
              <td className="px-4 py-4 text-right font-medium">
                Ustalana indywidualnie
              </td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="flex items-center gap-4 px-4 py-4">
                <div>
                  <h3 className="text-base sm:text-3xl font-medium">Wyżywienie</h3>
                </div>
              </td>
              <td className=" py-4">
                <p className="text-sm text-gray-500 sm:text-2xl">
                  Możemy przygotować śniadania lub/i obiady
                </p>
              </td>
              <td className="px-4 py-4 text-right font-medium">
                Ustalana indywidualnie
              </td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="flex items-center gap-4 px-4 py-4">
                <div>
                  <h3 className="text-base sm:text-3xl font-medium">Taczka drewna</h3>
                </div>
              </td>
              <td className="py-4">
                <p className="text-sm  text-gray-500 sm:text-2xl">Rozpal sobie grilla</p>
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
