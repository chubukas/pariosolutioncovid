import Header from "./Header";
import Card from "./card";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStateStatus,
  selectAllProduct,
  fetchAllProducts,
} from "../redux/reducer";

const Background = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStateStatus);
  const response = useSelector(selectAllProduct);

  useEffect(() => {
    let fetch = true;

    if (fetch) {
      status === "idle" && dispatch(fetchAllProducts());
    }

    return () => {
      fetch = false;
    };
  }, [dispatch, status]);

  let content;

  switch (status) {
    case "loading":
      content = (
        <div className="text-3xl font-extrabold mx-auto">
          <p className="text-center">Loading...</p>
        </div>
      );
      break;

    case "succeeded":
      const {
        totalSamplesTested,
        totalConfirmedCases,
        totalActiveCases,
        discharged,
        death,
        states,
      } = response.products;

      content = (
        <>
          <Header
            totalSamplesTested={totalSamplesTested}
            totalConfirmedCases={totalConfirmedCases}
            totalActiveCases={totalActiveCases}
            discharged={discharged}
            death={death}
          />
          <div className="my-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {states.map((data) => (
              <Card
                key={data._id}
                theState={data.state}
                _id={data._id}
                confirmedCases={data.confirmedCases}
                casesOnAdmission={data.casesOnAdmission}
                discharged={data.discharged}
                death={data.death}
              />
            ))}
          </div>
        </>
      );
      break;

    case "failed":
      content = (
        <div className="text-red-600 text-2xl font-bold">An Error occured</div>
      );
      break;

    default:
      content = (
        <div className="text-red-600 text-2xl font-bold">An Error occured</div>
      );
      break;
  }

  return <div className="w-10/12 mx-auto ">{content}</div>;
};

export default Background;
