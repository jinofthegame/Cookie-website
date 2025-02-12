"use client";

//object of students
const s1 = {
  name: "ABC",
  phone: 9841,
  age: 20,
  address: {
    pa: "Lalitpur",
    ta: "Kathmandu",
  },
};
const s2 = {
  name: "DEF",
  phone: 9842,
  age: 21,
  address: {
    pa: "Lalitpur",
    ta: "Dulikhel",
  },
};
const s3 = {
  name: "GHI",
  phone: 9843,
  age: 22,
  address: {
    pa: "Dulikhel",
    ta: "Pokhara",
  },
};

const students = [s1, s2, s3];

const [abc, def, ghi] = students;

const lalitpurAddress = students.filter((element) => {
  return element.address.pa === "Lalitpur";
});

const ABCStudent = students.find((element) => {
  return element.name === "ABC";
});

const ktmWeather = {
  humidity: 0.7,
  temp: 28,
  uvRays: 0.4,
  wind: "12km/hr",
};

// const humidity = ktmWeather.humidity;
// const temp = ktmWeather.temp;
// const uvRays = ktmWeather.uvRays;

//destructuring

const { humidity, temp, uvRays, wind } = ktmWeather;

console.log(humidity, temp, uvRays);

function JavaScript() {
  return null;
}

export default JavaScript;