$(function() {
    $('input[name*=phone]').mask('+7(999)999-99-99')
    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        var id = this.getAttribute('data-modal');
        if($(id).length === 0) return false;
        else {
            $('body').css('overflow', 'hidden');
            $(id).fadeIn()
        }
        $(id.concat(' .modal-window__close-button')).on('click', function (e) {
            $(id).fadeOut();
            $('body').css('overflow', 'auto')
        })
    });
    
    jQuery.validator.addMethod("checkMask", function (value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value);
    });

    $('.btn').on('click', function(e) {
        e.preventDefault();
        var form = $(this).closest('.form')
        form.validate({
            rules: {
                email: 'required',
                phone: {
                    required: true,
                    checkMask: true
                },
                article: 'required'
            },
            messages: {
                email: 'Пожалуйста, введите ваш email',
                phone: {
                    required: 'Пожалуйста, введите ваш телефон',
                    checkMask: 'Пожалуйста, введите правильный номер'
                },
                article: 'Введите артикул'
            }
        });
        // form.valid()
        if (form.valid()) {
            swal({
                title: "Спасибо!",
                text: "Ваша заявка отправлена, мы свяжемся с вами в скором времени",
                icon: "success",
            });
        }
    });
    
});