fetch("http://wrzt.tomshen.me/")
.then(res => res.json())
.then(data => {
    if (data) {
        let city = data.city;
        let country = data.country;
        
        if (city && country) {
            let section = document.getElementsByTagName("section")[0];
            let newParagraph = document.createElement("p");
            let newParagraphContent = document.createTextNode("I am currently in "
                + city + ".");

            newParagraph.appendChild(newParagraphContent);
            section.appendChild(newParagraph);  
        }
    }
});
