
document.querySelector('#submit-idea form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.querySelector('#idea-title').value.trim();
    const description = document.querySelector('#idea-description').value.trim();
    if (title === '' || description === '') {
        alert('Please fill out all fields before submitting.');
        return;
    }
    console.log('Project Submitted:', { title, description });
    alert('Your project idea has been successfully submitted!');
    
    document.querySelector('#idea-title').value = '';
    document.querySelector('#idea-description').value = '';
});

document.querySelector('#collaborate button').addEventListener('click', function() {
    console.log('Joined a collaboration.');
    alert('You have successfully joined a collaboration!');
});
document.querySelector('#mentorship button').addEventListener('click', function() {
    console.log('Mentor found.');
    alert('A mentor has been assigned to guide you.');
});
document.querySelectorAll('#resources ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const resourceUrl = e.target.href;
        console.log('Redirecting to:', resourceUrl);
        window.open(resourceUrl, '_blank');
    });
});
