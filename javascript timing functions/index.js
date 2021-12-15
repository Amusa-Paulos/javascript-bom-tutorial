// setTimeout and 

// setInterval

setTimeout(function(){
    document.querySelector('.make_bigger').style.fontSize = "250%"
}, 5000)

let d = 0
let interval

document.querySelector('.start').addEventListener('click', () => {
    interval = setInterval(() => {
        let date = new Date()
        let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
        d += 1
        document.querySelector('.timer').textContent = hour + ":" + minutes + ":" + seconds
        // console.log("i was logged after 2 secs", d);
    }, 500)
})

document.querySelector('.stop').addEventListener('click', function () {
    clearInterval(interval)
})