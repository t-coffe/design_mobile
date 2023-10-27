const select = document.getElementById("sortBy");
const radioPrice = document.querySelector("#price");
const radioName = document.querySelector("#name");
const radioRelevance = document.querySelector("#relevance");

function changeSelect() {
  if (radioPrice.checked) {
    select.value = "price";
  } else if (radioName.checked) {
    select.value = "name";
  } else {
    select.value = "relevance";
  }
}

radioPrice.addEventListener("change", changeSelect);
radioName.addEventListener("change", changeSelect);
radioRelevance.addEventListener("change", changeSelect);

function changeRadio() {
  switch (select.value) {
    case "name":
      radioName.checked = true;
      break;
    case "relevance":
      radioRelevance.checked = true;
      break;
    default:
      radioPrice.checked = true;
  }
}

select.addEventListener("change", changeRadio);