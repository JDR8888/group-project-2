const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log(document.querySelector('#user_name').value);
    console.log('hi there');
} 







document.querySelector("#signupBtn").addEventListener("click", signupFormHandler);