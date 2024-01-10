let video = document.querySelector('video')
let button = document.querySelector('button')
let icon = document.querySelector('i')

video.onmouseover=()=>{button.style.display='flex'}
button.onmouseover=()=>{button.style.display='flex'}
video.onmouseout=()=>{button.style.display='none'}

button.onclick=function(){
    let pauseplay = video.classList.toggle('play')
    if(pauseplay){
        video.play()
        icon.className='fa-solid fa-pause'
        icon.style.animation='disappear 5s forwards'
    }
    else{
        video.pause()
        icon.className='fa-solid fa-play'
        icon.style.animation='none'
    }
}