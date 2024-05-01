        // const bar = document.getElementById('bar');
        // const close = document.getElementById('close');
        // const menulinks = document.getElementById('menu-links');
        // if (bar) {
        //     bar.addEventListener('click', () => {
        //         menulinks.classList.add('mobile-active');
        //     })
        // }
        // if (close) {
        //     close.addEventListener('click', () => {
        //         menulinks.classList.remove('mobile-active');
        //     })
        // }

function openNav(){
    document.getElementById('menu-links').style.width='250px';
}
function closeNav(){
    document.getElementById('menu-links').style.width="0";

}
