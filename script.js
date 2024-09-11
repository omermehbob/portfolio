const header = document.querySelector("header");
window.addEventListener("scroll", function() {
   header.classList.toggle("sticky" ,window.scrollY > 100 );
});

const menuIcon = document.getElementById('menu-icon');
const navlist = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navlist.classList.toggle('show');
});





function sendMail(){
    const name = document.getElementById('fullName').value;
    const gmail = document.getElementById('email_id').value;
    const description = document.getElementById('messages').value;
    var data = {
        service_id: 'service_05g1ipr',
        template_id: 'template_89wcwkp',
        user_id: 'HTlSE2jGKOd2zsmqZ',
        template_params: {
            name: name,
            gmail: gmail,
            description: description
        }
    };
     
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('Message Successfully Launched!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
}

