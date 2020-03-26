window.addEventListener('DOMContentLoaded', function () {
    "use strict";
    let calc = require('./js/parts/calc.js'),
        form = require('./js/parts/form.js'),
        slider = require('./js/parts/slider.js'),
        tabs = require('./js/parts/tabs.js'),
        timer = require('./js/parts/timer.js'),
        modal = require('./js/parts/modal.js');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();

});