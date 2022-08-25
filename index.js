let count = 0
let countEl = document.getElementById('count')
let saveEl = document.getElementById('count-el')
let totalEl = document.getElementById('total-el')
let total = 0

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let logs = count + ', '
    saveEl.textContent += logs
    total += count
    totalEl.textContent = total
    count = 0
    countEl.textContent = count
}


