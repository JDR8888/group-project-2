const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    console.log(error);
  }
};

document.querySelector('#logout').addEventListener('click', logout);

document.addEventListener('DOMContentLoaded', () => {
  // Set up a variable to store the current length of messages
  const userID = document.getElementById('mainUserID').textContent;
  console.log(userID);
  let currentMessageLength = 0;
  async function getMessageLength() {
    const response = await fetch(`/api/messages/${userID}`);
    const messages = await response.json();
    currentMessageLength = messages.length;
    return currentMessageLength;
  }

  getMessageLength();

  // Set up a function that will send a fetch request and compare the returned length to the current length
  async function checkForNewMessages() {
    const response = await fetch(`/api/messages/${userID}`);
    const messages = await response.json();

    if (messages.length > currentMessageLength) {
      const messageTabEl = document.getElementById('messageTab');
      messageTabEl.classList.remove('text-light');
      messageTabEl.classList.add('text-danger');
      messageTabEl.classList.add('animate__heartBeat');
      // There are new messages! Do something with them here.
      console.log(
        `There are ${messages.length - currentMessageLength} new messages!`
      );
      currentMessageLength = messages.length;
    } else {
      console.log('No new messages');
    }
  }

  // Set up an interval that will call the checkForNewMessages function every 30 seconds (or whatever interval you prefer)
  (async () => {
    currentMessageLength = await getMessageLength();
    setInterval(() => {
      checkForNewMessages(userID);
    }, 10000);
  })();
});
