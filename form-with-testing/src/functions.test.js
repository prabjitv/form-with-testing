const functions = require("./functions");

//toBe
test("Adds 2 and 2 to make 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 and 2 to not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

//toBeTruthy
test("should be truthy", () => {
  expect(functions.checkValue(30)).toBeTruthy();
});

//toEqual - for arrays and objects
test("user should be Prabjit Virdee object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Prabjit",
    lastName: "Virdee",
  });
});

//less than of greater than
test("should be under or over", () => {
  const load1 = 800;
  const load2 = 333;
  expect(load1 + load2).toBeLessThan(1400);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// arrays
test("admin should be in usernames", () => {
  let usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//async data
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
