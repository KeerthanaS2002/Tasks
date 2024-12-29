const dates = ["31/04/2024", "29/02/2001"];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

for (let i = 0; i < dates.length; i++) {
    const [day, month, year] = dates[i].split('/').map(Number);
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const maxDays = month === 2 && isLeapYear ? 29 : daysInMonth[month - 1];

    if (month < 1 || month > 12 || day < 1 || day > maxDays) {
        console.log(`${dates[i]} - invalid`);
    } else {
        console.log(`${dates[i]} - valid`);
    }
}