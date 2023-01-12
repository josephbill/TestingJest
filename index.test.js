// const getAboutUsLink = require('./index')
// const addSum = require("./index")
// write out my test for the function 
// it("return about-us link for the english language",() => {
//     expect(getAboutUsLink("en-US")).toBe("/about-us")
// });

const indexOperations = require('./index')

describe("Index Operations " , () => {

  it("return about-us link for the english language",() => {
    expect(indexOperations.getAboutUsLink("en-US")).toBe("/about-us")
  }); 

  it("add sum", () => {
    expect(indexOperations.addSum(1,2)).toBe(3)
  });

})