export default function birthday(date) {
  const date1 = new Date()
  const date2 = new Date(date)

  const diffTime = Math.abs(date2 - date1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  const diffYears = Math.floor(diffDays / 365)
  const diffMonths = Math.floor((diffDays - diffYears * 365) / 30)
  const diffDaysRemaining = diffDays - diffYears * 365 - diffMonths * 30

  const formattedDiff = `${diffYears} years and ${diffMonths} months old today.`

  return formattedDiff
}
