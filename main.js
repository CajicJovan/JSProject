
// JQUERY
$(function () {
    var temp = `<div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
<div class="media tm-media-2">
  <div class="media-body tm-media-body-2">
    <h2 class="mb-4 tm-text-blue-dark tm-media-2-header">Cetvrti</h2>
    <p class="mb-4"></p>
    <p class="mb-4"></p>
  </div>
</div>
</div>`
//js za dinamicki ispis blokova na about strani
var tabovi = [
    {
        naslov:'Forest', 
        opis:'The word forest broadly describes an area that has a large number of trees <br/>There are three general types of forest that exist\: temperate, tropical, and boreal <br/> Experts estimate that these forests cover approximately one-third of Earth\'s surface <br/> Our forest is a great place for long strolls and camping, you can spend your whole day enjoying the greenery of it, maybe even start a little barbecue party with people you came with'
    },
    {
        naslov:'Lake', 
        opis:'Lakes are large bodies of water that are surrounded by land and are not part of an ocean.<br/> Lakes are relatively still bodies of water when compared to a river where the water flows.<br/> They can contain either salt or fresh water and are larger than ponds.<br/>Lake is open whole year for swimming, diving, scuba diving and water sports and many more activities.<br/> With numerous safeguards and lots of equipment for renting so you can use the whole day as much as you like'
    },
    {
        naslov:'Sand dunes', 
        opis:'Sand dunes are created when wind deposits sand on top of each other until a small mound starts to form. <br/>Once that first mound forms, sand piles up on the windward side more and more until the edge of the dune collapses under its own weight.<br/>  Dunes are great place for sand surfing, sandboarding, safari and dune buggying.<br/>  Hiking and backpacking are infallible thing if you are spending time with friends or family and having lots of fun while being under the clear sun'
    },
    {
        naslov:'Viewpoint', 
        opis:'Fun and relaxing place to take a break after exhausting day of exploring our beautiful park. From this point you can see everything you could do or you have done. Sights you see from where will always stay in your memory'
    }

]
    $('.tm-tab-link').click(function(e){
        e.preventDefault()
        var idTaba = $(this).attr('data-id')
        $('.tm-tab-link').css({
            'background-color':'#f2f2f2',
            'color':'#666666'
        })
        $(this).css({
            'background-color':'#006699',
            'color':'#fff'
        })
        $('.tm-tab-link').removeClass('active')
        var ispis = `<div class="tab-pane show active" id="tab${idTaba+1}" role="tabpanel" aria-labelledby="tab${idTaba+1}-tab">
        <div class="media tm-media-2">
          <div class="media-body tm-media-body-2">
            <h2 class="mb-4 tm-text-blue-dark tm-media-2-header">${tabovi[idTaba].naslov}</h2>
            <p class="mb-4">${tabovi[idTaba].opis}</p>
          </div>
        </div>
        </div>`
        $('.tab-content').html(ispis)
    })
    var temp2 = `<div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
<div class="media tm-media-2">
  <div class="media-body tm-media-body-2">
    <h2 class="mb-4 tm-text-blue-dark tm-media-2-header">Cetvrti</h2>
    <p class="mb-4">Phasellus efficitur, ante et bibendum accumsan, nisi tellus fermentum eros, eget tincidunt enim orci at arcu. Etiam vel ligula non neque pharetra scelerisque mollis ac arcu.</p>
    <p class="mb-4">In luctus eu turpis sed sodales. Suspendisse nisi ante, dapibus id purus at, tristique ullamcorper dolor. Nullam tempus quam id odio tempus bibendum. Nullam vulputate, justo fermentum interdum fermentum, diam elit iaculis lorem, sed puvina.</p>
  </div>
</div>
</div>`
// js za dinamicki ispis blokova na autor strani
var tabovi2 = [
    {
        naslov:'Education', 
        opis:'Graduated from High School in 2017. Started further education at Faculty of Mechanical Engineering in Belgrade, but after one year of studying transfered to ICT College for further developement'
    },
    {
        naslov:'Interests', 
        opis:'Interested in basic programming in JS, Java, C#. One of the dreams is to start working on Artificial Inteligence. Some of the rarer interests are learning to work in Photoshop, AfterEffect and learning piano'
    },
    {
        naslov:'Hobies', 
        opis:'Hobbies diversefy from playing team sports like football, basketball, volleyball to individual sports like table tenis, swimming. Huge fan of extreme sports like snowboarding, parachuting, bungee jumping.'
    },
    {
        naslov:'More About me', 
        opis:'Friendly, enthusiastic personality with a drive for learning new things in many sectors. Team player but aslo competitive and eager for new challenge. Responsible, organised and hard working'
    }

]
if(window.location.pathname=='/author.html'){


    $('.tm-tab-link').click(function(e){
        e.preventDefault()
        var idTaba = +$(this).attr('data-id')
        $('.tm-tab-link').css({
            'background-color':'#f2f2f2',
            'color':'#666666'
        })
        $(this).css({
            'background-color':'#006699',
            'color':'#fff'
        })
        $('.tm-tab-link').removeClass('active')
        if(idTaba !=3){
            var ispis = `<div class="tab-pane show active" id="tab${idTaba+1}" role="tabpanel" aria-labelledby="tab${idTaba+1}-tab">
            <div class="media tm-media-2">
              <div class="media-body tm-media-body-2">
                <h2 class="mb-4 tm-text-blue-dark tm-media-2-header">${tabovi2[idTaba].naslov}</h2>
                <p class="mb-4">${tabovi2[idTaba].opis}</p>
              </div>
            </div>
            </div>`
        }
        else if (idTaba ==3){
            var ispis = `<div class="tab-pane show active" id="tab${idTaba+1}" role="tabpanel" aria-labelledby="tab${idTaba+1}-tab">
            <div class="media tm-media-2">
              <div class="media-body tm-media-body-2">
              <h2 class="mb-4 tm-text-blue-dark tm-media-2-header">${tabovi2[idTaba].naslov}</h2><div class='sidebyside'>
                <img class='img-fluid authorImg' src='img/author.jpg' alt='author'>
                <p class="ml-4">${tabovi2[idTaba].opis}</p></div>
              </div>
            </div>
            </div>`
        };
        
        $('.tab-content').html(ispis)
    })
}
//js za dinamicki ispis blokova za kupovinu karata na index strani
    var blokovi = [
        {
        "slika":"img/insertion-140x140-01.jpg",
        "naslov":"Basic",
        "tekst":"Basic package allows you to have a guided short tour with a 10+ person group",
        "cena":10,
        "bojaDugmeta":"tm-bg-blue"
    },
        {
        "slika":"img/insertion-140x140-02.jpg",
        "naslov":"Standard",
        "tekst":"Standard package allows you to have a guided or self-guided tour with your friends",
        "cena":20,
        "bojaDugmeta":"tm-bg-light-green"
        },
        {
        "slika":"img/insertion-140x140-03.jpg",
        "naslov":"Classic",
        "tekst":"Classic package allows you to roam freely in our park and have fun in your own planned activities",
        "cena":35,
        "bojaDugmeta":"tm-bg-blue"
        },
        {
        "slika":"img/insertion-140x140-04.jpg",
        "naslov":"Premium",
        "tekst":"Premium package allows you to roam and enjoy in some of our fun activities",
        "cena":50,
        "bojaDugmeta":"tm-bg-light-green"
        },
        {
        "slika":"img/insertion-140x140-05.jpg",
        "naslov":"Vip",
        "tekst":"Vip package allows you to roam and enjoy in some of our fun activities while getting photographed and video taped",
        "cena":75,
        "bojaDugmeta":"tm-bg-blue"
        }
    ]
    
    for(let i = 0; i < blokovi.length; i++)
    {
        ispis = ''
        ispis+= 
        `
        <div class="media">
            <img src="${blokovi[i].slika}" alt="Image" class="mr-3">
            <div class="media-body tm-bg-gray">
            <div class="tm-description-box">
                <h5 class="tm-text-blue">${blokovi[i].naslov}</h5>
                <p class="mb-0">${blokovi[i].tekst}</p>
            </div>
            <div class="tm-buy-box">
                <a href="#" class="${blokovi[i].bojaDugmeta} tm-text-white tm-buy">buy</a>
                <span class="tm-text-blue tm-price-tag">$${blokovi[i].cena}</span>
            </div>
            </div>
        </div>
        `
        if(["/","","/index.html"].includes(window.location.pathname)){

        document.querySelector("#blokovi1").innerHTML += ispis
        }
    }
    $('.tm-buy').click(function(e){
        e.preventDefault()
        $.toast('Bought', 2000);
        
    })
    
    //dinamicki ispis blokova na about strani 
    
    
    var blokovi2 = [
        {
        "slika":{
            "src":"insertion-260x390-01.jpg",
            "alt":"slika1",
        },
        "naslov":"Forest"
    },
        {
        "slika":{
            "src":"insertion-260x390-02.jpg",
            "alt":"slika2",
        },
        "naslov":"Lake"
        },
        {
        "slika":{
            "src":"insertion-260x390-03.jpg",
            "alt":"slika3",
            
        },
        "naslov":"Sand dune"
        },
    {
        "slika":{
            "src":"insertion-260x390-04.jpg",
            "alt":"slika4",
           
        },
        "naslov":"Viewpoint",
        }
    ]
    
    for(let i = 0; i < blokovi2.length; i++)
    {
        ispis = ''
        ispis+= 
        `<div class="col-sm-6 col-12 col-md-4 col-lg-3 col-xl-3 tm-album-col">
        <figure class="effect-sadie">
          <img src="img/${blokovi2[i].slika.src}" alt="${blokovi2[i].slika.alt}" class="img-fluid">
          <figcaption>
            <h2>${blokovi2[i].naslov}</h2>
          </figcaption>
        </figure>
      </div>`
      if(["/","/index.html"].includes(window.location.pathname)){

        document.querySelectorAll(".tm-albums-container")[0].innerHTML += ispis
      }
    }
    
    
 //js za dinamicki ispis futera na svim stranama   
    
    var d = document
var footerLeviNiz = ['Home','About','Contact','Author']
var footerLeviNizLinkovi = ['index.html','about.html','contact.html','author.html']

var footerSrednjiNiz = ['Youtube','Twitter','Instagram','Facebook']
var footerSrednjiNizLinkovi = ['https://www.youtube.com/','https://www.twitter.com/','https://www.instagram.com/','https://www.facebook.com/']

var footerDesniNiz = ['Dokumentacija','Sitemap']
var footerDesniNizLinkovi = ['dokumentacija.pdf','sitemap.xml']



var leviDeoFutera = d.querySelector("#futerLeviNiz")
var srednjiDeoFutera = d.querySelector("#futerSrednjiNiz")
var desniDeoFutera = d.querySelector("#futerDesniNiz")


for(let i = 0;i < 4;i++)
{
    var link = d.createElement("a")
    link.classList.add("tm-text-blue-dark", "d-block", "mb-2")
    link.href=footerLeviNizLinkovi[i]
    link.innerHTML = footerLeviNiz[i]
    leviDeoFutera.appendChild(link)
    var link2 = d.createElement("a")
    link2.classList.add("tm-text-blue-dark", "d-block", "mb-2")
    link2.href=footerSrednjiNizLinkovi[i]
    link2.target='_blank'
    link2.innerHTML = footerSrednjiNiz[i]
    srednjiDeoFutera.appendChild(link2)
    var link3 = d.createElement("a")
    link3.classList.add("tm-text-blue-dark", "d-block", "mb-2")
    link3.href=footerDesniNizLinkovi[i]
    link3.target='_blank'
    link3.innerHTML = footerDesniNiz[i]
    if(footerDesniNiz[i] != undefined)
    desniDeoFutera.appendChild(link3)
}
// deo validacije za kontakst stranu
var lastnametb = document.querySelector("#contact_lastname")
var firstnametb = document.querySelector("#contact_firstname")
var emailtb = document.querySelector("#contact_email")
var messagetb = document.querySelector("#contact_message")
console.log(window.location.pathname);
// validacija za Subscribe dugme na index strani
if(["/","","/index.html"].includes(window.location.pathname)){
    document.querySelector("#subscribe").addEventListener("click",function(e){
        e.preventDefault()
        var reEmail = /^[\w\d\_][\w\d\_\-\.]{3,50}\@[a-z]{2,10}(\.[a-z]{2,3})+$/;
    
        if(reEmail.test(document.querySelector("#subscribeEmail").value))
        {
            $.toast('Thank you for subscribing', 2000);
            document.querySelector("#subscribeEmail").value = ""
        }
        else
            $.toast('Invalid email form', 2000);
    })
}
//deo validacije za kontakt formu
if(window.location.pathname == '/contact.html'){

firstnametb.addEventListener("keyup",function(){
    if(reIme.test(this.value))
    {
        if(!document.querySelector("#err-ime").classList.contains("d-none"))
        {   
            document.querySelector("#err-ime").classList.add("d-none")
        }
    }
    else
    {
        if(document.querySelector("#err-ime").classList.contains("d-none"))
        {
            document.querySelector("#err-ime").classList.remove("d-none")
        }
    }
})
lastnametb.addEventListener("keyup",function(){
    if(rePrezime.test(this.value))
    {
        if(!document.querySelector("#err-prezime").classList.contains("d-none"))
        {
            document.querySelector("#err-prezime").classList.add("d-none")
        }
    }
    else
    {
        if(document.querySelector("#err-prezime").classList.contains("d-none"))
        {
            document.querySelector("#err-prezime").classList.remove("d-none")
        }
    }
})
emailtb.addEventListener("keyup",function(){
    if(reEmail.test(this.value))
    {
        if(!document.querySelector("#err-email").classList.contains("d-none"))
        {
            document.querySelector("#err-email").classList.add("d-none")
        }
    }
    else
    if(document.querySelector("#err-email").classList.contains("d-none"))
    {
        document.querySelector("#err-email").classList.remove("d-none")
    }
})
messagetb.addEventListener("keyup",function(){
    if(rePoruka.test(this.value))
    {
        if(!document.querySelector("#err-msg").classList.contains("d-none"))
        {
            document.querySelector("#err-msg").classList.add("d-none")
        }
    }
    else
    if(document.querySelector("#err-msg").classList.contains("d-none"))
    {
        document.querySelector("#err-msg").classList.remove("d-none")
    }
})



document.querySelector("#potvrdiFormu").addEventListener("click",function(e){
    e.preventDefault();
    validacija();
})


}
//JS ZA DINAMICKI ISPIS SLAJDERA NA SVIM STRANAMA
    $(".slider-strela").click(function()
{
    let nizSlika = ['slide1.jpg','slide2.jpg','slide3.jpg']
    let smer = $(this).attr("data-smer");
    let trenutnaSlikaAlt = $(".tm-welcome img").attr("alt")
    for(let i = 0; i < nizSlika.length; i++)
    {
        if(trenutnaSlikaAlt == nizSlika[i] && smer == "desno" && nizSlika[i+1] != undefined)
        {
            $(".tm-welcome img").attr("src","img/"+nizSlika[i+1])
            $(".tm-welcome img").attr("alt",nizSlika[i+1])
            $(".tm-welcome").addClass("slider-animacija")
            setTimeout(obrisiKlasuAnimacije,500)
        }
        else if(trenutnaSlikaAlt == nizSlika[i] && smer == "levo" && nizSlika[i-1] != undefined)
        {
            $(".tm-welcome img").attr("src","img/"+nizSlika[i-1])
            $(".tm-welcome img").attr("alt",nizSlika[i-1])

            $(".tm-welcome").addClass("slider-animacija")
            setTimeout(obrisiKlasuAnimacije,500)
        }
        else if(trenutnaSlikaAlt == nizSlika[i] && smer == "desno" && nizSlika[i+1] == undefined)
        {
            $(".tm-welcome img").attr("src","img/"+nizSlika[0])
            $(".tm-welcome img").attr("alt",nizSlika[0])
            $(".tm-welcome").addClass("slider-animacija")
            setTimeout(obrisiKlasuAnimacije,500)
        }
        else if(trenutnaSlikaAlt == nizSlika[i] && smer == "levo" && nizSlika[i-1] == undefined)
        {
            $(".tm-welcome img").attr("src","img/"+nizSlika[nizSlika.length-1])
            $(".tm-welcome img").attr("alt",nizSlika[nizSlika.length-1])
            $(".tm-welcome").addClass("slider-animacija")
            setTimeout(obrisiKlasuAnimacije,500)
        }
    }

})
});


//Menjanje navbara u burger na manjoj rezoluciji
window.onresize = proveriSirinu
function proveriSirinu()
{
    var sirina = window.outerWidth
    if(sirina < 768 && document.getElementsByClassName("navbar-collapse")[0].classList.contains("show"))
        document.getElementsByClassName("navbar-collapse")[0].classList.remove("show")
    else if(sirina > 768 && !document.getElementsByClassName("navbar-collapse")[0].classList.contains("show"))
        document.getElementsByClassName("navbar-collapse")[0].classList.add("show")
}
//deo validacije za kontakt formu i regularni izrazi za isto
var reIme = /^[A-Z][a-zšđčžć]{2,29}$/;
var rePrezime = /^[A-Z][a-zšđčžć]{2,29}( [A-Z][a-zšđčžć]{2,29})*$/;
var reEmail = /^[\w\d\_][\w\d\_\-\.]{3,50}\@[a-z]{2,10}(\.[a-z]{2,3})+$/;
var rePoruka = /.{5,100}/;
function obrisiKlasuAnimacije(){
    $(".tm-welcome").removeClass("slider-animacija")
}
function validacija()
{
    

//Poslenji deo provere validacije na kontakt formi
var dobra = {
    ime:false,
    prezime:false,
    mail:false,
    poruka:false,
    radio:false
}    
// IME


    if(reIme.test(document.querySelector("#contact_firstname").value))
    {
        if(!document.querySelector("#err-ime").classList.contains("d-none"))
        {
            document.querySelector("#err-ime").classList.add("d-none")
        }
        dobra.ime=true
    }
    else
    {
        if(document.querySelector("#err-ime").classList.contains("d-none"))
        {
            document.querySelector("#err-ime").classList.remove("d-none")
        }
        dobra.ime=false
    }

    // PREZIME

    if(rePrezime.test(document.querySelector("#contact_lastname").value))
    {
        if(!document.querySelector("#err-prezime").classList.contains("d-none"))
        {
            document.querySelector("#err-prezime").classList.add("d-none")
        }
        dobra.prezime=true
    }
    else
    {
        if(document.querySelector("#err-prezime").classList.contains("d-none"))
        {
            document.querySelector("#err-prezime").classList.remove("d-none")
        }
        dobra.prezime=false
    }

    // Email

    if(reEmail.test(document.querySelector("#contact_email").value))
    {
        if(!document.querySelector("#err-email").classList.contains("d-none"))
        {
            document.querySelector("#err-email").classList.add("d-none")
        }
        dobra.mail=true
    }
    else{
        if(document.querySelector("#err-email").classList.contains("d-none"))
        {
            document.querySelector("#err-email").classList.remove("d-none")
        }
        dobra.mail=false
    }
    // Radio buttons

    let radioDugmad = false;
    for(let i = 0; i < document.querySelectorAll('[name="dept"]').length; i++)
    {
        if(document.querySelectorAll('[name="dept"]')[i].checked)   
        {
            radioDugmad = true
            break;
        }
    }
    document.querySelectorAll('[name="dept"]')[0].addEventListener("click",function(){
        if(!document.querySelector("#err-dept").classList.contains("d-none"))
        {
            document.querySelector("#err-dept").classList.add("d-none")
        }
    })
    document.querySelectorAll('[name="dept"]')[1].addEventListener("click",function(){
        if(!document.querySelector("#err-dept").classList.contains("d-none"))
        {
            document.querySelector("#err-dept").classList.add("d-none")
        }
    })
    if(radioDugmad)
    {
        if(!document.querySelector("#err-dept").classList.contains("d-none"))
        {
            document.querySelector("#err-dept").classList.add("d-none")
        }
        dobra.radio=true
    }
    else{
        if(document.querySelector("#err-dept").classList.contains("d-none"))
        {
            document.querySelector("#err-dept").classList.remove("d-none")
        }
        dobra.radio=false
    }
    // PORUKA
    
    if(rePoruka.test(document.querySelector("#contact_message").value))
    {
        if(!document.querySelector("#err-msg").classList.contains("d-none"))
        {
            document.querySelector("#err-msg").classList.add("d-none")
        }
        dobra.poruka=true
    }
    else{
        if(document.querySelector("#err-msg").classList.contains("d-none"))
        {
            document.querySelector("#err-msg").classList.remove("d-none")
        }
        dobra.poruka=false
    }
    if(dobra.ime && dobra.prezime && dobra.mail && dobra.radio && dobra.poruka)
    $.toast('Message sent', 2000);
    else
    $.toast('Invalid form', 2000);


}












