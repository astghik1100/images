let arr = [
    {id: 1, name: 'foto_1.jpg'},
    {id: 2, name: 'foto_2.jpg'},
    {id: 3, name: 'foto_3.jpg'}
]
let i = 0

let img = document.querySelector('.img')
let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')

let interval = null
document.body.onload = mytimer


function mytimer() {
    clearInterval(interval)
    interval = setInterval(() => {
        i++
        if (!arr[i]) {
            i = 0
        }
        img.src = 'images/' + arr[i].name
    }, 1000)
}
let timeout
minus.addEventListener('click', e => {
    clearInterval(interval)
    clearTimeout(timeout)

    i--
    if (i === -1) {
        i = arr.length - 1
    }
    img.src = 'images/' + arr[i].name
    timeout = setTimeout(() => {
        mytimer()
    }, 3000)
})

plus.addEventListener('click', e => {

    clearInterval(interval)
    clearTimeout(timeout)

    i++
    if (!arr[i]) {
        i = 0
    }
    img.src = 'images/' + arr[i].name
    timeout = setTimeout(() => {
        mytimer()
    }, 3000)
})
