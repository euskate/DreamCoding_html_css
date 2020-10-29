const moreBtn = document.querySelector('.detail .metadata .titleBtn .moreBtn');
const title = document.querySelector('.detail .metadata .titleBtn .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})