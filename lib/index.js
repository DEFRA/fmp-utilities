const dates = require('./dates/dates')
console.log('dates.formatUKDate:')
console.dir(dates.formatUKDate)
module.exports = {
  dates,
  test: () => console.log('This is a test')
}
