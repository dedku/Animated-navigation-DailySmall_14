import './style.css'
const toggle = document.getElementById('toggle') as HTMLElement
const nav = document.getElementById('nav') as HTMLElement

toggle.addEventListener('click', () => nav.classList.toggle('active'))