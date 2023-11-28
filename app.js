/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}
let errorParagraph = document.getElementById("error");
let list = document.getElementById("list");

getList()
  .then((resolvedValue) => {
    resolvedValue.forEach((hobbitName) => {
      const liElement = document.createElement("li");
      liElement.textContent = hobbitName;

      list.append(liElement);
    });
  })
  .catch((error) => {
    errorParagraph.textContent = error.message;
  });

