const items = [
  { item: "Apple", detail: "Buy half dozen apples." },
  { item: "Milk", detail: "2 gallons of milk." },
];

function printItems() {
  //Pre ES6 style
  setTimeout(function () {
    let output = "";
    for (i = 0; i < items.length; i++) {
      output =
        output + "<li>" + items[i].item + "----" + items[i].detail + "</li>";
    }
    document.body.innerHTML = output;
  }, 1000);
}

function addItem(item, mycallbackFunction) {
  setTimeout(() => {
    items.push(item);
    mycallbackFunction();
  }, 2000);
}

addItem({ item: "Cake", detail: "Vanilla cake." }, printItems);

//printItems();
