const bcrypt = require('bcrypt')

const password = 'icecream';

bcrypt.hash(password, 10)
  .then(hashedpassword => {
    console.log(hashedpassword)
  })

bcrypt.compare('dfgdsfgsdfg', '$2b$10$kZQRtldiMHM9.p6sn7OzCeY7jAZtmoCJgantKohFzPj5rhzQosVQy')
  .then(result => {
    console.log(result)
  })