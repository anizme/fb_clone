document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'http://127.0.0.1:8000/api/accounts/items/';

    const form = document.getElementById('loginForm');
    const emailPhoneInput = document.getElementById('Email');
    const passwordInput = document.getElementById('Password');
    const accountIdInput = document.getElementById('accountId');

    // Fetch and display accounts
    // function fetchAccounts() {
    //     fetch(apiUrl)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data); // Kiểm tra kiểu dữ liệu của data
    //             if (Array.isArray(data)) {
    //                 data.forEach(account => {
    //                     const li = document.createElement('li');
    //                     li.textContent = `ID: ${account.id}, Email/Phone: ${account.email_phone}`;
    
    //                     const editButton = document.createElement('button');
    //                     editButton.textContent = 'Edit';
    //                     editButton.addEventListener('click', () => {
    //                         emailPhoneInput.value = account.email_phone;
    //                         passwordInput.value = account.password;
    //                         accountIdInput.value = account.id;
    //                     });
    
    //                     const deleteButton = document.createElement('button');
    //                     deleteButton.textContent = 'Delete';
    //                     deleteButton.addEventListener('click', () => {
    //                         if (confirm('Are you sure you want to delete this account?')) {
    //                             fetch(`${apiUrl}${account.id}/`, {
    //                                 method: 'DELETE',
    //                                 headers: {
    //                                     'Content-Type': 'application/json'
    //                                 }
    //                             })
    //                             .then(() => fetchAccounts())
    //                             .catch(error => console.error('Error:', error));
    //                         }
    //                     });
    
    //                     li.appendChild(editButton);
    //                     li.appendChild(deleteButton);
    //                     accountsList.appendChild(li);
    //                 });
    //             } else {
    //                 console.error('Data is not an array:', data);
    //             }
    //         })
    //         .catch(error => console.error('Error:', error));
    // }
    

    // Create or Update Account
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const id = accountIdInput.value;
        const method = id ? 'PUT' : 'POST';
        const url = id ? `${apiUrl}${id}/` : apiUrl;

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email_phone: emailPhoneInput.value,
                password: passwordInput.value
            })
        })
        .then(response => response.json())
        .then(() => {
            form.reset();
            accountIdInput.value = '';
            fetchAccounts();
        })
        .catch(error => console.error('Error:', error));
    });

    fetchAccounts();
});
