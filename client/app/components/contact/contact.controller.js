class ContactController {
    constructor($http, $timeout) {
        this.$http = $http;
        this.$timeout = $timeout;
        this.name = 'Contact Me - Please Send Email';
        const el = document.querySelectorAll('#sendMessage')[0];
        this.submitButtonDisabled = false;
        this.submitted = false;
        el.addEventListener('click', () => this.submit(this.contactform));
        this.result = 'hidden';
        this.formData = {};
        this.resultMessage = '';
    }
    submit(contactform) {
        this.submitted = true;
        this.submitButtonDisabled = true;
        const el = document.querySelectorAll('.contact-thx-info')[0];
        if (contactform.$valid) {
            this.$http({
                method: 'POST',
                url: 'contact-form.php',
                data: $.param(this.formData),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then((resp) => {
                if (resp.data.success) {
                    this.submitButtonDisabled = true;
                    this.resultMessage = resp.data.message;
                    this.result = 'bg-success';
                    jQuery(el).addClass('fade-in');
                    jQuery(el).css('display', 'block');
                } else {
                    this.submitButtonDisabled = false;
                    this.resultMessage = resp.data.message;
                    this.result = 'bg-danger';
                }
            });
        } else {
            this.submitButtonDisabled = false;
            this.resultMessage = 'Failed :( Please fill out all the fields.';
            this.result = 'bg-danger';
        }

        this.formData.inputEmail = '';
        this.formData.inputName = '';
        this.formData.inputSubject = '';
        this.formData.inputMessage = '';

        this.$timeout(() => {
            jQuery(el).removeClass('fade-in');
            jQuery(el).css('display', 'none');
        }, 6000);
    }
}

export default ContactController;
