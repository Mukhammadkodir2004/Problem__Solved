var ticketPriceInDollor =500;
var hotelPriceInDollor=250;
var entertainmentPriceInDollor=120;
var dollorInSum = 9000;
var yevroInSum = 10000;
var totalCost =( ticketPriceInDollor * dollorInSum + ticketPriceInDollor + dollorInSum + entertainmentPriceInDollor * yevroInSum    )


var userMoney = Number(prompt("Soqqa?"));
var elHeading = document.querySelector("h1");

if(userMoney>= totalCost){
    elHeading.textContent="Oq Yo'l";

}else{
    elHeading.textContent="Sabr";
}

 