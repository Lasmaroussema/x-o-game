let r=0;
while(r!=1&&r!=2)
{
r=(Math.round(Math.random()*10));
}
let win=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
//X commence
if(r==1)
{
   let h=0;
   let arx=[];
   let aro=[];
   document.querySelector(".x").style.display="block"; 
   
   document.querySelectorAll(".case").forEach(function(e)
   {
   
    e.onclick=function()
    {
       
        if(document.querySelector(".resultat").innerHTML!="")
        {
            return;
        }


        if(e.innerHTML==="x"||e.innerHTML=="o")
        {
            return;
        }
        if(h%2==0)
   {
    e.appendChild(document.createTextNode("x"));
    e.style.color="red";
    document.querySelector(".x").style.display="none"; 
    document.querySelector(".o").style.display="block"; 
    h++;
    arx.push(eval(e.getAttribute("id")));
    console.log(arx);
    console.log("h = "+h);
    if((arx.includes(1)&&arx.includes(2)&&arx.includes(3))||(arx.includes(4)&&arx.includes(5)&&arx.includes(6))||(arx.includes(7)&&arx.includes(8)&&arx.includes(9))||(arx.includes(1)&&arx.includes(4)&&arx.includes(7))||(arx.includes(2)&&arx.includes(5)&&arx.includes(8))||(arx.includes(9)&&arx.includes(6)&&arx.includes(3))||(arx.includes(7)&&arx.includes(5)&&arx.includes(3))||(arx.includes(1)&&arx.includes(5)&&arx.includes(9)))
    {
        document.querySelector(".resultat").appendChild(document.createTextNode("X wins"));
        document.querySelector(".player").style.display="none"; 
        document.querySelector(".joue").style.display="none";
        document.querySelector(".restart").style.display="block";
        return;
    }
    if(h==9)
{
   document.querySelector(".resultat").appendChild(document.createTextNode("Draw"));
   document.querySelector(".player").style.display="none"; 
    document.querySelector(".joue").style.display="none";
    document.querySelector(".restart").style.display="block";
}  
    return;
   }
    if(h%2==1)
   {
    e.appendChild(document.createTextNode("o"));
    e.style.color="blue";
    document.querySelector(".x").style.display="block"; 
    document.querySelector(".o").style.display="none";
    h++;
    console.log("h = "+h);
    aro.push(eval(e.getAttribute("id")));
    if((aro.includes(1)&&aro.includes(2)&&aro.includes(3))||(aro.includes(4)&&aro.includes(5)&&aro.includes(6))||(aro.includes(7)&&aro.includes(8)&&aro.includes(9))||(aro.includes(1)&&aro.includes(4)&&aro.includes(7))||(aro.includes(2)&&aro.includes(5)&&aro.includes(8))||(aro.includes(9)&&aro.includes(6)&&aro.includes(3))||(aro.includes(7)&&aro.includes(5)&&aro.includes(3))||(aro.includes(1)&&aro.includes(5)&&aro.includes(9)))
    {
        document.querySelector(".resultat").appendChild(document.createTextNode("O wins"));
        document.querySelector(".player").style.display="none"; 
    document.querySelector(".joue").style.display="none";
    document.querySelector(".restart").style.display="block";
        return;
    }
    if(h==9)
{
   document.querySelector(".resultat").appendChild(document.createTextNode("Draw"));
   document.querySelector(".player").style.display="none"; 
    document.querySelector(".joue").style.display="none";
    document.querySelector(".restart").style.display="block";
}  
    return;  
}

    
    
       

    }
}
   
   )}




















//O commence
if(r==2)
{
    let h=0;
    let owins;
    let xwins;
    let arx=[];
    let aro=[];
    document.querySelector(".o").style.display="block"; 
    
    document.querySelectorAll(".case").forEach(function(e)
    {
     e.onclick=function()
     {
        if(document.querySelector(".resultat").innerHTML!="")
        {
            return;
        }

         if(e.innerHTML==="x"||e.innerHTML=="o")
         {
             return;
         }
         if(h%2==1)
    {
     e.appendChild(document.createTextNode("x"));
     e.style.color="red";
     document.querySelector(".x").style.display="none"; 
    document.querySelector(".o").style.display="block"; 
     h++;
     arx.push(eval(e.getAttribute("id")));
     if((arx.includes(1)&&arx.includes(2)&&arx.includes(3))||(arx.includes(4)&&arx.includes(5)&&arx.includes(6))||(arx.includes(7)&&arx.includes(8)&&arx.includes(9))||(arx.includes(1)&&arx.includes(4)&&arx.includes(7))||(arx.includes(2)&&arx.includes(5)&&arx.includes(8))||(arx.includes(9)&&arx.includes(6)&&arx.includes(3))||(arx.includes(7)&&arx.includes(5)&&arx.includes(3))||(arx.includes(1)&&arx.includes(5)&&arx.includes(9)))
     {
         document.querySelector(".resultat").appendChild(document.createTextNode("X wins"));
         document.querySelector(".player").style.display="none"; 
         document.querySelector(".joue").style.display="none";
         document.querySelector(".restart").style.display="block";
         return;
     }
     if(h==9)
{
   document.querySelector(".resultat").appendChild(document.createTextNode("Draw"));
   document.querySelector(".player").style.display="none"; 
    document.querySelector(".joue").style.display="none";
    document.querySelector(".restart").style.display="block";
}  
     return;
    }
     if(h%2==0)
    {
     e.appendChild(document.createTextNode("o"));
     e.style.color="blue";
     document.querySelector(".x").style.display="block"; 
    document.querySelector(".o").style.display="none"; 
     h++;
     aro.push(eval(e.getAttribute("id")));
     if((aro.includes(1)&&aro.includes(2)&&aro.includes(3))||(aro.includes(4)&&aro.includes(5)&&aro.includes(6))||(aro.includes(7)&&aro.includes(8)&&aro.includes(9))||(aro.includes(1)&&aro.includes(4)&&aro.includes(7))||(aro.includes(2)&&aro.includes(5)&&aro.includes(8))||(aro.includes(9)&&aro.includes(6)&&aro.includes(3))||(aro.includes(7)&&aro.includes(5)&&aro.includes(3))||(aro.includes(1)&&aro.includes(5)&&aro.includes(9)))
     {
         document.querySelector(".resultat").appendChild(document.createTextNode("O wins"));
         document.querySelector(".player").style.display="none"; 
         document.querySelector(".joue").style.display="none";
         document.querySelector(".restart").style.display="block";
         return;
     }
     if(h==9)
{
   document.querySelector(".resultat").appendChild(document.createTextNode("Draw"));
   document.querySelector(".player").style.display="none"; 
    document.querySelector(".joue").style.display="none";
    document.querySelector(".restart").style.display="block";
}  
     return;  
 }
     }
 }
    
    )}


    document.querySelector(".restart").onclick=function()
    {
        window.location.reload();
    }