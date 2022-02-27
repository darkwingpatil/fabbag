var subscrib=document.createElement("div");
subscrib.innerText="SUBSCRIBE NOW";
subscrib.style.color="#e5b95f";
subscrib.style.fontSize="16px";
subscrib.style.fontWeight="900";
subscrib.style.letterSpacing="-0.5px";
subscrib.style.padding="20px";
subscrib.style.fontFamily="poppins";
subscrib.style.cursor="pointer";
subscrib.addEventListener("click",function(){
    window.location.href="https://www.fabbag.com/products/subscribe?variant=39697212768302";
})


var image=document.createElement("img");
image.setAttribute("src","https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289");
image.style.height="85px";
image.style.width="200.56px";
image.style.padding="20px";
image.addEventListener("click",function(){
    window.location.href="./index.html";
})


var box=document.createElement("div");
box.setAttribute("id","box")
var i1=document.createElement("i");
i1.setAttribute("class","fas fa-search");
i1.style.cursor="pointer";
i1.addEventListener("click",function(){
    search()
})
box.append(i1)
var i2=document.createElement("i");
i2.setAttribute("class","far fa-heart");
i2.style.cursor="pointer";
i2.addEventListener("click",function(){
    window.location.href="https://www.fabbag.com/pages/wish-list";
})
box.append(i2)
var i3=document.createElement("i");
i3.setAttribute("class","far fa-user-circle");

// jenny js


var count5=1;
function nxtbut1()
{
    if(count5==8)
    {
        count5=1;
    }
    else
    {
        count5++;
    }
    display5()
}

function prvbut1()
{
    if(count5==1)
    {
        count5=8;
    }
    else
    {
        count5--;
    }
    display5()
}

function display5()
{
    var val=document.querySelectorAll("#allimg1 > div");
    console.log(val.length)

    for(var i=0;i<8;i++)
    {
        if(i+1==count5)
        {
            val[i].style.display="block";
            console.log(val[i])
        }
        else
        {
            val[i].style.display="none";
        }
    }
}

setInterval(nxtbut1,3000)





var count335=1;

function next116()
{
    console.log(count335)
    if(count335==6)
    {
        count335=1;
    }
    else
    {
        count335++;
    }
    if(count335!=""){

        display336()
    }
   

}

function display336()
{
    
    var x1=document.querySelectorAll("#parent1>div")[0];
    var x2=document.querySelectorAll("#parent1>div")[1];
    var x3=document.querySelectorAll("#parent1>div")[2];
    var x4=document.querySelectorAll("#parent1>div")[3];
    var x5=document.querySelectorAll("#parent1>div")[4];
    var x6=document.querySelectorAll("#parent1>div")[5];
    var x7=document.querySelectorAll("#parent1>div")[6];
    var x8=document.querySelectorAll("#parent1>div")[7];
    var x9=document.querySelectorAll("#parent1>div")[8];
    var x10=document.querySelectorAll("#parent1>div")[9];
    
    for(var i=0;i<6;i++)
    {


        if(count335==1)
        {
            x1.style.display="block";
            x2.style.display="block";
            x3.style.display="block";
            x4.style.display="block";
            x5.style.display="block";
            x6.style.display="none";
            x7.style.display="none";
            x8.style.display="none";
            x9.style.display="none";
            x10.style.display="none";
          
        }
        else if(count335==2)
        {
            x1.style.display="none";
            x2.style.display="block";
            x3.style.display="block";
            x4.style.display="block";
            x5.style.display="block";
            x6.style.display="block";
            x7.style.display="none";
            x8.style.display="none";
            x9.style.display="none";
            x10.style.display="none";
            
        }
        else if(count335==3)
        {
            x1.style.display="none";
            x2.style.display="none";
            x3.style.display="block";
            x4.style.display="block";
            x5.style.display="block";
            x6.style.display="block";
            x7.style.display="block";
            x8.style.display="none";
            x9.style.display="none";
            x10.style.display="none";
        }

        else if(count335==4)
        {
            x1.style.display="none";
            x2.style.display="none";
            x3.style.display="none";
            x4.style.display="block";
            x5.style.display="block";
            x6.style.display="block";
            x7.style.display="block";
            x8.style.display="block";
            x9.style.display="none";
            x10.style.display="none";
        }

        else if(count335==4)
        {
            x1.style.display="none";
            x2.style.display="none";
            x3.style.display="none";
            x4.style.display="none";
            x5.style.display="block";
            x6.style.display="block";
            x7.style.display="block";
            x8.style.display="block";
            x9.style.display="block";
            x10.style.display="none";
        }


        else if(count335==5)
        {
            x1.style.display="none";
            x2.style.display="none";
            x3.style.display="none";
            x4.style.display="none";
            x5.style.display="none";
            x6.style.display="block";
            x7.style.display="block";
            x8.style.display="block";
            x9.style.display="block";
            x10.style.display="block";
        }

        else if(count335==6)
        {
            x1.style.display="block";
            x2.style.display="none";
            x3.style.display="none";
            x4.style.display="none";
            x5.style.display="none";
            x6.style.display="none";
            x7.style.display="block";
            x8.style.display="block";
            x9.style.display="block";
            x10.style.display="block";
        }
    }
}

setInterval(next116,4000);













    
    
// harapriya

i3.style.cursor="pointer";
box.append(i3)
// i3.addEventListener("mouseover",function(){
//     dropdown()
// })
i3.addEventListener("dblclick",function(){
    dropdown1()
})
i3.addEventListener("click",function(){
    dropdown2()
})
    // harapriya
    
// function dropdown(){
//     document.getElementById("stcon").style.display="block"
// }
function dropdown1(){
    document.getElementById("stcon").style.display="block"
}
function dropdown2(){
    document.getElementById("stcon").style.display="none"
}
// harapriya

var i4=document.createElement("i");
i4.setAttribute("class","fas fa-shopping-cart");
box.append(i4)
i4.style.cursor="pointer";
i4.addEventListener("click",function(){
    // addtocart111()
    document.getElementById("allcartdiv").style.display="block";
})

document.getElementById("navbar").append(subscrib,image,box)



document.getElementById("btn1").addEventListener("click",function(){
    nxtbut();
})

document.getElementById("btn2").addEventListener("click",function(){
    prvbut();
})

var count=1;
function nxtbut()
{
    if(count==4)
    {
        count=1;
    }
    else
    {
        count++;
    }
    display()
}

function prvbut()
{
    if(count==1)
    {
        count=4;
    }
    else
    {
        count--;
    }
    display()
}

function display()
{
    var val=document.querySelectorAll("#allimg > div");
    //console.log(val.length)

    for(var i=0;i<val.length;i++)
    {
        if(i+1==count)
        {
            val[i].style.display="block";
            //console.log(val[i])
        }
        else
        {
            val[i].style.display="none";
        }
    }
}

setInterval(nxtbut,2000)


//creating grid for conatiner
var obj=[
    {imge:"https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-1_2048x.gif?v=1643868533",
    txt:"Teen Teen Ceremonial Makeup 8 Color Eyeshadow Kit of your choice!",name:"The Colour Me Cupid February Fab Bag"},
    {imge:"https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_2048x.gif?v=1644038367",
    txt:"Teen Trendz 5 in 1 Matte Me Lipstick of your choice!*",name:"The Colour Me Cupid February Fab Bag"},
    {imge:"https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-3_e2e96c00-a738-495f-8fc2-9f7731a87428_2048x.png?v=1644206990",
    txt:"Coco Soul Nourishing Body Lotion",name:"The Colour Me Cupid February Fab Bag"},
    {imge:"https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-4_f8878074-f488-4f6b-848d-898f1f848d2d_2048x.png?v=1644395327",
    txt:"The Soap Company India Saffron Soothing Sorbet",name:"The Colour Me Cupid February Fab Bag"},

]
console.log(obj)
obj.map(function(ele,ind,arr){
    var conts=document.createElement("div");
    var image=document.createElement("img");
    image.setAttribute("src",ele.imge);
    image.setAttribute("class","a2");
    image.addEventListener("click",function(){
        addtocart(ele.name)
    })
    var tex=document.createElement("p");
    tex.innerText=ele.txt;
    conts.append(image,tex);
    document.getElementById("istconatiner").append(conts)
})

var btn11=document.createElement("button");
btn11.setAttribute("id","btn11");
btn11.setAttribute("class","fas fa-less-than")
btn11.addEventListener("click",function(){
    next11();
})
var btn22=document.createElement("button");
btn22.setAttribute("id","btn22");
btn22.setAttribute("class","fas fa-greater-than")
btn22.addEventListener("click",function(){
    prev11()
})
document.getElementById("istconatiner").append(btn11,btn22)

function search()
{
    document.getElementById("bigersearch").style.display="block";
    document.getElementById("navbar").style.display="none";
    local();
}

document.getElementById("toclose").addEventListener("click",function(){
document.getElementById("bigersearch").style.display="none";
document.getElementById("navbar").style.display="flex";})


var count1=1;

function next11()
{
    if(count1==1)
    {
        count1=4;
    }
    count1=count1-3;
    console.log(count1)
    display1()
}

function prev11()
{
    if(count1==4)
    {
        count1=1;
    }
    count1=count1+3;
    console.log(count1)
    display1()
}

function display1()
{
    var x1=document.querySelectorAll("#istconatiner>div")[0];
    var x2=document.querySelectorAll("#istconatiner>div")[3];
    console.log(x1)
    console.log(x2)

    for(var i=0;i<1;i++)
    {
        if(count1==4)
        {
            x1.style.display="none";
            x2.style.display="block";
        }
        else if(count1==1)
        {
            x2.style.display="none";
            x1.style.display="block";
        }
    }
}

// setInterval(next11,3000);
// setInterval(prev11,6000)

var data = [
    {
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal--3.png?v=1641707966",
        name:"Jan'22 Beauty Resolution Fab Bag",
        
        price:"from Rs.599.00",
        strikedOffPrice:"",
        
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-3.gif?v=1638191014",
        name:"Dec'21 The X-Must Haves Fab Bag",
        strikedOffPrice:"",
        price:"from Rs.599.00",
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner--Skincare-Reveal-4_1.gif?v=1636696484",
        name:"Nov'21 The Diva-Li-coius Fab Bag",
        
        strikedOffPrice:"Rs 1797.00",
        price:"from Rs.599.00",
        
    },
    {
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner--Skincare-Reveal-4.png?v=1633952538",
        name:"Oct'21 The Re-Treat Fab Bag",
        strikedOffPrice:"Rs 1797.00",
        price:"from Rs.599.00",
        
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner-Skincare-Reveal-4-5_2faddde5-aa4f-4393-a694-5596034b6fed.png?v=1631337975",
        name:"Sep'21 The She-9-lgans Fab Bag",
        strikedOffPrice:"Rs 1797.00",
        price:"from Rs.599.00",
        
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner-Skincare--Reveal-Bous-Product.gif?v=1629009087",
        name:"Aug'21 The Lash & Line Fab Bag",
        strikedOffPrice:"Rs 1797.00",
        price:"from Rs.599.00",
        
    }
];

 data.map(function(elem){
    var div111=document.createElement("div");

    var photo=document.createElement("img");
    photo.setAttribute("src",elem.imgUrl);
    photo.setAttribute("class","pick");


    var name= document.createElement("p");
    name.innerText=elem.name;

    var innerdiv111=document.createElement("p");
    var paisa= document.createElement("p");
    paisa.innerText=elem.price; 
    var strikepaisa= document.createElement("p");
    strikepaisa.innerText=elem.strikedOffPrice;
    strikepaisa.style.textDecoration="line-through"
    innerdiv111.append(paisa,strikepaisa);
    innerdiv111.setAttribute("class","pricediv")
    div111.append(photo,name,innerdiv111);
    div111.addEventListener("click",function(){
        addtocart(elem.name)
    })
    div111.style.paddingBottom="150px";
    document.getElementById("bagscont").append(div111);
 })
 
 var btn31=document.createElement("button");
var i1=document.createElement("i");
i1.setAttribute("class","fas fa-less-than");
btn31.append(i1);
btn31.setAttribute("id","button5")
btn31.addEventListener("click",function(){
    prev22();
})
var btn32=document.createElement("button5");
btn32.setAttribute("id","button6")
btn32.addEventListener("click",function(){
    next22()
})
var i2=document.createElement("i");
i2.setAttribute("class","fas fa-greater-than");
btn32.append(i2);
document.querySelector("#bagscont").append(btn31,btn32);



var count12=1;

function prev22(){
    if(count12==1)
    {
        count12=6;
    }
    else if(count12==6)
    {
        count12=5;
    }
    else if(count12==5)
    {
        count12=count12-4;
    }
    console.log(count12);
    display2();
}

function next22(){
    if(count12==6)
    {
        count12=1;
    }
    else if(count12==1)
    {
        count12=5;
    }
    else if(count12==5)
    {
        count12=count12+1;
    }
    display2();
    console.log(count12);
}

function display2()
{
    var xx0=document.querySelectorAll("#bagscont>div")[0];
    console.log(xx1);
    var xx1=document.querySelectorAll("#bagscont>div")[1];
    var xx5=document.querySelectorAll("#bagscont>div")[4];
    var xx6=document.querySelectorAll("#bagscont>div")[5];


    for(var i=0;i<3;i++)
    {
        if(count12==1)
        {
            xx0.style.display="block";
            xx1.style.display="block";
            xx5.style.display="none";
            xx6.style.display="none";
        }
        else if(count12==5)
        {
            xx0.style.display="none";
            xx1.style.display="block";
            xx5.style.display="block";
            xx6.style.display="none";
        }
        else if(count12==6)
        {
            xx0.style.display="none";
            xx1.style.display="none";
            xx5.style.display="block";
            xx6.style.display="block";
        }
    }


}

document.getElementById("seaa").addEventListener("click",function(){
    check();
});


function check()
{
    var xxx=document.getElementById("searchbar").value;
    console.log(xxx=="");

    if(xxx!="")
    {
        document.getElementById("filteredres").style.display="block";
    }
    else
    {
        document.getElementById("filteredres").style.display="none";
    }
    var latestdat=data1.filter(function(ele,ind,arr){
        return ele.name.includes(xxx);
    })

    console.log(latestdat)

    //displayfil(latestdat)

    if(xxx!="" && latestdat.length<6)
    {
       displayfil(latestdat)
    }

}



function displayfil(latestdat)
{
    document.getElementById("filteredres").innerHTML="";
    latestdat.map(function(elem,ind,arr){
        var filbox=document.createElement("div");
        filbox.style.display="flex";
        filbox.style.justifyContent="space-between";
        filbox.style.cursor="pointer";
        filbox.setAttribute("class","filbox")
        filbox.addEventListener("click",function(){
            openpdp(elem)
        })
        var photo=document.createElement("img");
        photo.setAttribute("src",elem.imgUrl);
        photo.style.width="35px";
        photo.style.height="20px";
        photo.style.padding="8px";
        var name= document.createElement("p");
        name.innerText=elem.name;
        name.style.fontSize="12px";
        var innerdiv111=document.createElement("div");
        innerdiv111.style.display="flex";
        innerdiv111.append(photo,name)
        var innerdiv222=document.createElement("div");
        innerdiv222.style.display="flex";
        var paisa= document.createElement("p");
        paisa.innerText=elem.price; 
        paisa.style.fontSize="12px";
        innerdiv222.append(paisa)
        filbox.append(innerdiv111,innerdiv222);
        document.getElementById("filteredres").append(filbox)

    })
}

var pdparr=JSON.parse(localStorage.getItem("mypdp"))||[];
function openpdp(ele)
{
    // if(ele.name=="Jan'22 Beauty Resolution Fab Bag")
    // {
    //   // window.open("https://www.fabbag.com/collections/previous-bags/products/the-beauty-resolution-january-fab-bag?_pos=1&_sid=c70ed5799&_ss=r")
    //   window.location.href="https://www.fabbag.com/collections/previous-bags/products/the-beauty-resolution-january-fab-bag?_pos=1&_sid=c70ed5799&_ss=r"
    // }
    // else if(ele.name=="Dec'21 The X-Must Haves Fab Bag")
    // {
    //     window.location.href="https://www.fabbag.com/collections/previous-bags/products/dec21-the-x-must-haves-fab-bag?_pos=1&_sid=2fa56a3cb&_ss=r"
    // }
    // else if(ele.name=="Nov'21 The Diva-Li-Coius Fab Bag")
    // {
    //     window.location.href="https://www.fabbag.com/collections/previous-bags/products/nov21-the-diva-li-cious-fab-bag?_pos=1&_sid=3bd1ccf08&_ss=r"
    // }
    // else if(ele.name=="Oct'21 The Re-Treat Fab Bag")
    // {
    //     window.location.href="https://www.fabbag.com/collections/previous-bags/products/oct21-the-re-treat-fab-bag?_pos=1&_sid=a9cec77b8&_ss=r";
    // }
    // else if(ele.name=="Sep'21 The She-9-lgans Fab Bag")
    // {
    //     window.location.href="https://www.fabbag.com/collections/previous-bags/products/the-she-9-igans-september-fab-bag?_pos=1&_sid=28b7a5ebb&_ss=r";
    // }
    // else if(ele.name=="Aug'21 The Lash & Line Fab Bag")
    // {
    //     window.location.href="https://www.fabbag.com/collections/previous-bags/products/the-lash-line-august-fab-bag?_pos=1&_sid=2ffda6b52&_ss=r&variant=39457528152110";
    // }
    // else if(ele.name=="The Colour Me Cupid February Fab Bag")
    // {
    //     window.location.href="https://www.fabbag.com/products/subscribe?_pos=1&_sid=5d0648e9a&_ss=r&variant=39697212768302";
    // }
    pdparr.push(ele);
    localStorage.setItem("mypdp",JSON.stringify(pdparr));
    window.location.href="./searchpdp.html";
}
// var cartarr=JSON.parse(localStorage.getItem("thismycart"))||[];
var cartarr=JSON.parse(localStorage.getItem("thismycart"))||[];
function addtocart(ele)
{
    //console.log(ele);
    var x=ele;
    // var output22=data1.filter(function(ele,ind,arr){
    //     return ele.name.includes(x);
    // })
    var output22=0;
    for(var i=0;i<data1.length;i++)
    {
        if(x==data1[i].name)
        {
            output22=data1[i];
        }
    }
   // console.log(output22);

     for(j=0;j<cartarr.length;j++)
     {
        if(cartarr[j].name==output22.name)
        {
            output22.qty++;
        }
     }
     if(output22.qty==1)
     {
        cartarr.push(output22);
     }
    localStorage.setItem("thismycart",JSON.stringify(cartarr));
    displaycart(cartarr)
}

function displaycart()
{
    document.getElementById("addingtocart").innerHTML="";
    cartarr.map(function(ele,ind,arr){
        var box33=document.createElement("div");
        var box331=document.createElement("div");
        var img33=document.createElement("img");
        img33.setAttribute("src",ele.imgUrl);
        img33.style.width="55px";
        img33.style.height="35px";
        img33.style.padding="8px";
        box331.append(img33);
        var box332=document.createElement("div");
        var name= document.createElement("p");
        name.innerText=ele.name;
        name.style.fontSize="15px";
        var box333=document.createElement("div");
        var qunty=document.createElement("p");
        qunty.innerText="Qty:"+ele.qty;
        qunty.style.fontSize="15px";
        var price=document.createElement("p");
        price.innerText="Rs"+ele.price;
        price.style.fontSize="15px";
        box333.append(qunty,price);
        box333.style.display="flex";
        box332.append(name,box333);
        box33.append(box331,box332)
        box33.style.display="flex";
        document.getElementById("addingtocart").append(box33);
        //console.log("hello")

        mycarttotal11(ele)

    })
}

function closecartbar(){
    document.getElementById("allcartdiv").style.display="none";
}

function cartpageopn()
{
    window.location.href="./viewcart.html";
}
//creating a local storage of all products

function mycarttotal11()
{
    var totalval1=cartarr.reduce(function(abs,ele,ind,arr){
        return abs+(cartarr[ind].price * cartarr[ind].qty);
    },0)
 //   console.log(totalval1)
    document.getElementById("totalcartval").innerHTML="Rs."+totalval1;
}

var data1 = [
    {
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal--3.png?v=1641707966",
        name:"Jan'22 Beauty Resolution Fab Bag",
        
        price:599.00,
        strikedOffPrice:"",
        qty:1,
        
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-3.gif?v=1638191014",
        name:"Dec'21 The X-Must Haves Fab Bag",
        strikedOffPrice:"",
        price:599.00,
        qty:1,
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner--Skincare-Reveal-4_1.gif?v=1636696484",
        name:"Nov'21 The Diva-Li-Coius Fab Bag",
        
        strikedOffPrice:"Rs 1797.00",
        price:599.00,
        qty:1,
        
    },
    {
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner--Skincare-Reveal-4.png?v=1633952538",
        name:"Oct'21 The Re-Treat Fab Bag",
        strikedOffPrice:"Rs 1797.00",
        price:599.00,
        qty:1,
        
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner-Skincare-Reveal-4-5_2faddde5-aa4f-4393-a694-5596034b6fed.png?v=1631337975",
        name:"Sep'21 The She-9-lgans Fab Bag",
        strikedOffPrice:"Rs 1797.00",
        price:599.00,
        qty:1,
        
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner-Skincare--Reveal-Bous-Product.gif?v=1629009087",
        name:"Aug'21 The Lash & Line Fab Bag",
        strikedOffPrice:"Rs 1797.00",
        price:599.00,
        qty:1,
        
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-2.gif?v=1644395072",
        name:"The Colour Me Cupid February Fab Bag",
        strikedOffPrice:"Rs. 599.00",
        price:599.00,
        qty:1,
        
    }
];
function local()
{
 localStorage.setItem("productlist",JSON.stringify(data1));
};





