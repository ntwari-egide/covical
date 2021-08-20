/**
 * @description set up testing file
 * @author ntwari egide
 */

it("renders without crashing", () => {
  
  shallow(<App />);

});


it("renders Account header", () => {

  const wrapper = shallow(<App />);

  const welcome = <h1>Display Active Users Account Details</h1>;

  expect(wrapper.contains(welcome)).toEqual(true);

});
