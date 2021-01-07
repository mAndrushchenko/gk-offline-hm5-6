const input = document.querySelector('input');

input.addEventListener('keydown', (e)=>{
        if (this.timeout) this.clearTimeout(timeout);

        input.style.color = 'white';

        const startLength = e.target.value.length;
        let endLength;

        this.timeout = setTimeout(()=>{
                endLength = e.target.value.length
                if (startLength + 1  === endLength || e.key === 'Backspace' || e.key === 'Delete') {
                        input.style.color = 'black'
                }
                clearTimeout();
        },500);
});




