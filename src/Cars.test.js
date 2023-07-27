import React from "react";
import { shallow } from "enzyme";
import Cars from "./component/Cars";

const validProps = {
  sendData: [
    {
      id: 1,
      MakeName: "Maruti Suzuki",
      ModelName: "FRONX",
      CarwaleAbsure: true,
      CertifiedCars: true,
      QualityReportsAvaliable: true,
      PriceLowerBound: 3,
      PriceUpperBound: 5,
      Price: 350000,
    },
  ],
};

describe("Filter test", () => {
  const setUp = ({ sendData = validProps.sendData }) => {
    return shallow(<Cars sendData={sendData} />);
  };

  it("Should not render when setData is not empty", () => {
    const component = setUp({ sendData: null });
    expect(component.isEmptyRender()).toBeTruthy();
  });

  it("Should render when sendData is present",()=>{
    const component = setUp({});
    expect(component).toMatchSnapshot();
  })
});
