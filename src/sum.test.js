// test("two plus two is four", () => {
//   expect(2 + 2).toBe(4);
// });

// test("object assignment", () => {
//   const data = { one: 1 };
//   data["two"] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

// test("adding positive numbers is not zero", () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// test("null", () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test("zero", () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

// const shoppingList = [
//   "diapers",
//   "kleenex",
//   "trash bags",
//   "paper towels",
//   "milk",
// ];

// test("the shopping list has milk on it", () => {
//   expect(shoppingList).toContain("milk");
//   expect(new Set(shoppingList)).toContain("milk");
// });

//Promise

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 1000);
  });
};

// test("the data is peanut butter", async () => {
//   const data = await fetchData();
//   expect(data).toBe("peanut butter");
// });

// test("the fetch fails with an error", async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     // eslint-disable-next-line jest/no-conditional-expect
//     expect(e).toMatch("error");
//   }
// });

// test("the fetch fails with an error", () => {
//   expect.assertions(1);
//   // eslint-disable-next-line jest/no-conditional-expect
//   return fetchData().catch((e) => expect(e).toMatch("error"));
// });

const initializeCityDatabase = () => {
  console.log("initializeCityDatabase");
};

const clearCityDatabase = () => {
  console.log("clearCityDatabase");
};

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});
