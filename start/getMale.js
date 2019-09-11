const R = require("ramda");
const { map, filter, prop, curry, pipe, pickAll, equals } = R;

const { data } = require("./data");
const { expectData } = require("./expectData");

// const ret = data.filter(x => x.sex === "M");

const getMales = filter(
  pipe(
    prop("sex"), // (x)=>x.sex
    equals(R.__, "M") // (b)=>"M"===b
  ) // (y)=>"M"===y.sex
);

const ret = getMales(data);

console.info(ret);
console.info(JSON.stringify(ret) === JSON.stringify(expectData.males));
