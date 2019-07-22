export const formatDateTime = (dateTime) => {
  return new Date(Date.parse(dateTime)).toLocaleString()
}

export const formatDate = (d) => {
  const dateParse = new Date(d)
  const month = dateParse.getMonth() < 10 ? '0' + (dateParse.getMonth() + 1) : dateParse.getMonth()
  const date = dateParse.getDate() < 10 ? '0' + dateParse.getDate() : dateParse.getDate()
  return dateParse.getFullYear() + '-' + month + '-' + date
}
