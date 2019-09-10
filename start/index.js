// import { map, filter, prop, curry, pipe } from "ramda";
const R = require("ramda");

const { map, filter, prop, curry, pipe, pickAll } = R;
// import { data } from "./data";
// import { expectData } from "./expectData";

const { data } = require("./data");
const { expectData } = require("./expectData");

// experiment1 获取所有年龄小于 18 岁的对象，并返回他们的名称和年龄。

// function getAgeUnder18(arr = []) {
//   return arr.filter(x => x.age < 18).map(x => ({ name: x.name, age: x.age }));
// }

// const getAgeUnder18 = pipe(
//   filter(x => x.age < 18),
//   map(x => ({ name: x.name, age: x.age }))
// );

// :: String -> Number -> Object -> Boolean
const propLt = (p, c) =>
  R.pipe(
    R.prop(p),
    R.lt(R.__, c)
  );
// :: Object ->  Boolean
const ageUnder18 = propLt("age", 18);

// const getAgeUnder18 = pipe(
//   filter(x => x.age < 18),
//   map(pickAll(["name", "age"]))
// );

const getAgeUnder18 = pipe(
  filter(ageUnder18),
  map(pickAll(["name", "age"]))
);

const ret1 = getAgeUnder18(data);
console.info(ret1);

console.info(JSON.stringify(ret1) === JSON.stringify(expectData.ageLt18));
