console.log('jsi shree ram');
//if else ---- jas me condition lagane ke liye if else ka use hota hai or nexted if ka bhi use hota hai.if ka matlab hota hai agar or else optoinal hota hai jab if false hota hai to else chalta hai yani --- if kam karo nhi huaa agar vo kam to else kar do ...


//valit voter or not ----

// let age = Number(prompt('Enter you age'));

// if(isNaN(age)){
//     //isNaN chack karta hai ki kaya vlaue NaN hai hai to true dega nhi flase dega ye sirf NaN hi chack karta hai or kuchh nhi.
//     console.log('worng input');
//     //ham ye esliye laga rhe ha kyuki agar koe bhi number ke alava kuchh or vlaue deta hai to jo upar number fun hai vo use number me nhi convert kar payga or Uske pas value aaygi NaN vahi ham chack karke usko kuchh bolenge.
// }

// else if(age >= 18){
//     console.log('Yas are you valit for vote');
// }
// else {
//     console.log('Not valit for vote');
// }


//SHOPE DISCOUNT --- 
//Calculate Offer Payble amount.
//amout ------- discount
//0 to 5000         0%
//5001 to 7000      5%
//7001 to 9000      10%
//more than 9000    20%


// let purchaseAmount = Number(prompt('Enter Your Purchase Amout'));

// let paybleAmount;
// if(purchaseAmount < 0 || isNaN(purchaseAmount)){
//     alert('Somthing Went Wrong');
// }
// else if(purchaseAmount > 5000 && purchaseAmount <= 7000){
//     paybleAmount = purchaseAmount*5/100;
//     console.log('Discount 5%' , Math.floor(paybleAmount),'Rs')
//     console.log(`Purchase Amount is ${purchaseAmount} Rs , Payble Amount is ${Math.floor(purchaseAmount - paybleAmount)} Rs`);
// }
// else if(purchaseAmount > 7000 && purchaseAmount <= 9000){
//     paybleAmount = purchaseAmount*10/100;
//     console.log('Discount 10%' , Math.floor(paybleAmount),'Rs');
//     console.log(`Purchase Amount is ${purchaseAmount} Rs , Payble Amount is ${Math.floor(purchaseAmount - paybleAmount)} Rs`);

// }
// else if(purchaseAmount > 9000){
//     paybleAmount = purchaseAmount*20/100;
//     console.log('Discount 20%' , Math.floor(paybleAmount),'Rs');
//     console.log(`Purchase Amount is ${purchaseAmount} Rs , Payble Amount is ${Math.floor(purchaseAmount - paybleAmount)} Rs`);

// }

// else {
//     console.log('0% Descount');
//     console.log('Payble Amount is : ', purchaseAmount);
// }


//Yha par sem chije kae bar repeat ho rhi hai to ye good code nhi hai hame ese or andestandable banana hoga.


//Next Example --- 
//yaha par ham sirf payble amount nikalenge bas ham chahet o ese funtoin me bhi dal sakte hai.

// let purchaseAmount = Number(prompt('Enter Your Purchase Amout'));

// let discount;

// if(purchaseAmount < 0 || isNaN(purchaseAmount)){
//     alert('Somthing Went Wrong');
// }
// else if (purchaseAmount <= 5000){
//     discount = 0;
// }
// else if(purchaseAmount > 5000 && purchaseAmount <= 7000){
//     discount = 5;
// }
// else if(purchaseAmount > 7000 && purchaseAmount <= 9000){
//     discount = 10;
// }
// else if(purchaseAmount > 9000){
//     discount= 20;
// }

// console.log('Payble Amount is : ', purchaseAmount - Math.floor(discount*purchaseAmount/100));






//Electricity Per unit GST ----

//Q -- Hame Har 1 unit par charge lagana hai conditoin ke hisab se. Lekin Esme ak Katch hai mana hamere pass aaya 120 unit to 120 me se jo 100 unit hoti uspar gst lagegi Rs4 fir uske upar jo 101 se 120 tak yani 20 unit par gst lagegi Rs6 samjhje.

//condition --- 
//Unit --------- GST
//0 to 100       Rs.4 /unit
//101 to 200     Rs.6 /unit
//201 to 400     Rs.8 /unit
//more than 400  Rs.13 /unit

//Logic --- 
//Esme ham niche se start karenge --- Jaise mana hame 700 units mili to condition kya kahati hai ki 400 > jitni unit hai uspar 13Rs gst lagao ok.
//300 x 13 = 3900.
//ab 700 units me se 300 ka calculation ho gya to 400 unit bacha to condition kya kahati hai 200 se upar jitni units hai unpe 8Rs gst lagao ok.
//200 x 8 = 1600
//ab unit bachi hai 200 ok to 100 se jitni units upar hain unpar gst lagegi 6Rs ok.
//100 x 6 = 600
//Ab last unit bachi hai 100 espar gst lagegi 4Rs ok 
//100 x 4 = 400 
//Total Amount is = 6500.

//Ab logic to ho gya ab es logic ko code me convert karna hai.


// let unit = Number(prompt('Enter Electricity Unit'));//700
// let unitAmount = 0;

// if(unit > 400){
//     unitAmount = (unit - 400) * 13;//3900
//     unit = 400;//calculation karke jitna bacha usko vapas unit me dalna hai taki firse calculation ho sake.
// }//400
// if(unit > 200 && unit <= 400){
//     unitAmount += (unit - 200) * 8;//1600
//     unit = 200;
// }//200
// if(unit > 100 && unit <= 200){
//     unitAmount += (unit - 100) * 6;//600
//     unit = 100
// }//100
// if(unit > 0 && unit <= 100){//400
//     unitAmount += unit * 4;
// }
// console.log(unitAmount);//6500

// //Ham sirf if ka use esliye kar rhe hai kyuki hame sabko chalana hai else if me kya hota hai ki if nhi chalega tab else if chalega lekin hamko sabko check karna hai esiliye ham har if me unit ke andar jitni value bach  rhi hai use asign kar rhe hai.
// //Lekin yaha par jab first value nikal rhi hai to vo unitAmount me chali ja rhi hai lekin jab duri value nikal rhi hai to vo 1st value ko replace kar de rhi hai usme + nhi ho rhi hai esliye ham += ka use kar rhe hai.





//Electrycity bill program recreate ====

//condition --- 
//Unit --------- GST
//0 to 100       Rs.4 /unit
//101 to 200     Rs.6 /unit
//201 to 400     Rs.8 /unit
//more than 400  Rs.13 /unit

// let E_unit = Number(prompt('Enter Electricity Unit'));//700
// let UnitAmount = 0;
// if(E_unit > 400){
//     UnitAmount = (E_unit-400) * 13;
//     E_unit = 400;
// }//400
// if(E_unit > 200 && E_unit <= 400){
//     UnitAmount += (E_unit - 200) * 8;
//     E_unit = 200;
// }//200
// if(E_unit > 100 && E_unit <= 200){
//     UnitAmount += (E_unit - 100) * 6;
//     E_unit = 100;
// }
// if(E_unit > 0 && E_unit <= 100){
//     UnitAmount += E_unit * 4;
// }
// console.log(UnitAmount);
// //done




//INR denomination ---
//Eska matlab kya hota hai jaise hamare pass koe amount hai uska kine - kitne ka note kitna note ban sakta hai ye hota hai. 
//Jaise --- 
//mana Hamare pass 4888 rs hai to -- esme kitne kitne ke kitne note banenge dekhte hai
//4500 = 500-9 notes
//388 = 200-1 note
//188 = 100-1 note
//88 = 50-1 note
//38 = 10-3 notes
//8rs last me bacha hai esme bhi 5 ka note ban sakta hai.
//To esi logic ko hame code me utarna hai.

//code Logic --- 
//mana hamare pass 4888 rs hai to ese ham 4888/500 kar denge to ye jitna tak jayga eska matlab utna note banega 500 ka ok ab ye pata karna hai ki 500 ka note nikalne ke bad kitna paisa bacha hai uske liye ham 4888%500  to yaha par hame jo bacha hai vo mil jayga.
// console.log(Math.floor(4888/500));//9
// console.log(Math.floor(4888%500));//388
//to hame ab value bhi mil ja rhi hai to bas yani kam hame har note ke sath karna hai abhi ham 500 ke sath kar rhe hai to 9 notes nikal rhe hai or usi value ko %  kar rhe hai to kitna bach rha hai vo pata chal ja rha hai bacha hai 388 to esme ham devide kar sakte hai 200 se to 200 ka notes bhi nikal jayga fir aise hi sabhi notes ke sath karenge.

// let INRAmount = 175351;
// let AmountReturnVal = 0;//388
// let AmountReturnVal2 = 0;//188
// let AmountReturnVal3 = 0;//88
// let AmountReturnVal4 = 0;//38
// let AmountReturnVal5 = 0;//8

// let note500 = 0;
// let note200 = 0;
// let note100 = 0;
// let note50 = 0;
// let note10 = 0;

// console.log('INR Amount is : ', INRAmount);

// if(INRAmount >= 500){
//     note500 = Math.floor(INRAmount/500);
//     AmountReturnVal = Math.floor(INRAmount%500);
//     console.log("Number of 500 Notes : ",note500);
//     // console.log("Amount Return Val 500 : ",AmountReturnVal);
// }//323rs
// if(INRAmount >= 200){
//     note200 = Math.floor(AmountReturnVal/200);
//     AmountReturnVal2 = Math.floor(AmountReturnVal%200);
//     console.log("Number of 200 Notes : ",note200);
//     // console.log("Amount Return Val 200 : ",AmountReturnVal2);
// }
// if(INRAmount >= 100){
//     note100 = Math.floor(AmountReturnVal2/100);
//     AmountReturnVal3 = Math.floor(AmountReturnVal2%100);
//     console.log("Number of 100 Notes : ",note100);
//     // console.log("Amount Return Val : ",AmountReturnVal3);
// }
// if(INRAmount >= 100){
//     note50 = Math.floor(AmountReturnVal3/50);
//     AmountReturnVal4 = Math.floor(AmountReturnVal3%50);
//     console.log("Number of 50 Notes : ",note50);
//     // console.log("Amount Return Val : ",AmountReturnVal4);
// }

// if(INRAmount >= 100){
//     note10 = Math.floor(AmountReturnVal4/10);
//     AmountReturnVal5 = Math.floor(AmountReturnVal4%10);
//     console.log("Number of 10 Notes : ",note10);
//     // console.log("Amount Return Val : ",AmountReturnVal5);
// }

// console.log('last INR value is : ', AmountReturnVal5)







//---- Tornary Operator ? : ---- Eska use ham ? or : lagakar karte hai ye bhi condition hi set karta hai ye operator condition set karne ka sabse short tarika hai.
//Syntax --- condition ? true par run : false par run 
//Matlab ye hai ki ham pahale condition lagaynge or fir ?operator lagynge to agar condition true hoti hai to ?operator ke bad ka code run hoga or agar condition false hoti hai to :colmn ke bad ka code run hoga.

// //Exmaple --- 
// 10>5 ? console.log('Yas') : console.log('No');//Yas
// //yaha par ham chanck kar rhe hai ki 10 bada hai 5 se to true huaa to Yes print hoga nhi to No print hoga.To kuchh es tarike se ye kam karta hai samjhe.

// //Example 2 --- 
// let a = 'Aadivasi';//Aadivasi ka matlab hai jangali ensan;
// a === 'Aadivasi' ? console.log('HoHaHoHoHaHo') : console.log('Hello Nice to meet you');//HoHaHoHoHaHo

// console.log(1<0?'Yas':'No');//No //- yaha par ham short me conditoin use kar rhe hai.



//---- Nexted Turnary Operator ---- 
// let a = 0;
// console.log(a>0 ? 'Positive' : a<0 ? 'Nigative' : 'zero');//zero
//Dekho ye 2 part me ok --- sabse pahale chack hoga a > 0 agar ye false hota hai to :colen me bad ki value chalegi - To yaha par false ho jata hai ok -- Ab Jaise hi :colen ke aage code bada to usko ak or ?operator dikha jaha ak or conditon chack ho rhi hai -- ab agar ye condition bhi false hoti hai to eske bad jo :colen laga hai vo chalega - To yaha par ye bhi false ho jati hai to ab code jayga las :colen ke pas or use print kar dega. //zero. simple ab positive or nigative to chack kar hi sakte hai apne se ----




// // ---- SWITCH ---- 
// //ye bhi conditon ke liye hi use hota hai - eske andar ham case: ka use karte hai condition chack karne ke liye.

// //Example -- 
// let day = 1;
// //switch ke andar ham conditin nhi de sakte hai ham bas value ko mach kar sakte hai bas or kuchh nhi kar sakte hai.

// switch(day){//yaha par jo variable hai vahi pass karna hoga.
//     case 1: console.log('Sunday'); 
//     break

//     case 2: console.log('Monday'); 
//     break

//     case 3: console.log('Tuesday'); 
//     break   

//     default : console.log('Kuchh nhi hai!');
// }//Sunday

// //ab yaha par Sunday kprint hoga lekin kyu kaise or ham break kyu laga rhe hai ? --- 
// //Dekho sabse pahale day pairamiter me day ki value 1 aaygi ok uske bad bari bari se jitne case hai sabse use match karaya jayga jisase mach hogi vo case run ho jayga or apni value ko print kar dega. koe case nhi mach hoga to default vali value print hogi.
// //Ab break kyu laga hai agar ham break nhi lagate hai -- To ye rukta nhi hai matlab - esne chack kiya ki kya day me jo value 1 hai vahi value 1st case me hai to 1st case true ho jayga or vo sunday ko print kar dega.Yani break ki vajaha se vo vapas chala jayga lekin agar break nhi laga hai to vo aage badh jayga or dusri value ko bhi run kar dega or agar vaha break laga hoga to vha se vapas aajayga or kahi break nhi laga hoga to sabko print kar dega.

// switch(day){
//     case 1: console.log('Sunday'); 
 
//     case 2: console.log('Monday'); 

//     case 3: console.log('Tuesday'); 
//     break

//     default : console.log('Kuchh nhi hai!');
// }
// //yaha par 3rd case par break laga hai upar nhi laga hai ab ye 3no value ko print karega;
// // Sunday
// // Monday
// // Tuesday
// //break nhi milta to sabko print karta .


// //Ab if else and swich me antar kya hai dekh lete hai -- Jo kam Switch kar sakta hai vo sara kam if else bhi kar sakta hai lekin jo jo kam if else kar sakta hai vo vo kam switch nhi kar sakta hai.


//AB AGAR HAM CODITOIN LAGAY KI CHAHE VALUE HAM 1 DE YA 2 YA 3 DE HAME PRINT BAS SUNDAY HI KARNA HAI MATLAB HAME USER 1,2,3 EN TINO ME SE KUCHH BHI DE HAME USE BAS SUNDAY DIKHNA HAI 4 DEGA TO KUCHH NHI DIKHANA HAI HAME BAS 1,2,3 SE MATLAB HAI.

// //Example --- 
// let x = 3;//yaha par ham ab 1 ,2 ,3 kuchh bhi de hame result me sirf Sunday hi milega.

// switch(x){
//     case 1:
//     case 2:
//     case 3: 
//         console.log('Sunday');
//         break;

//     case 4:
//     case 5:
//     case 6: 
//         console.log('Saterday');
//         break;

//     default: console.log('Kuchh nhi');
// }



// //ham esme ocnditoin nhi de sakte hai lekin condition dene ka bhi jugad hai hamare pass ---- 
// switch(true){//ham yaha par condition nhi de sakte hai lekn vase me to de hi sakte hai.
//     case 10>5 : 
//         console.log('Yas');
//         break
    
//     case 10<5 : 
//         console.log('No');
//         break

//     default : console.log('Kuchh nhi');
// }//Yas

// //agar dono conditoin true ho jaygi to ? --- to jo pahale true hogi vahi chalegi.




let num = 0.1 + 0.2;
num = Number(num.toFixed(1));

switch(num){
    case 0.3: console.log('true');
    break

    default: console.log('Namaste');
}//Namaste --- true aagya ab
//yaha par Namaste kyu print ho rha hai 0.1+0.2 karegen to 0.3 aana chaiye lekin nhi agar hame ye karte hai to value . me kuchh gadab aati hai.
console.log(0.1 + 0.2);//0.30000000000000004 // ye aati hai value esliye vo case ko ture nhi kiya hai.

//ab ese fix kaise kare ? -- dekhte hai kosis karke 
let f = 0.1 + 0.2;
console.log(f.toFixed(1));//0.3 //- ho gya aagya hamara 0.3 bas esi ko vaha par chipka denge. lekin ese hame number me bhi convert karna hoga.