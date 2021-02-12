
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    //console.log(panel)
    panel.addEventListener('click', () => {
        toggleActiveClasses();
        panel.classList.add('active')


    })

})

function toggleActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');

    })
    
}