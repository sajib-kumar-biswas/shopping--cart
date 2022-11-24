function getter(id: string):number {
    const current = document.getElementById(id+"-number") as HTMLInputElement || null;
    if(current==null)
        return 0;
    return parseInt(current.value);
}

function updateTotal() {
    const subtotal = getter("phone") * 1219 + getter("case")*59;
    const tax = subtotal * 0.1;
    const total = subtotal - tax;

    const _subtotal = document.getElementById("subtotal");
    const _tax = document.getElementById("tax");
    const _total = document.getElementById("total");

    if(_subtotal)
        _subtotal.innerText = String(subtotal);
    if(_tax)
        _tax.innerText = String(tax);
    if(_total)
        _total.innerText = String(total);
}

function update(id: string, isAdd: boolean, price: number) {
    let value = getter(id);
    if(isAdd)
        value += 1;
    else if(value > 0)
        value -= 1;

    const current = document.getElementById(id+"-number") as HTMLInputElement;
    current.value = String(value);

    const element = document.getElementById(id+'-price');
    if(element)
        element.innerText = String(value*price);
    updateTotal();
}

document.getElementById("phone-minus")?.addEventListener("click",function() {
    update("phone", false, 1219);
})

document.getElementById("phone-plus")?.addEventListener("click",function() {
    update("phone", true, 1219);
})

document.getElementById("case-minus")?.addEventListener("click",function() {
    update("case", false, 59);
})

document.getElementById("case-plus")?.addEventListener("click",function() {
    update("case", true, 59);
})

document.getElementById("phone-remove")?.addEventListener("click", function(){
    const element = document.getElementById("phone");
    if(element)
        element.style.display = "none";
})

document.getElementById("case-remove")?.addEventListener("click", function(){
    const element = document.getElementById("case");
    if(element)
        element.style.display = "none";
})