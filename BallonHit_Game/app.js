const box = document.getElementById('box');
const box_y = box.getBoundingClientRect().y;
const ballon = document.getElementById('alpha-A');
const ballon_positions = [ 10, 30, 50, 70, 90 ];
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function releaseBallon(alpha) {
    const alpha_bottom = parseInt(alpha.style.bottom) + 1.5;
    alpha.style.bottom = alpha_bottom + 'px';
    const alpha_y = alpha.getBoundingClientRect().y
    if (alpha_y > box_y) {
        cancelAnimationFrame(alpha.getAttribute('timer'));
    }
    alpha.setAttribute('timer', requestAnimationFrame(() => releaseBallon(alpha)));
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function createBallon() {
    letter = choose(alphabets);
    const alpha = document.createElement('div');
    alpha.id = "alpha-" + letter;
    alpha.className = "ballon";
    alpha.innerText = letter;
    alpha.style.left = choose(ballon_positions) + '%';
    alpha.style.bottom = '0px';
    box.appendChild(alpha);
    return alpha;
}


setInterval(() => {
    const alpha = createBallon();
    alpha.setAttribute('timer', requestAnimationFrame(() => releaseBallon(alpha)));
}, 2000)