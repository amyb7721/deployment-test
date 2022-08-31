// create the button in HTML. then we need to add the functions to the button here. now you need to go to HTML
// and add the script tag to connect it
const btn = document.querySelector('button')

const alertMe = () => {
    alert('hi there!');
}

btn.addEventListener('click', alertMe);