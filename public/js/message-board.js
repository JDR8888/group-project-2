/* eslint-disable */
const recipientID = document.getElementById('fromID').textContent;
const exampleModal = document.getElementById(`reply${recipientID}`);
let button;

exampleModal.addEventListener('show.bs.modal', (event) => {
  const recipientID = document.getElementById('fromID').textContent;
  // Button that triggered the modal
  button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const modalBodyContent = exampleModal.querySelector(
    `.modal-body${recipientID}`
  ).innerHTML;

  const messageFormEl = document.getElementById(`message-form${recipientID}`);
  console.log(messageFormEl);

  exampleModal.addEventListener('hide.bs.modal', (event) => {
    console.log('modal hidden');
    messageFormEl.reset();
    const modalBody = exampleModal.querySelector(`.modal-body${recipientID}`);
    modalBody.innerHTML = modalBodyContent; // restore original modal body's content
  });

  messageFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submitting');

    const recipient = button.getAttribute('data-bs-whatever');
    const userId = document.getElementById('replyUser').textContent;
    const content = document.getElementById('message-text').value;

    const message = {
      sender_id: userId,
      receiver_id: recipient,
      content,
    };
    console.log(message);

    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Message sent:', data);
        const modalBody = exampleModal.querySelector(
          `.modal-body${recipientID}`
        );
        modalBody.innerHTML = '<p>Message sent!</p>';
      });
  });
});
