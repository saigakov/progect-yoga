window.addEventListener('DOMContentLoaded', function () {
    "use strict";
    let calc = require('./srs/js/parts/calc.js'),
        form = require('./srs/js/parts/form.js'),
        slider = require('./srs/js/parts/slider.js'),
        tabs = require('./srs/js/parts/tabs.js'),
        timer = require('./srs/js/parts/timer.js'),
        modal = require('./srs/js/parts/modal.js');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();

});