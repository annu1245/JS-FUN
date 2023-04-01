export default class Ballon {
    frame_id = -1;
    constructor(box, ballon_position, letter) {
        this.alpha = document.createElement('div');
        this.alpha.id = "alpha-" + letter;
        this.alpha.className = "ballon";
        this.alpha.innerText = letter;
        this.alpha.style.left = ballon_position + '%';
        this.alpha.style.bottom = '0px';
        box.appendChild(this.alpha);
   }
   delete() {
    this.alpha.innerText = "";
    this.alpha.remove();
   }
}
