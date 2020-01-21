
let country=document.querySelector(".countries");
let bd1=document.querySelector(".states_for_bd");
let Dhk1=document.querySelector(".states_for_Dhaka");
let Mym=document.querySelector(".states_for_Mymensingh");
let Ctg=document.querySelector(".states_for_Chittagong");
let Khl=document.querySelector(".states_for_Khulna");
let bari=document.querySelector(".states_for_Barisal");
let Syl=document.querySelector(".states_for_sylhet");
 
    
country.addEventListener("change",()=>{
    let c=document.querySelector("#select_opt").value;
    if(c=="bd"){
        bd1.setAttribute("style","display:block;display:grid;justify-content:center;");
    }   
});

bd1.addEventListener("change",()=>{
    let d=document.querySelector("#Division").value;
    if(d=="dhk"){
        Dhk1.setAttribute("style","display:block;display:grid;justify-content:center;");
    }else if(d=="mym"){
        Mym.setAttribute("style","display:block;display:grid;justify-content:center;");
    }else if(d=="ctg"){
        Ctg.setAttribute("style","display:block;display:grid;justify-content:center;");
    }else if(d=="khl"){
        Khl.setAttribute("style","display:block;display:grid;justify-content:center;");
    }else if(d=="bar"){
        bari.setAttribute("style","display:block;display:grid;justify-content:center;");
    }else if(d=="syl"){
        Syl.setAttribute("style","display:block;display:grid;justify-content:center;");
    }
        
});































