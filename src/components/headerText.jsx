const HeaderText = ({ topic, num }) => {
  return (
    <div className="rounded-md bg-white shadow-md p-4">
      <div className="font-bold text-[#4E598C]">
        <p>{topic}</p>
      </div>
      <div className=" text-2xl font-semibold">
        <p>{num}</p>
      </div>
    </div>
  );
};

export default HeaderText;
