export default function ansiennitet(year) {
  const currentYear = new Date().getFullYear();
  const yearsSince = currentYear - year;
  return yearsSince;
}

console.log(ansiennitet(2010));
