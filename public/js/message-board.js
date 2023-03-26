/* eslint-disable */
const exampleModal = document.getElementById(`reply`);
let button;

exampleModal.addEventListener('show.bs.modal', (event) => {
  button = event.relatedTarget;
  const modalBodyContent = exampleModal.querySelector('.modal-body').innerHTML;
  const recipient = button.getAttribute('data-bs-whatever');
  dateName = document.getElementById(`senderName${recipient}`).textContent;
  const header = document.getElementById('replyHeader');
  header.textContent = `Message ${dateName}`;

  const messageFormEl = document.getElementById(`message-form`);
  console.log(messageFormEl);

  exampleModal.addEventListener('hide.bs.modal', (event) => {
    console.log('modal hidden');
    messageFormEl.reset();
    const modalBody = exampleModal.querySelector(`.modal-body`);
    modalBody.innerHTML = modalBodyContent;
    const sendBut = document.getElementById('sendmessage');
    sendBut.classList.remove('hidden');
  });

  messageFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submitting');
    const sendBut = document.getElementById('sendmessage');
    sendBut.classList.add('hidden');

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
        const modalBody = exampleModal.querySelector(`.modal-body`);
        modalBody.innerHTML = '<p>Message sent!</p>';
      });
  });
});
