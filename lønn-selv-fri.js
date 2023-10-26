// Utregning av ansiennitet
function activeYears(year) {
  const currentYear = new Date().getFullYear();
  const yearsSince = currentYear - year;
  return yearsSince;
}
// Finn lønnstrinn og lønn basert på ansiennitet
function salaryEmployee(year) {
  const yearsSince = activeYears(year);
  let level;
  let salary;

  if (yearsSince >= 0 && yearsSince < 2) return { level: 12, salary: 503118 };
  if (yearsSince >= 2 && yearsSince < 4) return { level: 14, salary: 514020 };
  if (yearsSince >= 4 && yearsSince < 6) return { level: 16, salary: 526214 };
  if (yearsSince >= 6 && yearsSince < 8) return { level: 18, salary: 536828 };
  if (yearsSince >= 8 && yearsSince < 10) return { level: 20, salary: 549884 };
  if (yearsSince >= 10 && yearsSince < 12) return { level: 22, salary: 564086 };
  if (yearsSince >= 12 && yearsSince < 14) return { level: 24, salary: 578861 };
  if (yearsSince >= 14 && yearsSince < 16) return { level: 29, salary: 622194 };
  if (yearsSince >= 16 && yearsSince < 18) return { level: 30, salary: 630515 };
  if (yearsSince >= 18 && yearsSince < 20) return { level: 32, salary: 648016 };
  if (yearsSince >= 20 && yearsSince < Infinity)
    return { level: 34, salary: 666234 };
}

const salaryCalculations = {
  level: 0,
};
