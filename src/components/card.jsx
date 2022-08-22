const Card = ({
  theState,
  _id,
  confirmedCases,
  casesOnAdmission,
  discharged,
  death,
}) => {
  return (
    <div className="mt-4">
      <div className="block rounded-lg shadow-2xl bg-white max-w-sm text-center">
        <div className="py-3 px-6 border-b text-white bg-[#4E598C] border-gray-300 text-2xl font-semibold">
          Lagos
        </div>

        <table className="mx-4 text-justify">
          <tbody className="text-sm font-semibold">
            <tr>
              <td className="py-2 whitespace-nowrap  text-[#4E598C]">
                Confirmed Cases
              </td>
              <td className=" text-[#4E598C] font-medium px-8 py-2 whitespace-nowrap">
                50,000.00
              </td>
            </tr>
            <tr>
              <td className="py-2 whitespace-nowrap text-[#4E598C]">
                cases On Admission
              </td>
              <td className="text-black font-medium px-8 py-2 whitespace-nowrap">
                0.00
              </td>
            </tr>
            <tr>
              <td className="py-2 whitespace-nowrap text-[#4E598C]">
                Discharged
              </td>
              <td className="text-black font-medium px-8 py-2 whitespace-nowrap">
                0.00
              </td>
            </tr>
            <tr>
              <td className="py-2 whitespace-nowrap text-[#4E598C]">Death</td>
              <td className="text-black font-medium px-8 py-2 whitespace-nowrap">
                0.00
              </td>
            </tr>
          </tbody>
        </table>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-600 font-bold">
          _id
        </div>
      </div>
    </div>
  );
};

export default Card;
