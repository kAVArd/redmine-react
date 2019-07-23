export const formatDateTime = (dateTime) => {
  const newDate = new Date(dateTime)
  const month = newDate.getMonth() < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1
  const date = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate()
  const hours = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours()
  const minutes = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes()
  const seconds = newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds()

  return newDate.getFullYear() + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds
}

export const formatDate = (d) => {
  const dateParse = new Date(d)
  const month = dateParse.getMonth() < 10 ? '0' + (dateParse.getMonth() + 1) : dateParse.getMonth()
  const date = dateParse.getDate() < 10 ? '0' + dateParse.getDate() : dateParse.getDate()
  return dateParse.getFullYear() + '-' + month + '-' + date
}

export const addComment = (username, commentText) => {
  if (!localStorage.getItem('comments')) localStorage.setItem('comments', JSON.stringify([]))
  const comments = JSON.parse(localStorage.getItem('comments'))
  const newComment = {
    username: username,
    commentText: commentText,
    date: formatDateTime(Date.now())
  }
  comments.push(newComment)
  localStorage.setItem('comments', JSON.stringify(comments))
  return newComment
}
