const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'आयुष्य खूप सुंदर आहे फक्त प्रोग्रामिंग जमला पाहीजे!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)