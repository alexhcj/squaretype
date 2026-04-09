export const transformPostDate = (date) => {
  const month = new Date(date).toLocaleString('en-us', { month: 'long' })
  const day = new Date(date).getDate()
  const year = new Date(date).getFullYear()
  return `${month} ${day}, ${year}`
}

export const calcDaysFromTweet = (date) => {
  const dateNow = new Date().getTime()
  const dateOfTweet = new Date(date).getTime()
  const timeDifference = Math.floor((dateNow - dateOfTweet) / (1000 * 3600 * 24))

  if (timeDifference > 365) {
    const yearsCount = Math.floor(timeDifference / 365)

    return yearsCount < 2 ? 'over a year ago' : `over ${yearsCount} years ago`
  }

  if (timeDifference > 31) {
    const monthCount = Math.floor(timeDifference / 30)

    return monthCount < 2 ? 'over a month ago' : `over ${monthCount} months ago`
  }

  if (timeDifference < 27 || timeDifference < 31) {
    return timeDifference === 1 ? `${timeDifference} day ago` : `${timeDifference} days ago`
  }
}
