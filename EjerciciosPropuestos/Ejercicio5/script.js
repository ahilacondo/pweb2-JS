document.addEventListener("DOMContentLoaded", () => {
    const amountNumsForm = document.querySelector("#amountNumsForm");
    const amountNums = document.querySelector("#amountNums");
    const sumForm = document.querySelector("#sumForm");
    const sumTable = document.querySelector("#sumTable");
    const sumResult = document.querySelector("#sumResult");
    const LIMIT = 10;
  
    amountNumsForm.onsubmit = function() {
      if(amountNums.value === "") { // trim() could be used
        generateTable(Math.ceil(Math.random() * LIMIT));
      } else {
        generateTable(amountNums.value); // Type Coercion
      }
      return false;
    }
  
    function generateTable(slots) {
      sumTable.innerHTML = "";
      for(let idx = 0; idx < slots; idx++) {
        sumTable.innerHTML += `
          <tr>
            <td><input class="nums" type="number"></td>
          </tr>
        `;
      }
      sumTable.innerHTML += `
        <tr>
          <td colspan="2"><button>Sum All</button></td>
        </tr>
      `;
  
      sumForm.onsubmit = function() {
        const numInputs = document.querySelectorAll(".nums");
        const nums = [];
        for(let i = 0; i < numInputs.length; i++) {
          nums.push(numInputs[i].value);
        }
        const sum = nums.reduce((a, b) => a + Math.floor(b), 0); // Could be better the use of Number.parseInt()
        sumResult.textContent = sum; // Could be better if textContent is used instead
        return false;
      }
    }
  });
  