const input = document.querySelector('input');
input.addEventListener('keydown', (e)=>{
        let startLength = e.target.value.length, endLength;
        input.style.color = 'white';
        setTimeout(()=>{
                endLength = e.target.value.length
                if (startLength +1  === endLength) {
                        input.style.color = 'black'
                } else if(e.key === 'Backspace' || e.key === 'Delete') {
                        input.style.color = 'black'
                }
        },500);
})




