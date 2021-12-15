console.log(window.history);
console.log(history);

document.querySelector('.goback').addEventListener('click', function (evt) {
    history.back()
})

document.querySelector('.goforward').addEventListener('click', function (evt) {
    history.forward()
})

document.querySelector('.update_url') && 
document.querySelector('.update_url').addEventListener('click', function (evt) {
    history.pushState(null, {num: '28'}, 'post-page')
})