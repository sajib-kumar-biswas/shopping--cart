"use strict";
var _a, _b, _c, _d, _e, _f;
function getter(id) {
    const current = document.getElementById(id + "-number") || null;
    if (current == null)
        return 0;
    return parseInt(current.value);
}
function updateTotal() {
    const subtotal = getter("phone") * 1219 + getter("case") * 59;
    const tax = subtotal * 0.1;
    const total = subtotal - tax;
    const _subtotal = document.getElementById("subtotal");
    const _tax = document.getElementById("tax");
    const _total = document.getElementById("total");
    if (_subtotal)
        _subtotal.innerText = String(subtotal);
    if (_tax)
        _tax.innerText = String(tax);
    if (_total)
        _total.innerText = String(total);
}
function update(id, isAdd, price) {
    let value = getter(id);
    if (isAdd)
        value += 1;
    else if (value > 0)
        value -= 1;
    const current = document.getElementById(id + "-number");
    current.value = String(value);
    const element = document.getElementById(id + '-price');
    if (element)
        element.innerText = String(value * price);
    updateTotal();
}
(_a = document.getElementById("phone-minus")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    update("phone", false, 1219);
});
(_b = document.getElementById("phone-plus")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    update("phone", true, 1219);
});
(_c = document.getElementById("case-minus")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    update("case", false, 59);
});
(_d = document.getElementById("case-plus")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    update("case", true, 59);
});
(_e = document.getElementById("phone-remove")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
    const element = document.getElementById("phone");
    if (element)
        element.style.display = "none";
});
(_f = document.getElementById("case-remove")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
    const element = document.getElementById("case");
    if (element)
        element.style.display = "none";
});
