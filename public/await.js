function getFetchThen() {
  fetch('http://localhost:3000/memberships')
    .then((resp) => resp.json())
    .then((data) => {
      console.log('data ===', data);
      const users = getUsers();
      console.log('users ===', users);
      // getUsers().then((data) => {
      //   console.log('users ===', data);
      //   // as turiu ir memb ir user
      // });
    })
    .catch((err) => console.log(err));
}

function getUsers() {
  fetch('http://localhost:3000/users')
    .then((resp) => resp.json())
    .then((data) => {
      console.log('data ===', data);
      return data;
    })
    .catch((err) => console.log(err));
}
async function getUsersAsync() {
  try {
    const resp = await fetch('http://localhost:3000/users');
    console.log('resp ===', resp);
    if (!resp.ok) throw new Error('blogai');
    const data = await resp.json();
    // console.log('data ===', data);
    if (data.success) {
      data.data.map((d) => console.log(d.name));
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}
getUsersAsync();
// getFetchThen();
