document.querySelector('#newMembership').addEventListener('click', (event) => {
  event.preventDefault();
  console.log('hello');
  const nameofMembership = document.querySelector('input[name="fName"]').value; //galima tiesiog #id ar .class pavadinima koki rasyt i skliaustelius :D
  const priceOf = document.querySelector('input[name="fPrice"]').value;
  const description = document.querySelector(
    'input[name="fDescription"]'
  ).value;
  console.log(nameofMembership, priceOf, description);
  const dataToSend = {
    price: Number(priceOf),
    name: nameofMembership,
    description: description,
  };

  fetch('http://localhost:3000/memberships/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataToSend),
  });
  // .then((resp) => resp.text())
  // .then((dataBack) => console.log(dataBack))
  // .catch((err) => console.warn(err))
});
