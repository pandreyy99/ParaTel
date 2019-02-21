var nr = 0;

window.onload = function(){
    container = document.getElementsByClassName("containerTelefoane");
    
    nav = document.createElement("nav");
    nav.classList.add("navbar");
    nav.classList.add("navbar-inverse");
    nav.style.background = "#35424a";
    
    document.body.insertBefore(nav, document.body.firstChild);
    var div = document.createElement("div");
    div.classList.add("container-fluid");
    nav.appendChild(div);
    var div2 = document.createElement("div");
    div2.classList.add("navbar-header");
    div.appendChild(div2);
    var button =  document.createElement("button");
    button.type = "button";
    button.classList.add("navbar-toggle");
    button.dataset.toggle = "collapse";
    button.dataset.target = "#myNavbar";
    div2.appendChild(button);
    for(var i = 0 ; i < 3 ; i++){
        var span = document.createElement("span");
        span.classList.add("icon-bar");
        button.appendChild(span);
    }
    var a = document.createElement("a");
    a.classList.add("navbar-brand");
    a.setAttribute("href" , "#");
    a.style.color = "white";
    a.appendChild(document.createTextNode("ParaTel Menu"));
    div2.appendChild(a);
    div2 = document.createElement("div");
    div2.classList.add("collapse");
    div2.classList.add("navbar-collapse");
    div2.id = "myNavbar";
    var ul = document.createElement("ul");
    ul.classList.add("nav");
    ul.classList.add("navbar-nav");
    div.appendChild(div2);
    div2.appendChild(ul);
    for(var i = 0 ; i < 3 ; i++){
        var li = document.createElement("li");
        if(i == 0){
            li.className = "current";
            a = document.createElement("a");
            a.setAttribute("href" , "index.html");
            a.appendChild(document.createTextNode("Home"));
            a.onmouseover = function(){
                this.style.color = "yellow";
            }
            a.onmouseout = function(){
                this.style.color = "#e8491d";
            }
            li.appendChild(a);
            ul.appendChild(li);
        }
        if(i == 1){
            li.className = "dropdown";
            ul.appendChild(li);
            a = document.createElement("a");
            a.classList.add("dropdown-toggle");
            a.dataset.toggle = "dropdown";
            a.setAttribute("href" , "#");
            a.appendChild(document.createTextNode("Gadget-uri"));
            li.appendChild(a);
            var dropdown = document.createElement("ul");
            dropdown.classList.add("dropdown-menu");
            li.appendChild(dropdown);
            for(var j = 0 ; j < 3 ; j++){
                var drpli = document.createElement("li");
                a = document.createElement("a");
                if(j == 0){
                    a.setAttribute("href" , "phones.html");
                    a.appendChild(document.createTextNode("Telefoane"));
                }
                if(j == 1){
                    a.setAttribute("href" , "laptop.html");
                    a.appendChild(document.createTextNode("Laptop-uri"));
                }
                if(j == 2){
                    a.setAttribute("href" , "pad.html");
                    a.appendChild(document.createTextNode("Tablete"));
                }
                drpli.appendChild(a);
                dropdown.appendChild(drpli); 
            }
        }
        if(i == 2){
            li.classList.add("contact");
            a = document.createElement("a");
            a.setAttribute("href" , "contacts.html");
            a.appendChild(document.createTextNode("Contact"));
            a.onmouseover = function(){
                this.style.color = "yellow";
            }
            a.onmouseout = function(){
                this.style.color = "dodgerblue";
            }
            li.appendChild(a);
            ul.appendChild(li);
        }
    }
    /**
        schimb cursor pe imagine
        */
    var img = document.querySelectorAll("img");
    for(var i = 0 ; i < img.length ; i++){
        var height = img[i].style.height;
        var width = img[i].style.width;
        img[i].onmouseover = function(){
            this.style.cursor = "zoom-in";
        }
        img[i].onclick = function(){
            this.style.height = "100%";
            this.style.width = "100%";
        }
        img[i].onmouseout = function(){
            this.style.height = height;
            this.style.width = width;
        }
    }
    
    
    /** 
        sort
        */
    var pretMin = document.createElement("input");
    pretMin.type = "range";
    pretMin.classList.add("custom-range");
    //pretMin.disabled = true;
    pretMin.defaultValue = 0;
    pretMin.min = "0";
    pretMin.max = "99999";
    
    var label = document.createTextNode("Pret min : ");
    var container = document.getElementsByClassName("filtre")[0];
    container.appendChild(label);
    label.parentNode.appendChild(pretMin);
    label = document.createTextNode("Pret max : ");
    var pretMax = document.createElement("input");
    pretMax.type = "range";
    pretMax.classList.add("custom-range");
    pretMax.disabled = true;
    pretMax.min = "0";
    pretMax.max = "100000";
    pretMax.value = pretMax.max;
    pretMax.onchange = function(){
        if(pretMax.value == pretMax.max)
            alert(pretMax.value);
    }
    container.appendChild(label);
    container.appendChild(pretMax);
    
    pretMin.onchange = function(){
        pretMax.disabled = false;
    }
    pretMax.onchange = function(){
        var min = parseInt(pretMin.value);
        var max = parseInt(pretMax.value);
        if(min >= max){
            pretMax.value = parseInt(pretMin.value) + 1 ;
        }
        //sterge();
        update(min,max);
    }
    
    /**
        input text
        */
    
    var input_text = document.createElement("input");
    input_text.type = "text";
    container.appendChild(input_text);
    var button = document.createElement("button");
    button.innerHTML = "Cauta";
    container.appendChild(button);
    button.onclick = function(){
        filtrare(input_text.value);
    }
    
    /**
        
    /**
        Filtrarea brand-check
        */

    div = document.createElement("div");
    div.id = "check";
    div.appendChild(document.createTextNode("Brand : "));
    for(var i = 0 ; i < 3 ; i++){
        var brand = document.createElement("input");
        var label = document.createElement("label");
        label.htmlFor = "label" + i + 1;
        brand.type = "checkbox";
        brand.className = "checkmark";
        if(i == 0){
            brand.name = "Samsung";
            brand.value = "Samsung";    
            label.appendChild(document.createTextNode("Samsung"));
        }
        else if(i == 1){
            brand.name = "Iphone";
            brand.value = "Iphone";
            label.appendChild(document.createTextNode("Iphone"));
        }
        else {
            brand.name = "HTC";
            brand.value = "HTC";
            label.appendChild(document.createTextNode("HTC"));
        }
        brand.addEventListener("click" , function(){
                verifica(this);
                var check = document.querySelectorAll("input[type=checkbox]");
                for(var i = 0 ; i < check.length ; i++){
                    if(check[i] == this){
                        filtrare(this.name);
                    }
                }
        });
        div.appendChild(brand);
        div.appendChild(label);
        container.appendChild(div);
    }
    /**
        select dupa pret cresc/descresc
        */
    var select = document.createElement("SELECT");
    select.id = "select"
    for(var i = 0 ; i < 3 ; i++){
        var option = document.createElement("option");
        if(i == 0)
            option.innerHTML = "";
        else if(i == 1)
            option.innerHTML = "crescator";
        else 
            option.innerHTML = "descrescator";
        select.add(option);
    }
    label = document.createElement("label");
    label.appendChild(document.createTextNode("Filtrati dupa pret :"));
    container.appendChild(label);
    container.appendChild(select);
    
    select.onchange = function(){
        console.log(select.options[select.selectedIndex]);
        sortare(select.selectedIndex);
    }
    
    /**
        radio button dupa culori
        */
    
    var radioDiv = document.createElement("DIV");
    radioDiv.classList.add("radio");
    container.appendChild(radioDiv);
    var brands = [];
    var culori = ["Negru" , "Alb" , "Purple" , "Albastru"];
    for(var j = 0 ; j < 4 ; j++){
        var radio = document.createElement("input");
        var denumire = document.querySelectorAll(".denumire");
        radio.type = "radio";
        radio.name = "culoare";
        radio.value = culori[j];
        container.appendChild(radio);        
        var label = document.createElement("label");
        label.className = ".radio"
        label.appendChild(document.createTextNode(culori[j]));
        container.appendChild(label);
        radio.onchange = function(){
            var cul = this.value;
            var brands = [];
            var culori = document.querySelectorAll(".culori");
            for(var i = 0 ; i < culori.length ; i++){
                var aux = culori[i].innerHTML;
                var culoare = aux.split("/");
                for(var j = 0 ; j < culoare.length ; j++){
                    if(cul == culoare[j]){
                        console.log(denumire[i].innerHTML)
                        brands[nr] = denumire[i].innerHTML;
                        nr += 1;
                    }
                }
            }
            filtruCulori(brands);
        }
    }
    setInterval(time , 30000);
    window.ondblclick = function(e){
        var x = e.clientX;
        console.log(x);
        var y = e.clientY;
        console.log(y);
        var img = document.createElement("img");
        document.body.appendChild(img);
        img.src = "/images/logo.png";
        img.style.position = "absolute";
        img.style.top = x + 'px';
        img.style.left = y + 'px';
        img.id = "pop-up";
        setTimeout(function(){
            var alt = document.getElementById("pop-up");
            alt.parentNode.removeChild(alt);
        },3000)
    }
    
    var d = document.createElement("div");
    var btn = document.createElement("button");
    btn.innerHTML = "Trimite";
    var textArea = document.createElement("TEXTAREA");
    textArea.defaultValue = "Introduceti ceva...";
    d.appendChild(textArea);
    d.appendChild(btn);
    btn.onclick = function(){
        alert(textArea.value);
    }
    container.appendChild(d);
    
    window.onkeypress = function(e){
        var code = e.key;
        if(code == "a")
            alert("Hello!");
    }
    
    var stea = document.createElement("img");
    document.body.appendChild(stea);
    stea.style.position = "absolute";
    stea.src = "/images/stea1.png";
    init_miscare(stea,1,0,0,100,100,100);
}

function verifica(ob){
    var check = document.querySelectorAll("input[type=checkbox]");
    var index;
    for(var i = 0 ; i < check.length ; i++){
        if(check[i].checked){
            check[i].checked = false;
        }
    }
    ob.checked = true;
}

function update(min , max){
    var tel = document.getElementsByTagName("img");
        var price = document.querySelectorAll(".price");
        var denumire = document.querySelectorAll(".denumire");
        var specif = document.querySelectorAll(".specificatii");
        var review = document.getElementsByClassName("reviews");
    
        var oldContainerTel = document.querySelector("#containerTelefoane");
        var divMare = oldContainerTel.parentNode;
    
        var containerTel = document.createElement("div");
        containerTel.id = "containerTelefoane";
        
        var div = document.createElement("div");
        div.classList.add("div-imagine");
        var header = document.createElement("H1");
        header.innerHTML = "Telefon";
        div.appendChild(header);
        containerTel.appendChild(div);
        
        div = document.createElement("div");
        div.classList.add("div-specificatii");
        header = document.createElement("H1");
        header.innerHTML = "Specificatii";
        div.appendChild(header);
        containerTel.appendChild(div);
        
        div = document.createElement("div");
        div.classList.add("div-reviews");
        header = document.createElement("H1");
        header.innerHTML = "Reviews";
        div.appendChild(header);
        containerTel.appendChild(div);
        
        for(var i = 0 ; i < price.length ; i++ ){
            var pret = price[i].innerHTML;
            pret = parseInt(pret);
            if(pret >= min && pret <= max){
                var div = document.createElement("div");
                div.classList.add("div-imagine");
                var img = tel[i].cloneNode(true);
                div.appendChild(img);
                var p = document.createElement("P");
                p.className = "denumire";
                p.innerHTML = denumire[i].innerHTML;
                div.appendChild(p)
                p = document.createElement("P");
                p.className = "price";
                p.innerHTML = price[i].innerHTML;
                div.appendChild(p);
                containerTel.appendChild(div);
                div = document.createElement("div");
                div.className = "div-specificatii";
                for(var j = i * 14 ; j < i*14+14 ; j++){
                    p = document.createElement("p");
                    p.className = "specificatii";
                    p.innerHTML = specif[j].innerHTML;
                    div.appendChild(p);
                }
                containerTel.appendChild(div);
                div = document.createElement("div");
                div.classList.add("div-reviews");
                p = document.createElement("p");
                div.appendChild(p);
                containerTel.appendChild(div);
            }
        }
        
        divMare.replaceChild(containerTel , oldContainerTel);
}

function filtrare(brand){
    var tel = document.getElementsByTagName("img");
        var price = document.querySelectorAll(".price");
        var denumire = document.querySelectorAll(".denumire");
        var specif = document.querySelectorAll(".specificatii");
        var review = document.getElementsByClassName("reviews");
    
        var oldContainerTel = document.querySelector("#containerTelefoane");
        var divMare = oldContainerTel.parentNode;
    
        var containerTel = document.createElement("div");
        containerTel.id = "containerTelefoane";
        
        var div = document.createElement("div");
        div.classList.add("div-imagine");
        var header = document.createElement("H1");
        header.innerHTML = "Telefon";
        div.appendChild(header);
        containerTel.appendChild(div);
        
        div = document.createElement("div");
        div.classList.add("div-specificatii");
        header = document.createElement("H1");
        header.innerHTML = "Specificatii";
        div.appendChild(header);
        containerTel.appendChild(div);
        
        div = document.createElement("div");
        div.classList.add("div-reviews");
        header = document.createElement("H1");
        header.innerHTML = "Reviews";
        div.appendChild(header);
        containerTel.appendChild(div);
        
        for(var i = 0 ; i < denumire.length ; i++ ){
            var den = denumire[i].innerHTML;
            //if(den.includes(brand)){
                if(den.indexOf(brand) != -1){
                var div = document.createElement("div");
                div.classList.add("div-imagine");
                var img = tel[i].cloneNode(true);
                div.appendChild(img);
                var p = document.createElement("P");
                p.className = "denumire";
                p.innerHTML = denumire[i].innerHTML;
                div.appendChild(p)
                p = document.createElement("P");
                p.className = "price";
                p.innerHTML = price[i].innerHTML;
                div.appendChild(p);
                containerTel.appendChild(div);
                div = document.createElement("div");
                div.className = "div-specificatii";
                for(var j = i * 14 ; j < i*14+14 ; j++){
                    p = document.createElement("p");
                    p.className = "specificatii";
                    p.innerHTML = specif[j].innerHTML;
                    div.appendChild(p);
                }
                containerTel.appendChild(div);
                div = document.createElement("div");
                div.classList.add("div-reviews");
                p = document.createElement("p");
                div.appendChild(p);
                containerTel.appendChild(div);
            }
        }
        
        divMare.replaceChild(containerTel , oldContainerTel);
}

function sortare(directie){
    /**
        directie = 1 => cresc
        directie = 2 => desc
        */
    
    var price = document.querySelectorAll(".price");
    var pret_sort = [];
    for(var i = 0 ; i < price.length ; i++){
        pret_sort[i] = parseInt(price[i].innerHTML);
    }

    for(var i = 0 ; i < pret_sort.length - 1 ; i++)
        for(var j = i+1 ; j < pret_sort.length ; j++){
            if(pret_sort[i] > pret_sort[j]){
                var aux = pret_sort[i];
                pret_sort[i] = pret_sort[j];
                pret_sort[j] = aux;
            }
        }
    
    var selected = [];
    for(var i = 0 ; i < pret_sort.length ; i++){
        selected[i] = 0;
    }
    
    var tel = document.getElementsByTagName("img");
    var price = document.querySelectorAll(".price");
    var denumire = document.querySelectorAll(".denumire");
    var specif = document.querySelectorAll(".specificatii");
    var review = document.getElementsByClassName("reviews");
    
    var oldContainerTel = document.querySelector("#containerTelefoane");
    var divMare = oldContainerTel.parentNode;
    
    var containerTel = document.createElement("div");
    containerTel.id = "containerTelefoane";
        
    var div = document.createElement("div");
    div.classList.add("div-imagine");
    var header = document.createElement("H1");
    header.innerHTML = "Telefon";
    div.appendChild(header);
    containerTel.appendChild(div);
        
    div = document.createElement("div");
    div.classList.add("div-specificatii");
    header = document.createElement("H1");
    header.innerHTML = "Specificatii";
    div.appendChild(header);
    containerTel.appendChild(div);
        
    div = document.createElement("div");
    div.classList.add("div-reviews");
    header = document.createElement("H1");
    header.innerHTML = "Reviews";
    div.appendChild(header);
    containerTel.appendChild(div);
    
    for(var i = 0 ; i < price.length ; i++){
        console.log(price[i].innerHTML);
        console.log(denumire[i].innerHTML);
    }
    
    if(directie == 1){
        for(var i = 0 ; i < pret_sort.length ; i++){
            //console.log(pret_sort[i].innerHTML)
            for(var j = 0 ; j < price.length; j++){
                if(pret_sort[i] == parseInt(price[j].innerHTML) && selected[j] == 0){
                    //console.log(j);
                    var currentIndex = j;
                    selected[currentIndex] = 1;
                    var div = document.createElement("div");
                    div.classList.add("div-imagine");
                    var img = tel[currentIndex].cloneNode(true);
                    div.appendChild(img);
                    var p = document.createElement("P");
                    p.className = "denumire";
                    p.innerHTML = denumire[currentIndex].innerHTML;
                    div.appendChild(p)
                    p = document.createElement("P");
                    p.className = "price";
                    p.innerHTML = price[currentIndex].innerHTML;
                    div.appendChild(p);
                    price[currentIndex].innerHTML = "-1";
                    containerTel.appendChild(div);
                    div = document.createElement("div");
                    div.className = "div-specificatii";
                    for(var q = currentIndex * 14 ; q < currentIndex*14+14 ; q++){
                        p = document.createElement("p");
                        p.className = "specificatii";
                        p.innerHTML = specif[q].innerHTML;
                        div.appendChild(p);
                    }
                    containerTel.appendChild(div);
                    div = document.createElement("div");
                    div.classList.add("div-reviews");
                    p = document.createElement("p");
                    div.appendChild(p);
                    containerTel.appendChild(div);
                }
            }
        }
    }
    else if(directie == 2){
        for(var i = pret_sort.length - 1 ; i >= 0 ; i--){
            for(var k = 0 ; k < selected.length ; k++){
                console.log(selected[k]);
            }
            for(var j = 0 ; j < price.length; j++){
                if(pret_sort[i] == parseInt(price[j].innerHTML) && selected[j] == 0){
                    var currentIndex = j;
                    selected[currentIndex] = 1;
                    var div = document.createElement("div");
                    div.classList.add("div-imagine");
                    var img = tel[currentIndex].cloneNode(true);
                    div.appendChild(img);
                    var p = document.createElement("P");
                    p.className = "denumire";
                    p.innerHTML = denumire[currentIndex].innerHTML;
                    div.appendChild(p)
                    p = document.createElement("P");
                    p.className = "price";
                    p.innerHTML = price[currentIndex].innerHTML;
                    div.appendChild(p);
                    containerTel.appendChild(div);
                    div = document.createElement("div");
                    div.className = "div-specificatii";
                    for(var q = currentIndex * 14 ; q < currentIndex*14+14 ; q++){
                        p = document.createElement("p");
                        p.className = "specificatii";
                        p.innerHTML = specif[q].innerHTML;
                        div.appendChild(p);
                    }
                    containerTel.appendChild(div);
                    div = document.createElement("div");
                    div.classList.add("div-reviews");
                    p = document.createElement("p");
                    div.appendChild(p);
                    containerTel.appendChild(div);
                }
            }
        }
    }
    divMare.replaceChild(containerTel , oldContainerTel);
}

function filtruCulori(brands){
    var tel = document.getElementsByTagName("img");
        var price = document.querySelectorAll(".price");
        var denumire = document.querySelectorAll(".denumire");
        var specif = document.querySelectorAll(".specificatii");
        var review = document.getElementsByClassName("reviews");
    
        var oldContainerTel = document.querySelector("#containerTelefoane");
        var divMare = oldContainerTel.parentNode;
    
        var containerTel = document.createElement("div");
        containerTel.id = "containerTelefoane";
        
        var div = document.createElement("div");
        div.classList.add("div-imagine");
        var header = document.createElement("H1");
        header.innerHTML = "Telefon";
        div.appendChild(header);
        containerTel.appendChild(div);
        
        div = document.createElement("div");
        div.classList.add("div-specificatii");
        header = document.createElement("H1");
        header.innerHTML = "Specificatii";
        div.appendChild(header);
        containerTel.appendChild(div);
        
        div = document.createElement("div");
        div.classList.add("div-reviews");
        header = document.createElement("H1");
        header.innerHTML = "Reviews";
        div.appendChild(header);
        containerTel.appendChild(div);
    for(var j = 0 ; j < brands.length ; j++){
        var brand = brands[j];
        for(var i = 0 ; i < denumire.length ; i++ ){
            var den = denumire[i].innerHTML;
            //if(den.includes(brand)){
                if(den.indexOf(brand) != -1){
                var div = document.createElement("div");
                div.classList.add("div-imagine");
                var img = tel[i].cloneNode(true);
                div.appendChild(img);
                var p = document.createElement("P");
                p.className = "denumire";
                p.innerHTML = denumire[i].innerHTML;
                div.appendChild(p)
                p = document.createElement("P");
                p.className = "price";
                p.innerHTML = price[i].innerHTML;
                div.appendChild(p);
                containerTel.appendChild(div);
                div = document.createElement("div");
                div.className = "div-specificatii";
                for(var j = i * 14 ; j < i*14+14 ; j++){
                    p = document.createElement("p");
                    p.className = "specificatii";
                    p.innerHTML = specif[j].innerHTML;
                    div.appendChild(p);
                }
                containerTel.appendChild(div);
                div = document.createElement("div");
                div.classList.add("div-reviews");
                p = document.createElement("p");
                div.appendChild(p);
                containerTel.appendChild(div);
            }
        }
    }
    divMare.replaceChild(containerTel , oldContainerTel);
}

function time(){
    setTimeout(function(){
        alert("Nu uita sa lasi o parere!!");
    } , 5000);
}

function init_miscare(ob, axa , left_i, top_i, left_f, top_f, nr_pasi){
    //ob se misca de la punctul (xi,yi) la punctul (xf,yf)
    /** axa  = 1 - miscare colt stanga sus
            = 2 - miscare colt dreapta sus
            = 3 - miscare colt stanga jos
            = 4 - misacare colt dreapta jos
            */

    ob.style.position="absolute";
    var DLeft=left_f-left_i;
    var DTop=top_f-top_i;
    var dleft = DLeft/nr_pasi;
    var dtop = DTop/nr_pasi;
    top_r = top_i;
    left_r = left_i;
    //porneste miscarea
    misca(ob,axa,top_r,left_r,1,nr_pasi,dleft,dtop,left_f,top_f);
}

function misca(ob,axa,top_r,left_r,pas_c,nr_pasi,dleft,dtop,left_f,top_f)
{
        //actualizeaza topreal si left real
        top_r+=dtop;
        left_r+=dleft;
    
      //repozitionare obiect pe ecran
        ob.style.top=(Math.round(top_r))+"px";
        ob.style.left=(Math.round(left_r))+"px";
        pas_c++;
    
    if(pas_c < nr_pasi && nr_pasi != Infinity){
    //apelarea recursiva a functiei pentru urmatorul pas de miscare
    setTimeout(function (){
            misca(ob,axa,top_r,left_r,pas_c,nr_pasi,dleft,dtop,left_f,top_f);
        },20);
    }
    else{ 
        //ultimul pas - seteazadirect la coord finale; elimina erori rotunjire
        ob.style.top= top_f + "px";
        ob.style.left=left_f+"px";
        var stele = document.querySelectorAll("img");
        for(i = 1 ; i < stele.length ; i++)
            stele[i].parentNode.removeChild(stele[i]);
        creste(stele[0]);
    }
}