const Jumbotron = ({ children }) => {
  return (
    <div className="bg-[#F2994A] shadow-sm rounded-lg text-center py-12 mt-4">
      <h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
        Covid Display App
      </h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-2 mx-3">
        {children}
      </div>
    </div>
  );
};

export default Jumbotron;
