const pannels=document.querySelectorAll('.pannel');

pannels.forEach(pannel => {
    pannel.addEventListener('click', ()=>{
        removeEventListener()
        pannel.classList.add('active')
    })
});

function removeEventListener(){
    pannels.forEach(pannel => {
            pannel.classList.remove('active')
        })
    };