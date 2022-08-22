import Header from "./Header";
import Card from "./card";

const Background = () => {
  return (
    <div className="w-10/12 mx-auto ">
      <Header />
      <div className="my-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Card />
      </div>
    </div>
  );
};

export default Background;
