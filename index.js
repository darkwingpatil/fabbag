var subscrib=document.createElement("div");
subscrib.innerText="SUBSCRIBE NOW";
subscrib.style.color="#e5b95f";
subscrib.style.fontSize="12px";
subscrib.style.fontWeight="900"
subscrib.style.letterSpacing="-0.5px"
subscrib.style.fontFamily="poppins";
subscrib.addEventListener("click",function(){
    subscribe()
})


var image=document.createElement("img");
image.setAttribute("src","https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289");
image.style.height="30px";
image.style.width="120.56px";


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
i2.addEventListener("click",function(){
    wishlist()
})
box.append(i2)
var i3=document.createElement("i");
i3.setAttribute("class","far fa-user-circle");
box.append(i3)
i3.addEventListener("mouseover",function(){
    dropdown()
})
var i4=document.createElement("i");
i4.setAttribute("class","fas fa-shopping-cart");
box.append(i4)
i4.addEventListener("click",function(){
    addtocart()
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
    console.log(val.length)

    for(var i=0;i<val.length;i++)
    {
        if(i+1==count)
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

setInterval(nxtbut,4000)


//creating grid for conatiner
var obj=[
    {imge:"https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-1_2048x.gif?v=1643868533",
    txt:"Teen Teen Ceremonial Makeup 8 Color Eyeshadow Kit of your choice!"},
    {imge:"https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_2048x.gif?v=1644038367",
    txt:"Teen Trendz 5 in 1 Matte Me Lipstick of your choice!*"},
    {imge:"https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-3_e2e96c00-a738-495f-8fc2-9f7731a87428_2048x.png?v=1644206990",
    txt:"Coco Soul Nourishing Body Lotion"},
    {imge:"https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-4_f8878074-f488-4f6b-848d-898f1f848d2d_2048x.png?v=1644395327",
    txt:"The Soap Company India Saffron Soothing Sorbet"},

]
console.log(obj)
obj.map(function(ele,ind,arr){
    var conts=document.createElement("div");
    var image=document.createElement("img");
    image.setAttribute("src",ele.imge);
    image.setAttribute("class","a2");
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



//creating a local storage of all products



var data1 = [
    {
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal--3.png?v=1641707966",
        name:"Jan'22 Beauty Resolution Fab Bag",
        
        price:"from Rs.599.00",
        strikedOffPrice:"",
        qty:1,
        
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-3.gif?v=1638191014",
        name:"Dec'21 The X-Must Haves Fab Bag",
        strikedOffPrice:"",
        price:"from Rs.599.00",
        qty:1,
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner--Skincare-Reveal-4_1.gif?v=1636696484",
        name:"Nov'21 The Diva-Li-coius Fab Bag",
        
        strikedOffPrice:"Rs 1797.00",
        price:"from Rs.599.00",
        qty:1,
        
    },
    {
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner--Skincare-Reveal-4.png?v=1633952538",
        name:"Oct'21 The Re-Treat Fab Bag",
        strikedOffPrice:"Rs 1797.00",
        price:"from Rs.599.00",
        qty:1,
        
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner-Skincare-Reveal-4-5_2faddde5-aa4f-4393-a694-5596034b6fed.png?v=1631337975",
        name:"Sep'21 The She-9-lgans Fab Bag",
        strikedOffPrice:"Rs 1797.00",
        price:"from Rs.599.00",
        qty:1,
        
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner-Skincare--Reveal-Bous-Product.gif?v=1629009087",
        name:"Aug'21 The Lash & Line Fab Bag",
        strikedOffPrice:"Rs 1797.00",
        price:"from Rs.599.00",
        qty:1,
        
    },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-2.gif?v=1644395072",
        name:"The Colour Me Cupid February Fab Bag",
        strikedOffPrice:"Rs. 599.00",
        price:"from Rs.599.00",
        qty:1,
        
    }
];
function local()
{
 localStorage.setItem("productlist",JSON.stringify(data1));
};





