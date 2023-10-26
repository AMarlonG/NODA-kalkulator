// Utregning av ansiennitet
function activeYears(year) {
  const currentYear = new Date().getFullYear();
  const yearsSince = currentYear - year;
  return yearsSince;
}
// Finn lønnstrinn og lønn basert på ansiennitet
function salaryEmployee(year) {
  const yearsSince = activeYears(year);
  const salaryScale = [
    { years: [0, 2], level: 12, salary: 503118 },
    { years: [2, 4], level: 14, salary: 514020 },
    { years: [4, 6], level: 16, salary: 526214 },
    { years: [6, 8], level: 18, salary: 536828 },
    { years: [8, 10], level: 20, salary: 549884 },
    { years: [10, 12], level: 22, salary: 564086 },
    { years: [12, 14], level: 24, salary: 578861 },
    { years: [14, 16], level: 29, salary: 622194 },
    { years: [16, 18], level: 30, salary: 630515 },
    { years: [18, 20], level: 32, salary: 648016 },
    { years: [20, Infinity], level: 34, salary: 666234 },
  ];
  const { level, salary } = salaryScale.find((row) => {
    return yearsSince >= row.years[0] && yearsSince < row.years[1];
  });

  console.log(level, salary); // 20, 549884
  return salary * 1.368;
}

console.log(salaryEmployee(2014));

console.log(Math.trunc(salaryEmployee(2014))); // 752241.312
