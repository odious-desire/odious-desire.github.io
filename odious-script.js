const parallax1 = document.getElementsByClassName('parallax1');
new simpleParallax(parallax1, {
    scale: 0.8,
    delay: 0.5,
});

const parallax2 = document.getElementsByClassName('parallax2');
new simpleParallax(parallax2, {
    scale: 0.9,
    delay: 1,
});

const parallaxR = document.getElementsByClassName('parallaxR');
new simpleParallax(parallaxR, {
    orientation: 'right',
    scale: 0.8,
});

const parallaxL = document.getElementsByClassName('parallaxL');
new simpleParallax(parallaxL, {
    orientation: 'left',
    scale: 0.8,
});
        
document.getElementById("myVideo").controls = false;
