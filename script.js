let total = document.getElementById("price");

let count = document.getElementById("nbr1");
let price = document.getElementById("p1");

let count1 = document.getElementById("nbr2")
let price1 = document.getElementById("p2")

let count2 = document.getElementById("nbr3")
let price2 = document.getElementById("p3")
 

function picecountup1(count,price){
    let a = count.innerHTML
    let b = parseInt(a)+1
    count.innerHTML = b.toString()
    let c = price.innerHTML
    let d = parseInt(c)+180
    price.innerHTML=d.toString() 
     sum(total,price,price1,price2)
}

function pricecountdown1(count,price){
    let a = count.innerHTML
    let b = parseInt(a)
    if (b>0){
        b--;
        count.innerHTML = b.toString()
        let c = price.innerHTML
        let d = parseInt(c)-180
        price.innerHTML = d.toString()
        sum(total,price,price1,price2)
    }
}

//calcul item 2

function picecountup2(count1,price1){
    let a = count1.innerHTML
    let b = parseInt(a)+1
    count1.innerHTML = b.toString()
    let c = price1.innerHTML
    let d = parseInt(c)+80
    price1.innerHTML=d.toString()
    sum(total,price,price1,price2)
}

function pricecountdown2(count1,price1){
    let a = count1.innerHTML
    let b = parseInt(a)
    if (b>0){
        b--;
        count1.innerHTML = b.toString()
        let c = price1.innerHTML
        let d = parseInt(c)-80
        price1.innerHTML = d.toString()
        sum(total,price,price1,price2)
        }
}

//calcul item 3

function picecountup3(count2,price2){
    let a = count2.innerHTML
    let b = parseInt(a)+1
    count2.innerHTML = b.toString()
    let c = price2.innerHTML
    let d = parseInt(c)+100
    price2.innerHTML=d.toString()
    sum(total,price,price1,price2) 
}

function pricecountdown3(count2,price2){
    let a = count2.innerHTML
    let b = parseInt(a)
    if (b>0){
        b--;
        count2.innerHTML = b.toString()
        let c = price2.innerHTML
        let d = parseInt(c)-100
        price2.innerHTML = d.toString()
        sum(total,price,price1,price2)
        }
}

function sum(total,price,price1,price2){
    let totalp=parseInt(price.innerHTML)
    let totalp2=parseInt(price1.innerHTML)
    let totalp3=parseInt(price2.innerHTML)
    s=totalp+totalp2+totalp3
    total.innerHTML = s.toString()
}