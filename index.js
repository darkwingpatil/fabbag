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
