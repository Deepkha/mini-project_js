const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {
        
        if(icon.classList.contains('active') && answer.classList.contains('active')) {
            icon.classList.remove('active');
            answer.classList.remove('active');
        } else {
            icon.classList.add('active');
            answer.classList.add('active');
        }
        
    })
})