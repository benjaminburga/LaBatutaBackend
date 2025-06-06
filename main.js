const API_URL = 'http://localhost:3000/api/users';

function fetchUsers() {
  fetch(API_URL)
    .then(res => res.json())
    .then(users => {
      const list = document.getElementById('user-list');
      list.innerHTML = '';
      users.forEach(u => {
        const li = document.createElement('li');
        li.textContent = u.name;
        list.appendChild(li);
      });
    });
}

document.getElementById('user-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  })
  .then(() => {
    document.getElementById('name').value = '';
    fetchUsers();
  });
});

fetchUsers();
