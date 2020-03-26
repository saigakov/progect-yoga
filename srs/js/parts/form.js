function form() {
    let message = {
        loading: 'Загрузки...',
        success: 'Спасибо, мы скоро с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMassage = document.createElement('div');

        statusMassage.classList.add('status');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMassage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            let formData = new FormData(form);

            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            request.send(json);

            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                    statusMassage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMassage.innerHTML = message.success;
                } else {
                    statusMassage.innerHTML = message.failure;
                }
            });

                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }

        });
}

module.exports = form;