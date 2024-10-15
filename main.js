const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="pics/1.jpg" alt=""></img>'
    title.innerHTML = 'lorem ipsum dolor sit '
    excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, suscipit.'
    profile_img.innerHTML = '<img src="https://randomuser.me/portraits/men/15.jpg" alt="">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'May 04, 2024'

    animated_bgs.forEach((bg) => bg.classList.remove ('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove ('animated-bg-text'))

}