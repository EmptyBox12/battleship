import { sayCat } from "./index.js";

test("says cat", ()=>{
  expect(sayCat("a")).toBe("cat");
});