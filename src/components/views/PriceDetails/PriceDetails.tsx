import { additionalPrices, CPriceDetails, roomPrices } from "./content";
const PriceDetails = () => {
  return (
    <div className="space-y-16 pt-12 md:py-20 lg:pt-24">
      {/* Room Prices Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-6 text-2xl font-bold text-primary-700 md:text-4xl lg:text-5xl">
            {CPriceDetails.header}
          </h3>
          <p className="text-sm text-primary-700/80 md:text-base">
            <span className="mr-2 text-accent-500">*</span>
            {CPriceDetails.roomNote}
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
            {CPriceDetails.additional}
          </h3>
          <p className="text-sm text-primary-700/80 md:text-base">
            <span className="mr-2 text-accent-500">*</span>
            {CPriceDetails.additionalNote}
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
