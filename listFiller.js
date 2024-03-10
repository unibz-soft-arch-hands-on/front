function listFiller(payload) {
  const ul = document.getElementById("items");

  const { items } = payload;

  const content = items.map(item => `<li>${item.name}</li>`);

  ul.innerHTML = content;
}