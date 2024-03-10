function onselect(listFiller, request) {
  const selectElement = document.getElementById("categories");

  selectElement.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const isEmpty = selectedValue.length == 0;

    if (isEmpty) return;

    request(selectedValue, listFiller);
  });

  listFiller()
}