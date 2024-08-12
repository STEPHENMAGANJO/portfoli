<script type="text/javascript">
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const serviceID = 'service_bt54p78';
      const templateID = 'template_qibzf0p';

      emailjs.sendForm(serviceID, templateID, this)
          .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
              alert('Message sent successfully!');
          }, function(error) {
              console.log('FAILED...', error);
              alert('Failed to send the message. Please try again.');
          });
  });
</script>
