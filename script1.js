// Display the current date in the format 'dd MMMM yyyy'
document.addEventListener('DOMContentLoaded', () => {
    const currentDateElement = document.getElementById('currentDate');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = today.toLocaleDateString('en-GB', options);
});

function view(){
    alert("Displaying Invitations")
}