import { shallow } from "enzyme";
import Homepage from "./index";

it(`should render Homepage component`, () => {
  expect(shallow(<Homepage />)).toMatchSnapshot();
});
