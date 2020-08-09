const menuIcon = document.getElementById("menu-icon");
const słoik = document.getElementById("słoik");
const box1 = document.getElementById("box1");
const telefon = document.getElementById("Telefon");
const słoikkontakt = document.getElementById("słoikkontakt");
const cancel = document.getElementById("cancel");
const Koszyk = document.getElementById("Koszyk");
const cancel1 = document.getElementById("cancel1");
const message = document.getElementById("message");
const poletekstowe = document.getElementById("poletekstowe");
const Wyslij = document.getElementById("Wyslij");
const napisWyslij = document.getElementById("napisWyslij");
const napiszdonas = document.getElementById("napiszdonas");
const Twojawiadomosc = document.getElementById("Twojawiadomosc");
const Dokoszyka = document.getElementById("Dokoszyka");
const cena = document.getElementById("cena");
const informacje = document.getElementById("informacje");
const maxzdj = document.querySelector(".maxzdj");
const napisKoszykjestpusty = document.getElementById("napisKoszykjestpusty");
const napisNictuniema = document.getElementById("napisNictuniema");
const Razem = document.getElementById("Razem");
const Koszykwkoszyku = document.getElementById("Koszykwkoszyku");
const zmniejsz = document.getElementById("zmniejsz");
const zwieksz = document.getElementById("zwieksz");
const iloscproduktów = document.getElementById("iloscproduktów");
const deleted = document.getElementById("delete");
const Zamawianie = document.getElementById("foreignobjekt2");
const cenazawszystko = document.getElementById("cenazawszystko");
var słoiksklep = document.getElementById("słoiksklep");
var Dziekujemy = document.getElementById("Dziekujemy");
/*
window.onload = load;
function load() {
  var słoiksklep = document.getElementById("słoiksklep");
  słoiksklep.innerHTML = localStorage.getItem("całysłoik");
}
*/
menuIcon.addEventListener("click", function () {
  if (słoik.style.opacity == "1") {
    słoik.style.opacity = "0";
    box1.style.opacity = "0";
    słoikkontakt.style.opacity = "0";
    słoik.style.zIndex = "-1";
    box1.style.zIndex = "-2";
    słoiksklep.style.opacity = "0";
    słoiksklep.style.zIndex = "-2";
    słoikkontakt.style.zIndex = "-3";
  } else {
    słoik.style.opacity = "1";
    box1.style.opacity = "1";
    słoikkontakt.style.opacity = "1";
    słoik.style.zIndex = "30";
    box1.style.zIndex = "20";
    słoiksklep.style.opacity = "1";
    słoiksklep.style.zIndex = "21";
    słoikkontakt.style.zIndex = "22";
  }
});
const time = setInterval(function () {
  var dokumentsłuchawka = document
    .getElementById("słuchawka")
    .animate(
      [{ transform: "rotateZ(-5deg)" }, { transform: "rotateZ(5deg)" }],
      {
        duration: 100,
        iterations: 30,
      }
    );
}, 15000);
telefon.addEventListener("click", function () {
  słoikkontakt.style.zIndex = "100";
  słoikkontakt.style.transition = "0.4s";
  słoikkontakt.style.opacity = "1";
});
cancel.addEventListener("click", function () {
  słoikkontakt.style.zIndex = "-50";
  słoikkontakt.style.transition = "0.4s";
  słoikkontakt.style.opacity = "0";
});
Koszyk.addEventListener("click", function () {
  słoiksklep.style.zIndex = "101";
  słoiksklep.style.transition = "0.4s";
  słoiksklep.style.opacity = "1";
});
cancel1.addEventListener("click", function () {
  słoiksklep.style.zIndex = "-51";
  słoiksklep.style.transition = "0.4s";
  słoiksklep.style.opacity = "0";
});
var minutesHand = document.querySelector("#minuty"),
  hoursHand = document.querySelector("#godziny"),
  now = new Date();

var setupClock = function () {
  var mins = now.getMinutes() * 60,
    hours = now.getHours() * 3600;

  minutesHand.style.animationDelay = "-" + mins + "s";
  hoursHand.style.animationDelay = "-" + hours + "s";
};

setupClock();

Wyslij.addEventListener("click", function () {
  napisWyslij.style.opacity = "0";
  Wyslij.style.opacity = "0";
  napiszdonas.style.opacity = "0";
  poletekstowe.style.opacity = "0";
  Twojawiadomosc.style.opacity = "1";
  Dziekujemy.style.opacity = "1";
});

napisWyslij.addEventListener("click", function () {
  napisWyslij.style.opacity = "0";
  Wyslij.style.opacity = "0";
  napiszdonas.style.opacity = "0";
  poletekstowe.style.opacity = "0";
  Twojawiadomosc.style.opacity = "1";
  Dziekujemy.style.opacity = "1";
});

var originalSrcs = [
  "/zdjęcia-orginał/Zielony.jpg",
  "/zdjęcia-orginał/Niebieski.jpg",
  "/zdjęcia-orginał/Różowy.jpg",
  "/zdjęcia-orginał/Nijaki.jpg",
  "/zdjęcia-orginał/Biały.jpg",
];

var originalSrcsout = [];

var liczniktakio = 0;

var lista = [];

var liczbazmiennej = 0;

function zdjęcia() {
  var iframe = document.getElementById("sklep");
  var ramka = iframe.contentDocument || iframe.contentWindow.document;
  var kwadraty = ramka.querySelectorAll("#containersklep img");
  kwadraty.forEach((kwadrat) => {
    kwadrat.addEventListener("click", () => {
      maxzdj.classList.add("open");
      window.originalSrc = kwadrat.getAttribute("data-original");
      const maxzdjecie = document.querySelector(".maxzdj .maxzdjecie");
      maxzdjecie.src = originalSrc;
      informacje.classList.add("open");
      if (originalSrc == "/zdjęcia-orginał/Zielony.jpg") {
        var opis = "To jest zielony słoik";
      } else if (originalSrc == "/zdjęcia-orginał/Różowy.jpg") {
        var opis = "To jest różowy słoik";
      } else if (originalSrc == "/zdjęcia-orginał/Niebieski.jpg") {
        var opis = "To jest niebieksi słoik";
      } else if (originalSrc == "/zdjęcia-orginał/Biały.jpg") {
        var opis = "To jest biały słoik";
      } else if (originalSrc == "/zdjęcia-orginał/Nijaki.jpg") {
        var opis = "To jest nijaki słoik";
      }
      if (originalSrc == "/zdjęcia-orginał/Zielony.jpg") {
        var naglowek = "Słoik-Zielony";
      } else if (originalSrc == "/zdjęcia-orginał/Różowy.jpg") {
        var naglowek = "Słoik-Różowy";
      } else if (originalSrc == "/zdjęcia-orginał/Niebieski.jpg") {
        var naglowek = "Słoik-Niebieski";
      } else if (originalSrc == "/zdjęcia-orginał/Biały.jpg") {
        var naglowek = "Słoik-Biały";
      } else if (originalSrc == "/zdjęcia-orginał/Nijaki.jpg") {
        var naglowek = "Słoik-Nijaki";
      }
      if (originalSrc == "/zdjęcia-orginał/Zielony.jpg") {
        var cena = "1zł";
      } else if (originalSrc == "/zdjęcia-orginał/Różowy.jpg") {
        var cena = "2zł";
      } else if (originalSrc == "/zdjęcia-orginał/Niebieski.jpg") {
        var cena = "5zł";
      } else if (originalSrc == "/zdjęcia-orginał/Biały.jpg") {
        var cena = "3zł";
      } else if (originalSrc == "/zdjęcia-orginał/Nijaki.jpg") {
        var cena = "4zł";
      }
      window.cenadokoszyka = cena;
      window.naglowekdokoszyka = naglowek;

      document.getElementById("cena").innerText = cena;
      document.getElementById("naglowek").innerText = naglowek;
      document.getElementById("opisSłoika").innerText = opis;
      Dokoszyka.onclick = function () {
        if (liczniktakio >= 9) {
          liczniktakio = "9+";
          var licznik = document.getElementById("licznik");
          licznik.style.fontSize = "3px";
          licznik.style.transform = "translateX(-0.7px)";
        } else if (liczniktakio >= 0 && originalSrcs.includes(originalSrc)) {
          liczniktakio += 1;
          var foreignobjekt1 = document.getElementById("foreignobjekt");
          var zamowieniektores1 = document.createElement("div");
          zamowieniektores1.setAttribute("id", "containerkoszyka");
          foreignobjekt1.appendChild(zamowieniektores1);
          var jedenprodukt1 = document.createElement("div");
          jedenprodukt1.setAttribute("id", "jedenprodukt");
          zamowieniektores1.appendChild(jedenprodukt1);
          var iloscproduktów1 = document.createElement("input");
          iloscproduktów1.setAttribute("id", "iloscproduktów");
          iloscproduktów1.setAttribute("type", "number");
          iloscproduktów1.setAttribute("value", "1");
          iloscproduktów1.setAttribute("min", "1");
          iloscproduktów1.setAttribute("class", "1");
          iloscproduktów1.readOnly = true;
          jedenprodukt1.appendChild(iloscproduktów1);
          var zwieksz1 = document.createElement("button");
          zwieksz1.setAttribute("id", "zwieksz");
          var zwiekszcontent1 = document.createTextNode("+");
          zwieksz1.appendChild(zwiekszcontent1);
          jedenprodukt1.appendChild(zwieksz1);
          var zdjeciekoszyk1 = document.createElement("img");
          zdjeciekoszyk1.setAttribute("id", "zdjeciekoszyk");
          jedenprodukt1.appendChild(zdjeciekoszyk1);
          var nazwaproduktuwkoszyku1 = document.createElement("h1");
          nazwaproduktuwkoszyku1.setAttribute("id", "nazwaproduktuwkoszyku");
          jedenprodukt1.appendChild(nazwaproduktuwkoszyku1);
          var delete1 = document.createElement("div");
          delete1.setAttribute("id", "delete");
          delete1.setAttribute("class", originalSrc);
          delete1.setAttribute("onClick", "ponownykoszyk(this.target)");
          var krzyz1 = document.createElement("span");
          krzyz1.setAttribute("id", "krzyz");
          var krzyzcontent1 = document.createTextNode("x");
          krzyz1.appendChild(krzyzcontent1);
          krzyz1.setAttribute("class", originalSrc);
          delete1.appendChild(krzyz1);
          jedenprodukt1.appendChild(delete1);
          var zmniejsz1 = document.createElement("button");
          zmniejsz1.setAttribute("id", "zmniejsz");
          var zmniejszcontent1 = document.createTextNode("-");
          zmniejsz1.appendChild(zmniejszcontent1);
          jedenprodukt1.appendChild(zmniejsz1);
          var cenaproduktuwkoszyku1 = document.createElement("h4");
          cenaproduktuwkoszyku1.setAttribute("id", "cenaproduktuwkoszyku");
          jedenprodukt1.appendChild(cenaproduktuwkoszyku1);
          maxzdj.classList.remove("open");
          informacje.classList.remove("open");
          zdjeciekoszyk1.src = originalSrc;
          nazwaproduktuwkoszyku1.innerText = naglowekdokoszyka;
          cenaproduktuwkoszyku1.innerText = cenadokoszyka;
          zmniejsz1.style.opacity = "1";
          zwieksz1.style.opacity = "1";
          iloscproduktów1.style.opacity = "1";
          Koszykwkoszyku.style.opacity = "0";
          napisKoszykjestpusty.style.opacity = "0";
          Razem.style.opacity = "1";
          Zamawianie.style.opacity = "1";
          napisNictuniema.style.opacity = "0";
          jedenprodukt1.style.opacity = "1";
          var kolkoilicznik = document.getElementById("kolkoilicznik");
          kolkoilicznik.style.opacity = "1";
          var pozycja = originalSrcs.indexOf(originalSrc);
          originalSrcsout.push(originalSrc);
          originalSrcs.splice(pozycja, 1);
        }
        var całysłoik = document.getElementById("słoiksklep").innerHTML;
        localStorage.setItem("całysłoik", całysłoik);
        try {
          var cenaproduktuwkoszyku12 = document.querySelectorAll(
            "#cenaproduktuwkoszyku"
          );
          zwieksz1.addEventListener("click", function () {
            iloscproduktów1.style.color = "rgb(0,0,0)";
            iloscproduktów1.value = parseInt(iloscproduktów1.value) + 1;
            iloscproduktów1.setAttribute("class", iloscproduktów1.value);
            var punktodniesienia = cenazawszystko.innerHTML.replace("zł", "");
            var rodzic = zwieksz1.parentNode;
            var dziecko = rodzic.lastChild;
            var klasadziecka = dziecko.textContent;
            var samaliczba2 = klasadziecka;
            var liczba2 = samaliczba2.replace("zł", "");
            var tojestto = Number(punktodniesienia) + Number(liczba2);
            var tojesttozzł = tojestto + "zł";
            cenazawszystko.innerHTML = tojesttozzł;
            var całysłoik = document.getElementById("słoiksklep").innerHTML;
            localStorage.setItem("całysłoik", całysłoik);
          });
          zmniejsz1.addEventListener("click", function zmniejszanie() {
            var samaliczba2 = 0;
            var punktodniesienia = cenazawszystko.innerHTML.replace("zł", "");
            var rodzic = zmniejsz1.parentNode;
            var dziecko = rodzic.lastChild;
            var klasadziecka = dziecko.textContent;
            var samaliczba2 = klasadziecka;
            var liczba2 = samaliczba2.replace("zł", "");
            if (iloscproduktów1.value >= 1) {
              var tojestto = Number(punktodniesienia) - Number(liczba2);
              var tojesttozzł = tojestto + "zł";
              cenazawszystko.innerHTML = tojesttozzł;
            } else if (iloscproduktów1.value < 1) {
              iloscproduktów1.value = 1;
            }
            iloscproduktów1.value = parseInt(iloscproduktów1.value) - 1;
            iloscproduktów1.setAttribute("class", iloscproduktów1.value);
            if (iloscproduktów1.value == 0) {
              iloscproduktów1.style.color = "rgb(255, 0, 0)";
            }
            if (iloscproduktów1.value > 0) {
              iloscproduktów1.style.color = "rgb(0,0,0)";
            }
            var całysłoik = document.getElementById("słoiksklep").innerHTML;
            localStorage.setItem("całysłoik", całysłoik);
          });
          samaliczba2 = 0;
          for (
            var cenajednegoproduktu = 0;
            cenajednegoproduktu < cenaproduktuwkoszyku12.length;
            cenajednegoproduktu++
          ) {
            var cenajednegoproduktu1 =
              cenaproduktuwkoszyku12[cenajednegoproduktu].innerHTML;
            var samaliczba = cenajednegoproduktu1.replace("zł", "");
            var rodzic = cenaproduktuwkoszyku12[cenajednegoproduktu].parentNode;
            var dziecko = rodzic.firstChild;
            var klasadziecka = dziecko.className;
            var iloscproduktu = klasadziecka * samaliczba;
            var samaliczba2 = Number(samaliczba2) + Number(iloscproduktu);
            var liczba2 = samaliczba2 + "zł";
            cenazawszystko.innerHTML = liczba2;
          }
          delete1.addEventListener("click", function () {
            liczniktakio = liczniktakio - 1;
            var rodzicek = delete1.parentNode;
            var iloscproduktów1 = rodzicek.firstChild;
            var ceneuszproduktu1 = rodzicek.lastChild;
            var ceneuszproduktu = ceneuszproduktu1.innerHTML.replace("zł", "");
            var liczbaproduktu = iloscproduktów1.className;
            var liczbadozamiany =
              Number(liczbaproduktu) * Number(ceneuszproduktu);
            var razemdoodjecia = cenazawszystko.innerHTML.replace("zł", "");
            var cenapofakcie = Number(razemdoodjecia) - Number(liczbadozamiany);
            var cenapofakciezł = cenapofakcie + "zł";
            cenazawszystko.innerHTML = cenapofakciezł;
            document.getElementById("licznik").textContent = liczniktakio;
            if (liczniktakio == 0) {
              kolkoilicznik.style.opacity = "0";
            }
          });
        } catch (err) {
          var Jestjuztakiprodukt = document.getElementById(
            "Jestjuztakiprodukt"
          );
          Jestjuztakiprodukt.style.color = "red";
        }
        document.getElementById("licznik").textContent = liczniktakio;
        delete1.onclick = function ponownykoszyk(clicked_class) {
          clicked_class = event.target;
          var pozycja = originalSrcsout.indexOf(clicked_class.className);
          originalSrcsout.splice(pozycja, 1);
          originalSrcs.push(clicked_class.className);
        };
        if (delete1) {
          delete1.addEventListener("click", function () {
            zamowieniektores1.remove();
            var całysłoik = document.getElementById("słoiksklep").innerHTML;
            localStorage.setItem("całysłoik", całysłoik);
            var liczbaproduktowkoszyk = document.getElementById(
              "containerkoszyka"
            );
            if (!liczbaproduktowkoszyk) {
              Koszykwkoszyku.style.opacity = "1";
              napisKoszykjestpusty.style.opacity = "1";
              Razem.style.opacity = "0";
              Zamawianie.style.opacity = "0";
              napisNictuniema.style.opacity = "1";
            }
          });
        }
      };
    });
  });
}

zdjęcia();

maxzdj.addEventListener("click", function (e) {
  if (e.target.classList.contains("maxzdj")) {
    maxzdj.classList.remove("open");
    informacje.classList.remove("open");
    var Jestjuztakiprodukt = document.getElementById("Jestjuztakiprodukt");
    Jestjuztakiprodukt.style.color = "white";
  }
});

/*

var typ = document.getElementById("#typ").value;
var Sortowanie = document.getElementById("#Sortowanie").value;

if (Sortowanie == "Cena min") {

} 
else if (Sortowanie == "Cena max") {

} 

else if (Sortowanie == "Popularne") {

}
*/

/*
if (typ == "Natura") {

} 
else if (typ == "Świecznik") {

} 

else if (typ == "Pojemnik") {

}
*/
