async function forDeletion() {
  const idValue = event.target.dataset.id;
  console.log(idValue);
  await fetch(`http://localhost:3000/memberships/${idValue}`, {
    method: 'DELETE',
  });
  makeCards();
}

function makeCards() {
  fetch('http://localhost:3000/memberships')
    .then((res) => res.json())
    .then((data) => {
      const divForCards = document.createElement('div');
      divForCards.setAttribute('class', 'forCards');
      const placeForContent = document.querySelector('#top');
      placeForContent.insertAdjacentElement('afterend', divForCards);
      data.data.map((oneMembership) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        divForCards.append(card);
        const divForText = document.createElement('div');
        divForText.setAttribute('class', 'priceName');
        card.append(divForText);
        const price = document.createElement('span');
        price.innerHTML = `$${oneMembership.price.toFixed(2)} `;
        const name = document.createElement('span');
        name.innerHTML = oneMembership.name;
        const description = document.createElement('p');
        description.setAttribute('class', 'description');
        description.innerHTML = oneMembership.description;
        const trashButton = document.createElement('button');
        trashButton.setAttribute('id', 'trash');
        const trash = document.createElement('img');
        trashButton.append(trash);
        trashButton.addEventListener('click', forDeletion);
        trash.setAttribute('src', './photos/trash.png');
        trash.setAttribute('data-id', `${oneMembership._id}`); //dataId.set
        trash.setAttribute('class', 'forTrash');
        divForText.append(price, name);
        card.append(description, trashButton);
      });
    });
}
makeCards();

// .bind(oneMembership._id)

// async function firstAsync() {
//   await makeCards()
//   const allTrashes = document.querySelectorAll('#trash');

//   // return 'First from async function.'
//   const text = await setTimeout(() => {
//     console.log(allTrashes.length);
//   }, 2000);
//   return text;
// }
// firstAsync();

// async function firstAsync() {
//   // return 'First from async function.'
//   const text = await setTimeout(() => {
//     console.log('First from async function');
//   }, 2000);
//   return text;
// }
// firstAsync();
