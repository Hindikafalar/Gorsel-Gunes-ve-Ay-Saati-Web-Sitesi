function saatiGuncelle () {
    let now = new Date();
    const saat = now.toLocaleTimeString("tr-TR");
    const ay = now.toLocaleString('tr-TR', {month:'long'});
    const gun = now.getDate();
    const yil = now.getFullYear();
    document.getElementById("zaman").innerText = saat;
    document.getElementById("tarih").innerText = gun + " " + ay + " " + yil;
}


function updateSunAndMoon() {
    let now = new Date();
    let hour = now.getHours() + now.getMinutes() / 60;

    // --- GÜNEŞ ---
    let sunDist = Math.abs(hour - 12);
    let sunRatio = sunDist / 12; 
    let sunTop = 10 + sunRatio * 70;
    document.querySelector(".sun").style.top = sunTop + "%";

    // --- AY ---
    let moonDist = Math.abs((hour + 12) % 24 - 12);
    let moonRatio = moonDist / 12;
    let moonTop = 10 + moonRatio * 70;
    document.querySelector(".moon").style.top = moonTop + "%";
}

function updateSky () {
    let now = new Date();
    let hour = now.getHours() + now.getMinutes() / 60;

    let bg;

    if (hour >= 6 && hour < 12) {                 // Sabah
        bg = "linear-gradient(to bottom, #7ecfff 0%, #b7e7ff 40%, #e8f8ff 100%)"
        document.querySelector(".timeHead").style.color = "black";
        document.querySelector(".dateHead").style.color = "black";
        document.querySelector(".sun").style.display = "block";
        document.querySelector(".timeHead").style.textShadow = "None";
        document.querySelector(".dateHead").style.textShadow = "None";
        document.querySelector(".moon").style.display = "none";
    } else if (hour >= 12 && hour < 18) {          // Öğleden sonra
        bg = "linear-gradient(to bottom, #a0d8ff 0%, #c0e0ff 40%, #e0f0ff 100%)"
        document.querySelector(".timeHead").style.color = "black";
        document.querySelector(".dateHead").style.color = "black";
        document.querySelector(".sun").style.display = "block";
        document.querySelector(".moon").style.display = "none";
    } else if (hour >= 18 && hour < 20) {           // Gün Batımı
        bg = "linear-gradient(to bottom, #ff9a3c 0%, #ff6e6c 40%, #c36dbc 100%)"
        document.querySelector(".timeHead").style.color = "black";
        document.querySelector(".dateHead").style.color = "black";
        document.querySelector(".sun").style.display = "block";
        document.querySelector(".moon").style.display = "none";
        document.querySelector(".sun").style.background = "radial-gradient(circle,rgba(255, 139, 100, 1) 0%,rgba(255, 123, 0, 1) 40%,rgba(255, 106, 0, 1) 80%)";
    } else {                                        // Gece
        bg = "radial-gradient(circle at 50% -20%, #4a6fa5, #1f2a44 60%, #0d1220 100%)"
        document.querySelector(".timeHead").style.color = "white";
        document.querySelector(".dateHead").style.color = "white";
        document.querySelector(".sun").style.display = "none";
        document.querySelector(".moon").style.display = "block";
        document.querySelector(".timeHead").style.textShadow = "2px 2px 5px rgba(0,0,0,0.5)";
        document.querySelector(".dateHead").style.textShadow = "2px 2px 5px rgba(0,0,0,0.5)";
    }

    document.body.style.background = bg;
}

function updateIcon () {
    let now = new Date();
    let hour = now.getHours();

    let icon = document.querySelector("link[rel='icon']");

    if (hour >= 18 || hour < 6) { // Gece
        icon.href = "moonIcon.png";
    } else { // Gündüz
        icon.href = "sunIcon.png";
    }
}


saatiGuncelle();
updateSunAndMoon();
updateSky();
updateIcon();

setInterval(saatiGuncelle, 1000);
setInterval(updateSunAndMoon, 60 * 1000)
setInterval(updateSky, 60 * 1000);
setInterval(updateIcon, 60 * 1000);