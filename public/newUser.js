async function forMembList() {
  const data = await fetch('http://localhost:3000/memberships');
  resp = await data.json();
  console.log(resp);
  resp.data.forEach((obj) => {
    const idOfMembership = obj._id;
    const optionsOfMembership = document.querySelector('#select-membership');
    const oneMembOption = document.createElement('option');
    oneMembOption.setAttribute('value', idOfMembership);
    oneMembOption.setAttribute('name', obj.name);
    oneMembOption.innerText = obj.name;
    optionsOfMembership.append(oneMembOption);
  });
}
forMembList();

document
  .querySelector('#user-button')
  .addEventListener('click', createNewUserFromForm);

function createNewUserFromForm(e) {
  e.preventDefault();

  const nameUser = document.querySelector('input[name="name"]').value;
  const surnameUser = document.querySelector('input[name="surname"]').value;

  const emailUser = document.querySelector('input[name="email"]').value;
  const ipUser = 'kol kas dar nemokam';
  let membershipIdValue = document.querySelector(
    'select[name="memberships"]'
  ).value;
  const membershipUser = document.querySelector(
    `option[value="${membershipIdValue}"]`
  ).innerText;
  console.log(membershipUser);
  const dataToSend = {
    name: nameUser,
    surname: surnameUser,
    email: emailUser,
    membership_name: membershipUser,
    membership_id: membershipIdValue,
    ip: ipUser,
  };
  console.log(dataToSend);
  fetch('http://localhost:3000/users/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataToSend),
  });
  document.querySelector('#success-message').innerHTML =
    'Sėkmingai patalpinote duomenis';

  const myTimeout = setTimeout(successMessageDelete, 5000);

  function successMessageDelete() {
    document.getElementById('success-message').innerHTML = '';
  }
}
