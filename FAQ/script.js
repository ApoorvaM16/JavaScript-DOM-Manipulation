let contentList = document.querySelectorAll('.content-container');

contentList.forEach(element =>{
    element.addEventListener('click', function(){
        this.classList.toggle('active')
    })
});


