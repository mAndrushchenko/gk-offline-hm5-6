const setTag = document.querySelector('.tag-maker');
const wrapper = document.querySelector('.wrapper');
let item = document.querySelectorAll('.item');
const buttonClose = [...document.querySelectorAll('.btn-close')];

let children = wrapper.children;

children = Array.prototype.slice.call(children);



setTag.addEventListener('keyup', makeTage);

buttonClose.forEach(el => el.addEventListener('click', onRemove));

children.forEach((el) => el.addEventListener('mousedown', onMouseDown));


function newTag (value) {
    const input = document.createElement('input');
    input.value = value;
    input.classList.add('box');

    const button = document.createElement('button');
    button.innerHTML = '✖';
    button.classList.add('btn-close');
    button.addEventListener('click', onRemove);
    buttonClose.push(button);

    const div = document.createElement('div');
    div.classList.add('item');
    div.appendChild(input);
    div.appendChild(button);
    return div;
}

function makeTage (e) {
    if (e.key === 'Enter') {
        const tag = newTag(e.target.value);
        tag.addEventListener('mousedown', onMouseDown);
        wrapper.append(tag);
        children.push(tag);
        e.target.value = ''
    }
}

function onRemove(e) {
    const index = buttonClose.indexOf(e.target);
    wrapper.removeChild(children[index]);
    buttonClose.splice(index, 1);
    children.splice(index,1);
    return children
}

function onMouseDown(e) {
    let prevX = e.clientX;
    let prevY = e.clientY;

    const onMouseMove  = (e) =>  {
        let newX = prevX - e.clientX;
        let newY= prevY - e.clientY;

        const rect = this.getBoundingClientRect();

        this.style.left = rect.left - newX + 'px';
        this.style.top = rect.top - newY + 'px';

        prevX = e.clientX;
        prevY = e.clientY;
    }
    const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    }
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
}



