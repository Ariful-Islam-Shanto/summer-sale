function purchaseCart(target) {

  const item = target.childNodes[3].childNodes[3].innerText;

  const selectedItemContainer = document.getElementById("selected-item");
  const count = selectedItemContainer.childElementCount;

  const li = document.createElement("li");
  li.classList.add("my-4", "font-medium", "text-xl");
  li.innerHTML = `${count + 1 + '.'} ${item}`;
  selectedItemContainer.appendChild(li);


  const price = target.childNodes[3].childNodes[5].childNodes[0].innerText;
  const priceInNumber = parseFloat(price);
  const totalPrice = document.getElementById("totalPrice").childNodes[1].innerText;

  const totalPriceInNumber = parseFloat(totalPrice);
  const totalCost = totalPriceInNumber + priceInNumber;

  document.getElementById("totalPrice").childNodes[1].innerText = totalCost + 'TK';
 
  if (totalCost > 0) {
    const purchaseBtn = document.getElementById("makePurchase");
    purchaseBtn.removeAttribute("disabled");
  }

  if (totalCost >= 200) {
    const applyBtn = document.getElementById("applyBtn");
    applyBtn.removeAttribute("disabled");

    applyBtn.addEventListener("click", function () {

      const coupon = document.getElementById("couponValue");
      const couponValue = coupon.value;
      const totalCostInString = document.getElementById("totalPrice").childNodes[1].innerText;
      const totalCost = parseFloat(totalCostInString);


      if (couponValue === "SELL200") {
        const calculateDiscount = (totalCost / 100) * 20;
        const discount = calculateDiscount.toFixed(2);
        console.log(discount);
        const discountBalance = document.getElementById("Discount")
        discountBalance.innerText = discount + "TK";

        const total = (totalCost - discount);
        console.log(total);
        document.getElementById("total").innerText = total + "TK";
        coupon.value = '';
        
      }
    });
  }

  document.getElementById("goHomeBtn").addEventListener("click", function () {

    document.getElementById("selected-item").innerHTML = "";
    document.getElementById("totalPrice").childNodes[1].innerText = '0.00';
    document.getElementById("Discount").textContent = '000';
    document.getElementById("total").textContent = '000';
    const purchaseBtn = document.getElementById("makePurchase");
    purchaseBtn.setAttribute("disabled", "true");
    const applyBtn = document.getElementById("applyBtn");
    applyBtn.setAttribute("disabled", "true");

  });
}
