/* eslint-disable */

document.addEventListener('DOMContentLoaded', () => {
  const currentEat = document.getElementById('currentEat').textContent;
  const currentLoc = document.getElementById('currentLoc').textContent;
  document.getElementById('location').value = currentLoc;
  document.getElementById('what-to-eat').value = currentEat;

  const updateFormHanlder = async (event) => {
    event.preventDefault();

    const location = document.getElementById('location').value;
    const what_to_eat = document.getElementById('what-to-eat').value;
    console.log(location, what_to_eat);

    try {
      const response = await fetch('api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location: location,
          what_to_eat: what_to_eat,
        }),
      });
      if (response.ok) {
        window.location.href = '/dating';
        console.log('Profile updated!');
      }
    } catch (err) {
      console.log(err);
    }
  };

  document
    .querySelector('#update-btn')
    .addEventListener('click', updateFormHanlder);
});
