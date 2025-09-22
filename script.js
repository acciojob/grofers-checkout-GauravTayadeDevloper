const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
      let totalPrice = document.querySelectorAll(".price"); 
      let sum = 0;
      totalPrice.forEach(price => {
        sum += parseInt(price.textContent, 10);
      });

      let table = document.getElementsByTagName("table")[0];
      let row = document.createElement("tr");

      // requirement: single cell showing total
      let cell = document.createElement("td");
      cell.id="ans";
      cell.setAttribute("colspan", "2"); // span across both columns
      cell.textContent = "Total Price = " + sum;

      row.appendChild(cell);
      table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

