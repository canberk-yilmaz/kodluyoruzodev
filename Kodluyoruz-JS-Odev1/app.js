const getUserName = () => {
    kullaniciAdi = prompt('Merhaba, Adınızı Öğrenebilir Miyim ?')
    document.getElementById('test').innerHTML = `${kullaniciAdi}`[0].toUpperCase() + `${kullaniciAdi}`.slice(1)
}

getUserName()

gunler = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
let newDate;
let time;

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

const getTime = () => {
    const dateObj = new Date();
    let month = addZero(dateObj.getMonth()+1);
    let day = addZero(dateObj.getDate());
    let year = dateObj.getUTCFullYear();
    let weekDay = gunler[dateObj.getDay()-1];
    newDate = "Bugünün Tarihi: " + '<br>' + day + "/" + month + "/" + year + " - " + weekDay;

    
    let sec = addZero(dateObj.getSeconds());
    let min = addZero(dateObj.getMinutes());
    let hour = addZero(dateObj.getHours());
        
    time = "Saat: " + hour + ":" + min + ":" + sec

    document.getElementById('tarih').innerHTML = `${newDate}`
    document.getElementById('saat').innerHTML = `${time}`    

}
setInterval(getTime, 1000);







// console.log(Date.prototype.getDay())