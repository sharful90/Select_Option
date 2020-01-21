let country = document.querySelector(".countries");
let bd1 = document.querySelector(".states_for_bd");
let Dhk1 = document.querySelector(".states_for_Dhaka");
let Mym = document.querySelector(".states_for_Mymensingh");
let Ctg = document.querySelector(".states_for_Chittagong");
let Khl = document.querySelector(".states_for_Khulna");
let bari = document.querySelector(".states_for_Barisal");
let Syl = document.querySelector(".states_for_sylhet");

country.addEventListener("change", () => {
    let c = document.querySelector("#select_opt").value;
    if (c == "nn") {
        let non = `display:none`;
        bd1.style = non;
        Dhk1.style = non;
        Mym.style = non;
        Ctg.style = non;
        Khl.style = non;
        bari.style = non;
        Syl.style = non;
        // bd1.setAttribute("style","display:none;");
        // Dhk1.setAttribute("style","display:none;");
        // Mym.setAttribute("style","display:none;");
        // Ctg.setAttribute("style","display:none;");
        // Khl.setAttribute("style","display:none;");
        // bari.setAttribute("style","display:none;");
        // Syl.setAttribute("style","display:none;");
    } else if (c == "bd") {
        bd1.setAttribute("style", "display:grid;justify-content:center;");
    } else if (c == "Us") {
        document.querySelector(".text h3").innerHTML="United states Is not Fund!";
    }else if(c=="in"){
        document.querySelector(".text h3").innerHTML="India Is not Fund!";
    }else if(c=="pk"){
        document.querySelector(".text h3").innerHTML="pakistan Is not Fund!";      
        // let text = document.createElement("h3");
        // let st = `text-align:center;color:red;font-family:arial;margin-top:18px;`;
        // text.style = st;
        // text.insertAdjacentHTML('beforeend', 'United states Is not Fund!');
        // document.querySelector(".reg_form").appendChild(text);
    }
});

bd1.addEventListener("change", () => {

    let d = document.querySelector("#Division").value;
    if (d == "dhk") {
        Dhk1.setAttribute("style", "display:grid;justify-content:center;");
    } else if (d == "mym") {
        Mym.setAttribute("style", "display:grid;justify-content:center;");
    } else if (d == "ctg") {
        Ctg.setAttribute("style", "display:grid;justify-content:center;");
    } else if (d == "khl") {
        Khl.setAttribute("style", "display:grid;justify-content:center;");
    } else if (d == "bar") {
        bari.setAttribute("style", "display:grid;justify-content:center;");
    } else if (d == "syl") {
        Syl.setAttribute("style", "display:grid;justify-content:center;");
    }

});