const updateFormHanlder = async (event) => {
    event.preventDefault();
    const location = (document.getElementById('location').value);
    const what_to_eat = (document.getElementById('what-to-eat').value);
    console.log(location, what_to_eat);
};

document.querySelector('#update-btn').addEventListener('click', updateFormHanlder);