
// Fájl: solutions/mac.js
// Függvény neve: checkMac
// Export: a checkMac függvény legyen a default export!
// Írj reguláris kifejezést MAC-cím validálására! Teszteld is a megoldásod!
// A checkMac függvényben valósítsd meg a validálást, a paraméterként kapott MAC-címet validálja le a függvény, és true|false legyen a visszatérési értéke attól függően, hogy valid|invalid a cím.


const checkMac = (num) => {
    //00:00:5e:00:53:af
    const pattern = /^([0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}$/
    return num.match(pattern) ? true : false;
};
// /^*[a-z]{2}:\d{ 2}: \d{ 1}*[A-Z]{1}:\d{2}:\d{ 2}:*[A - Z]{ 2 } $ /
export default checkMac;