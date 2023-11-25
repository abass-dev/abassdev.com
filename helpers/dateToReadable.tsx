// @ts-ignore
// @ts-nocheck

const dateToReadable = (date) => {
  const datetime = new Date(date)

  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDatetime = datetime.toLocaleDateString('en-US', options)

  return formattedDatetime // Output example: January 23, 2023
}

export default dateToReadable