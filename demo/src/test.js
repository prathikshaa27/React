const{addition,multiplication} = require("./math");

test('addition adds two numbers', () => {
    expect(addition(9, 10)).toBe(19);
  });


test('multiplication multiplies two numbers', () => {
    expect(multiplication(12,12)).toBe(144);
  });
  