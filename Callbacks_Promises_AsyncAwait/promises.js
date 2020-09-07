const items = [
  { item: "Apple", detail: "Buy half dozen apples." },
  { item: "Bread", detail: "Get 2 brown breads." },
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
  setTimeout(() => {
    items.push(item);
  }, 2000);
}

//printItems();
// addItem({ item: "Cake", detail: "Vanilla cake." });
// printItems();

function addItem(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      items.push(item);
      const error = true;
      if (!error) {
        resolve("Success!!");
      } else {
        reject("Some issue!!");
      }
    }, 2000);
  });
}

// addItem({ item: "Cake", detail: "Vanilla cake." })
//   .then((result) => {
//     console.log(result);
//     printItems();
//   })
//   .catch((result) => {
//     console.log(result);
//     printItems();
//   });

// Promise all, when multiple promise condition has to be checked.

const promise1 = Promise.resolve("Promise resolved");
const promise2 = "Random value";
const promise3 = Promise.reject("Promise rejected.");
Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((values) => console.log(values))
  .finally((values) => console.log("This is finally."));
