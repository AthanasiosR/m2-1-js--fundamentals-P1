const exercise10 = require("../../../__workshop/exercise-10");

test("Exercise 10", () => {
  exercise10();
  expect(console.log.mock.calls.join()).toBe(
    "#,##,###,####,#####,######,#######"
  );
});
