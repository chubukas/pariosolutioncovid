import Jumbotron from "./jumbotron";
import HeaderText from "./headerText";

const Header = ({
  totalSamplesTested,
  totalConfirmedCases,
  totalActiveCases,
  discharged,
  death,
}) => {
  return (
    <Jumbotron>
      <HeaderText topic="Total Samples Tested" num={totalSamplesTested} />
      <HeaderText topic="Total Confirmed Cases" num={totalConfirmedCases} />
      <HeaderText topic="Total Active Cases" num={totalActiveCases} />
      <HeaderText topic="Discharged" num={discharged} />
      <HeaderText topic="Death" num={death} />
    </Jumbotron>
  );
};

export default Header;
