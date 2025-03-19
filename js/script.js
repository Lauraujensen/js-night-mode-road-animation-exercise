'use strict';

let sun = document.querySelector('.sun');
let scene = document.querySelector('.scene');

sun.addEventListener('click', () => { // Toggle gør, at man kan skifte mellem to tilstande. On/off eller nat/dag f.eks.
    scene.classList.toggle('night');
})