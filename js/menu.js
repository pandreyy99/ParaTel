"use strict";

    document.writeln("<header>\
            <div class='container'>\
            <div id='logo'>\
                <h1><img src = 'images/logo.png' alt = 'Logo not found!' title = 'logo'/><span id='first'>Para</span><span id='second'>Tel</span> Company &reg;</h1>\
            </div>\
            <nav class = 'navigation'>\
                <ul class = 'menu'>\
                   <li><a class = 'contact' href = 'contacts.html'>Contacts</a></li>");
    document.writeln("<li>\
                    <a href = '#'>Smart</a>\
                    <ul class = 'submenu'>\
                        <li><a href = 'laptop.html'>Laptop-uri</a></li>\
                        <li><a href = 'smartwatch.html'>Smartwatches</a></li></ul>");    
   document.writeln("</li>");
   document.writeln("<li><a href = 'pad.html'>Tablete</a></li>\
                <li><a href = '#'>Telefoane&Accesorii</a>");
   document.write("<ul class = 'submenu'>\
					   <li><a href = 'phones.html'><div>Telefoane</div></a></li>\
					   <li><a href = 'accesories.html'>Accesorii</a></li>\
				    </ul>");
   document.write("</li><li class = 'current'><a href = 'index.html'>Home</a></li></ul></nav></div></header>");
