/* eslint-disable */
const updateFormHanlder = async (event) => {
    event.preventDefault();
    const location = (document.getElementById('location').value);
    const what_to_eat = (document.getElementById('what-to-eat').value); 
    fetch("api/users", {
        method: "PUT",
        body: JSON.stringify({location, what_to_eat}), 
        headers: { "Content-Type": "application/json"},
    });
};

document.querySelector('#update-btn').addEventListener('click', updateFormHanlder);