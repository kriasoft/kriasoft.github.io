(function (jQuery) {
    "use strict";

    /* COUNTDOWN */
    jQuery("#countdown").countdown({
        date: "1 April 2015 00:00:00", // Put your date here
        format: "on"
    });

    /* TOOLTIPS */
    jQuery('.social-icon').tooltip();
    jQuery('.input-group-addon').tooltip();

    /* CONTACT FORM */
    jQuery('#contact-form').ketchup().submit(function() {
        if (jQuery(this).ketchup('isValid')) {
            var action = jQuery(this).attr('action');
            jQuery.ajax({
                type: "POST",
                url : action,
                data: {
                    name: jQuery('#name').val(),
                    email: jQuery('#email').val(),
                    message: jQuery('#message').val()
                },
                success: function () {
                    jQuery('#contact-alert').fadeIn();
                    jQuery('#contact-alert').addClass('alert-success');
                    jQuery('#contact-result').html('<span aria-hidden="true" data-icon="&#xe0d6;"></span> Success! Thanks for contacting us!');
                },
                error: function () {
                    jQuery('#contact-alert').fadeIn();
                    jQuery('#contact-alert').addClass('alert-danger');
                    jQuery('#contact-result').html('<span aria-hidden="true" data-icon="&#xe0dc;"></span> Sorry, an error occurred!');
                }
            });
        }
        return false;
    });

    /* EMAIL SIGNUP FORM */
    jQuery('#email-signup').ketchup().submit(function() {
        if (jQuery(this).ketchup('isValid')) {
            var action = jQuery(this).attr('action');
            jQuery.ajax({
                url: action,
                type: 'POST',
                data: {
                    email: jQuery('#email-address').val()
                },
                success: function(data){
                    jQuery('#signup-alert').fadeIn();
                    jQuery('#signup-alert').addClass('alert-success');
                    jQuery('#signup-result').html(data);
                },
                error: function() {
                    jQuery('#signup-alert').fadeIn();
                    jQuery('#signup-alert').addClass('alert-danger');
                    jQuery('#signup-result').html('<span aria-hidden="true" data-icon="&#xe0dc;"></span> Sorry, an error occurred!');
                }
            });
        }
        return false;
    });

})(jQuery);
