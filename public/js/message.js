const exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', (event) => {
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever');
  const userId = document.getElementById('userID').textContent;
  const messageText = document.getElementById('message-text');

  const sendButton = exampleModal.querySelector('.btn-primary');
  sendButton.addEventListener('click', () => {
    const content = messageText.value;

    fetch(`/api/messages/${recipient}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender_id: userId,
        receiver_id: recipient,
        content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Message sent:', data);
      });
  });
});
