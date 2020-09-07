// Async  Await
// Any function if declared "async" then, in function body "await" can be used
//  which waits for "await" process to complete before executing further
const items = [
  { item: "Apple", detail: "Buy half dozen apples." },
  { item: "Milk", detail: "2 gallons of milk." },
];

function printItems() {
  //ES6 style
  setTimeout(function () {
    let output = "";
    items.forEach((item, index) => {
      output += `<li>${item.item}----${item.detail}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function addItem(item) {
  return new Promise((resolve111, reject111) => {
    setTimeout(() => {
      items.push(item);
      const error = true;
      if (!error) {
        resolve111("Success!!");
      } else {
        reject111("Some issue!!");
      }
    }, 2000);
  });
}

// async function init() {
//   await addItem({ item: "Cake", detail: "Vanilla cake." });
//   printItems();
// }

async function init() {
  await addItem({ item: "Cake", detail: "Vanilla cake." })
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));
  //console.log(r.Promise);
  printItems();
}

//init();

/*
// Async/Await with Fetch
*/
async function fetchJSON() {
  const prom = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await prom.json();
  console.log(prom);
  console.log(data);
}

fetchJSON();
