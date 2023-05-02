const container = document.getElementById('container')
const todayDate = document.getElementById('todayDate')
const time = document.getElementById('time')

const getTime = () => {
    const date = new Date()
    const currentDay = date.getDate()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    hour = hour < 10 ? `0${hour}` : hour
    minute = minute < 10 ? `0${minute}` : minute
    seconds = seconds < 10 ? `0${seconds}` : seconds

    todayDate.innerHTML = `${currentDay} / ${currentMonth} / ${currentYear}`

    time.innerHTML = `${hour}:${minute}:${seconds}`
}

getTime()
setInterval(getTime, 1000)