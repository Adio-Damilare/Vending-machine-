
var coke = 100
var rice = 500
var bean = 500
var sweet = 50
var puff = 50
var milk = 200
var chocolate = 400
var sadine = 800
var perfume = 900
var cream = 1000
var sanitary = 1200
var oil = 2000
var amount = 0
var secondAmount = 0
var amountOfCoke = "The amount of coke is #100"
var amountOfRice = "The amount of rice is #500"
var amonutOfBean = "The amount of bean is #500"
var amountIfSweet = "The amount of sweet is #50"
var amountOfPuff = "The amount of puff puff is #50"
var amountOfMilk = "The amount of milk is #200" 
var amountOfChocolate = "The amount of chocolate is #400"
var amountOfSandine = "The amount of sandine is #800"
var amountOfPerfume = "The amount of perfume is #900" 
var amountOfCream = "The amount of cream is #1000" 
function enter(){ 
     
    if(input.value>0){
      
        total1.innerText =    input.value
        alert("your total account balance is: #"+ input.value)
        input.value = ""
    }
    else{
        alert("Kindly, enter your credit card or deposit here")
        input.value = ""
    }

}
function one(){
    display.innerText =  amountOfCoke
}
function two(){
    display.innerText = amountOfRice
}
function three(){
    display.innerText = amonutOfBean  
}
function four(){
    display.innerText =  amountIfSweet
}
function five(){
    display.innerText =  amountOfPuff 
}
function six(){
    display.innerText = amountOfMilk
}
function seven(){
    display.innerText = amountOfChocolate
}
function eight(){
    display.innerText = amountOfSandine
}
function nine(){
    display.innerText = amountOfPerfume 
}

function add(){ 
    if(display.innerText == amountOfCoke) {
        amount = amount + coke
        total2.innerText = amount
    }
    else if(display.innerText == amountOfRice){
        amount = amount + rice
        total2.innerText =  amount  
    }
    else if(display.innerText == amonutOfBean){
        amount = amount + bean
        total2.innerText =  amount  
    }
    else if(display.innerText == amountIfSweet){
        amount = amount + sweet
       total2.innerText =  amount  
    }
    else if(display.innerText == amountOfMilk){
        amount = amount + milk
        total2.innerText = amount  
    }
    else if(display.innerText == amountOfPuff){
        amount = amount + puff
        total2.innerText = amount  
    }
    else if(display.innerText == amountOfChocolate){
        amount = amount + chocolate
        total2.innerText = amount  
    }
    else if(display.innerText == amountOfSandine){
        amount = amount + sadine
        total2.innerText = amount  
    }
    else if(display.innerText ==amountOfPerfume ){
       amount = amount + perfume
       total2.innerText = amount  
    }
    else if(display.innerText == amountOfCream){
        amount = amount + cream
       total2.innerText = amount  
   }
    else {
        amount = amonut
        total2.innerText = amount

    }
}

function delte(){
    if(display.innerText == amountOfCoke && amount>=coke) {
        amount = amount - coke
        total2.innerText = amount
        alert("You have delete one coke")
    }
    else if(display.innerText == amountOfRice && amount>=rice){
        amount = amount - rice
        total2.innerText = amount 
        alert("You have delete one rice" ) 
    }
    else if(display.innerText == amonutOfBean && amonut>=bean){
        amount = amount - bean
        total2.innerText = amount
        alert("You have delete one bean" )  
    }
    else if(display.innerText == amountIfSweet && amount>=sweet){
        amount = amount - sweet
       total2.innerText = amount
       alert("You have delete one sweet" )  
    }
    else if(display.innerText == amountOfMilk  && amount>=milk ){
        amount = amount - milk
        total2.innerText = amount
        alert("You have delete one milk"  )  
    }
    else if(display.innerText == amountOfPuff  && amount>=puff){
        amount = amount - puff
        total2.innerText = amount
        alert("You have delete one puff" )  
    }
    else if(display.innerText == amountOfChocolate  && amount>=chocolate){
        amount = amount - chocolate
        total2.innerText = amount
        alert("You have delete one chocolate" )  
    }
    else if(display.innerText == amountOfSandine && amount>=sadine){
        amount = amount - sadine
        total2.innerText = amount
        alert("You have delete one sadine" )  
    }
    else if(display.innerText ==amountOfPerfume && amonut>=perfume ){
       amount = amount - perfume
       total2.innerText = amount
       alert("You have delete one perfume"  )  
    }
    else if(display.innerText == amountOfCream && amount>=cream){
        amount = amount - cream
       total2.innerText = amount
       alert("You have delete one cream")  
   }
   else{
       alert("You have not add any item, Kindly select any item ")
   }

}

function buy(){
    var two = 0
     total1.innerText = total1.innerText - total2.innerText 
     total2.innerText =  0 *  Number(total2.innerText)
    alert("Your purchase is sucessful" )

}