const exampleModal = document.getElementById('exampleModal');
let button;
exampleModal.addEventListener('show.bs.modal', (event) => {
  // Button that triggered the modal
  button = event.relatedTarget;
  // Extract info from data-bs-* attributes
});

const messageFormEl = document.getElementById('message-form');
console.log(messageFormEl);
messageFormEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submitting');

  const recipient = button.getAttribute('data-bs-whatever');
  const userId = document.getElementById('userID').textContent;
  const content = document.getElementById('message-text').value;

  const message = {
    sender_id: userId,
    receiver_id: recipient,
    content,
  };
  console.log(message);

  fetch(`/api/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Message sent:', data);
      const modalBody = exampleModal.querySelector('.modal-body');
      modalBody.innerHTML = '<p>Message sent!</p>';
    });
});

// exampleModal.addEventListener('hide.bs.modal', (event) => {
//   console.log('modal hidden');
// });
