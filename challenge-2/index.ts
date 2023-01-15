function countHours(year: number, holidays: string[]) {
  return holidays.map(day => {
    const date = new Date(`${year}/${day}`).getDay()
    return [1, 2, 3, 4, 5].includes(date)
  }).filter(a => a === true).length * 2
}

console.log(countHours(2022, ['01/06', '04/01', '12/25']))