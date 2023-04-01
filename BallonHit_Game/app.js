import Ballon from "./Ballon.js";

Array.prototype.choose = function() {
    return this[Math.floor(Math.random() * this.length)];
}

const box = document.getElementById('box');
const box_top_pos = box.getBoundingClientRect().y;
const ballon_positions = [ 10, 30, 50, 70, 90 ];
const alphabets = ['A', 'B', 'B', 'A', 'A', 'B', 'A'];

function releaseBallon(ballon) {
    const alpha_bottom = parseInt(ballon.alpha.style.bottom) + 1.5;
    ballon.alpha.style.bottom = alpha_bottom + 'px';
    try {
        const ballon_top_pos = ballon.alpha.getBoundingClientRect().y
        if (ballon_top_pos < box_top_pos) {
            cancelAnimationFrame(ballon.frame_id);
            ballon.delete();
            ballon = null;
            return;
        }            
    } catch (error) {
        cancelAnimationFrame(ballon.frame_id);
        ballon = null;
        return;
    }
    return ballon.frame_id = requestAnimationFrame(() => releaseBallon(ballon));
}


document.addEventListener("keyup", (event) => {
    const alpha_id = "alpha-" + event.key.toUpperCase();
    document.getElementById(alpha_id)?.remove();
})


setInterval(() => {
    const letter = alphabets.choose();
    const ballon_position = ballon_positions.choose();
    const ballon = new Ballon(box, ballon_position, letter);
    ballon.frame_id = requestAnimationFrame(() => releaseBallon(ballon));
}, 2000);


