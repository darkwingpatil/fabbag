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




var count1=1;

function next11()
{
    if(count1==1)
    {
        count1=4;
    }
    else
    {
     count1=count1-3;
    }
    console.log(count1)
    display1()
}

function prev11()
{
    if(count1==4)
    {
        count1=1;
    }
    else
    {
     count1=count1+3;
    }
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



