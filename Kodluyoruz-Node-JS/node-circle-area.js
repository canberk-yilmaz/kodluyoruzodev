const r = process.argv.slice(2);
const pi = 3.14;

function circleArea(r) {
    area = pi * (r ** 2);
    return area;
}

console.log(`Konsol Çıktısı: Yarıçapı (${r}) olan dairenin alanı: ${circleArea(r)} olarak bulunmuştur.`);
