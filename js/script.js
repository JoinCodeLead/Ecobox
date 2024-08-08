async function validateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('json/users.json');
        const users = await response.json();

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            window.location.href = user.url;
        } else {
            alert('Incorrect username or password.');
        }

        // Limpiar el formulario después de la validación
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

    } catch (error) {
        console.error('Error reading the JSON file', error);
    }
}
