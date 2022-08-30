const relogio = document.querySelector('.relogio')
const historico = document.querySelector('.historico')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos = 0
let timer


iniciar.addEventListener('click', function (e) {
    clearInterval(timer)
    iniciaRelogio()
})

pausar.addEventListener('click', function (e) {
    clearInterval(timer)
})

zerar.addEventListener('click', function (e) {
    clearInterval(timer)
    relogio.innerHTML = "00:00:00"
    segundos = 0
})

function criarSegundos(segundos) {
    let data = new Date(segundos * 1000)

    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'UTC',
        hour12: false
    })
}

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = criarSegundos(segundos)
    }, 100)
}