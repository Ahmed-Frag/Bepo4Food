let DarkBtn = document.querySelector('#darkMood')
let mybody = document.querySelectorAll('.drak')
let load = document.querySelector('#load')
let Bepo = document.querySelector('#Bepo')


DarkBtn.addEventListener("click",()=>{
    mybody.forEach((e)=>{
        e.classList.toggle("DarkMood")
    })
})
window.onload(
    setTimeout(()=>{
        load.style.display = 'none'
        Bepo.style.display = 'block'
    },7000)
)