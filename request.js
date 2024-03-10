function request(category, onRespond) {
  const url = "http://localhost:9000/v1/items?category=" + category
  console.log("category: " + category)
  console.log("requesting...")

  fetch(url)
    .then(resp => resp.json())
    .then(data => onRespond(data))
    .catch(error => onRespond({ items: [] }))
}