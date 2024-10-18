document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'flex';
});

document.getElementById('register-btn').addEventListener('click', () => {
    document.getElementById('register-modal').style.display = 'flex';
});

document.getElementById('close-login').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'none';
});

document.getElementById('close-register').addEventListener('click', () => {
    document.getElementById('register-modal').style.display = 'none';
});

document.getElementById('register-submit').addEventListener('click', () => {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username, password }));
        alert('Registrazione avvenuta con successo!');
        document.getElementById('register-modal').style.display = 'none';
    }
});

document.getElementById('login-submit').addEventListener('click', () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
        localStorage.setItem('isLoggedIn', true);
        alert('Login avvenuto con successo!');
        document.getElementById('login-modal').style.display = 'none';
    } else {
        alert('Credenziali non valide');
    }
});

document.getElementById('post-btn').addEventListener('click', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const content = document.getElementById('new-post-content').value;

    if (isLoggedIn && content) {
        const postArea = document.getElementById('post-area');
        const post = document.createElement('div');
        post.classList.add('post');
        post.textContent = content;
        postArea.appendChild(post);
        document.getElementById('new-post-content').value = '';
    } else {
        alert('Devi essere loggato per pubblicare un post!');
    }
});
