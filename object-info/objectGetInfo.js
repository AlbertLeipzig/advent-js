const usersContainer = document.querySelector('.users__container');

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@mail.com',
    phone: '1234567890',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'NY',
      zip: '12345',
    },
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@mail.com',
    phone: '0987654321',
    address: {
      street: '456 Main St',
      city: 'Anytown',
      state: 'NY',
      zip: '12345',
    },
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith',
    phone: '1234567890',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'NY',
      zip: '12345',
    },
  },
];

// create new user DOM element and append to usersContainer
const createUser = (user) => {
  const userEl = document.createElement('div');
  userEl.classList.add('user');
  userEl.innerHTML = `
        <div class="user__name">${user.firstName} ${user.lastName}</div>
        <div class="user__email">${user.email}</div>
        <div class="user__phone">${user.phone}</div>
        <div class="user__address">${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}</div>
    `;
  usersContainer.appendChild(userEl);
};

for (const user of users) {
  createUser(user);
}
