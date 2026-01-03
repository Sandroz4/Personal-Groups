const btn1 = document.getElementById('btn1')

btn1.addEventListener('click',(e)=>{
    e.preventdefault()
    const textadd = document.createElement('textarea')
    textadd.classList.add('text')
    textadd.placeholder = 'enter text'

    textadd.style.backgroundColor = 'blueviolet'
    textadd.style.height = '250px'
    textadd.style.width = '250px'
    

})