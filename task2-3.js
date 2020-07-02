var shop = [
    {
        title:"Товар1",
        price:100,
        kol: 3
    },
    {
        title:"Товар2",
        price:200,
        kol: 5
    },
    {
        title:"Товар3",
        price:300,
        kol: 8
    },
];

//var a = prompt("Выберите товар (1, 2, 3): ");
var a = 1
console.log("Стоимость всей партии: " + shop[a-1].price*shop[a-1].kol)

function sum(mas) {
    var s = 0;
    for(var item of mas){
        var eggs = item.price * item.kol
        s += eggs;
    }
    return s;
}

console.log("Сумма всех товаров: " + sum(shop))
