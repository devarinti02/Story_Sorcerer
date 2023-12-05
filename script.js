
    document.getElementById('stories1').addEventListener('click', function(){
        window.location.href = "./StoryPage.html";
        localStorage.setItem('value', this.value)
    })

    document.getElementById('stories2').addEventListener('click', function(){
        window.location.href = "./StoryPage.html";
        localStorage.setItem('value', this.value)
    })
    document.getElementById('stories3').addEventListener('click', function(){
        window.location.href = "./StoryPage.html";
        localStorage.setItem('value', this.value)
    })


    document.getElementById('navbar').innerHTML=`<h1>"Welcome to Story Sorcerer"</h1>`;