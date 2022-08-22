import Jumbotron from "./jumbotron";
import HeaderText from "./headerText";

const Header = () => {
  return (
    <Jumbotron>
      <HeaderText topic="Total Samples Tested" num={23} />
    </Jumbotron>
  );
};

export default Header;
