import { mult, splitIntoWords, sum } from "./01";

//data
let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
});

test("sum should be correct", () => {
  //action
  const result1 = sum(a, b);
  a = 100;
  const result2 = sum(a, c);

  //expect result
  expect(result1).toBe(3);
  expect(result2).toBe(103);
});

test("multiply should be correct", () => {
  //action
  const result1 = mult(a, b);
  const result2 = mult(b, c);

  //expect result
  expect(result1).toBe(2);
  expect(result2).toBe(6);
});

test("splitting into words should be correct", () => {
  //data
  const sent1 = "Happy New Year!";
  const sent2 = "Hello Jest! Happy = Testing!";

  //action
  const result1 = splitIntoWords(sent1);
  const result2 = splitIntoWords(sent2);

  //expect result
  expect(result1.length).toBe(3);
  expect(result1[0]).toBe("Happy");
  expect(result1[1]).toBe("New");
  expect(result1[2]).toBe("Year!");

  expect(result2.length).toBe(5);
  expect(result2[0]).toBe("Hello");
  expect(result2[1]).toBe("Jest!");
  expect(result2[2]).toBe("Happy");
  expect(result2[3]).toBe("=");
  expect(result2[4]).toBe("Testing!");
});
