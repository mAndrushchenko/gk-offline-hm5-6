const setTag = document.querySelector('.tag-maker')
const img = document.querySelector('img')
const wrapper = document.querySelector('.wrapper')
const buttonClose = [...document.querySelectorAll('.btn-close')]

let children = wrapper.children

children = Array.prototype.slice.call(children)

setTag.addEventListener('keyup', makeTage)

buttonClose.forEach(el => el.addEventListener('click', onRemove))

children.forEach((el) => el.addEventListener('mousedown', onMouseDown))


function newTag(value) {
    const input = document.createElement('input')
    input.value = value
    input.classList.add('box')

    const button = document.createElement('button')
    button.innerHTML = '✖'
    button.classList.add('btn-close')
    button.addEventListener('click', onRemove)
    buttonClose.push(button)

    const div = document.createElement('div')
    div.classList.add('item', 'new-item')
    div.appendChild(input)
    div.appendChild(button)
    return div
}

function makeTage(e) {
    if (e.key === 'Enter') {
        const tag = newTag(e.target.value)
        tag.addEventListener('mousedown', onMouseDown)
        wrapper.append(tag)
        children.push(tag)
        e.target.value = ''
    }
}

function onRemove(e) {
    const index = buttonClose.indexOf(e.target)
    wrapper.removeChild(children[index])
    buttonClose.splice(index, 1)
    children.splice(index, 1)
    return children
}

function onMouseDown(e) {
    let prevX = e.clientX
    let prevY = e.clientY
    const onMouseMove = (e) => {
        img.classList.add('red-border')
        const rect = this.getBoundingClientRect()
        const newX = prevX - e.clientX
        const newY = prevY - e.clientY
        const newLeftPosition = rect.left - newX
        const newTopPosition = rect.top - newY
        const ruleForXRight = newLeftPosition >= 973
        const ruleForXLeft = newLeftPosition <= 151
        const ruleForX = ruleForXRight && ruleForXLeft
        const ruleForYTop = newTopPosition <= 152
        const ruleForYBottom = newTopPosition >= 713
        const ruleForY = ruleForYTop && ruleForYBottom

        this.children[1].style.left = newLeftPosition >= 940 ? '-30px' : '175px'

        const setXPosition = (left, x) => {
            this.style.left = left + 'px'
            prevX = x
            if (!ruleForY) {
                this.style.top = newTopPosition + 'px'
                prevY = e.clientY
            }
            if (ruleForYTop) {
                this.style.top = 152 + 'px'
                prevY = 180
            }
            if (ruleForYBottom) {
                this.style.top = 713 + 'px'
                prevY = 740
            }
        }
        const setYPosition = (top, y) => {
            this.style.top = top + 'px'
            prevY = y
            if (!ruleForX) {
                this.style.left = newLeftPosition + 'px'
                prevX = e.clientX
            }
            if (ruleForXRight) {
                this.style.left = 151 + 'px'
                prevX = 230
            }
            if (ruleForXLeft) {
                this.style.left = 720 + 'px'
                prevX = 1040
            }
        }

        if (ruleForXRight) {
            setXPosition(973, 1040)
        } else if (ruleForXLeft) {
            setXPosition(151, 230)
        } else if (ruleForYTop) {
            setYPosition(152, 180)
        } else if (ruleForYBottom) {
            setYPosition(713, 740)
        } else {
            img.classList.remove('red-border')

            this.style.left = newLeftPosition + 'px'
            this.style.top = newTopPosition + 'px'

            prevX = e.clientX
            prevY = e.clientY
        }
    }
    const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
}
