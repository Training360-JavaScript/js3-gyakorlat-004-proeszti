
// Fájl: solutions/ip.js
// Függvény neve: checkIP
// Export: a checkIP függvény legyen a default export!
// Írj reguláris kifejezést IP-cím validálására! Teszteld is a megoldásod!
// A checkIP függvényben valósítsd meg a validálást, a paraméterként kapott IP-címet validálja le a függvény, és true|false legyen a visszatérési értéke attól függően, hogy valid|invalid a szám.


const checkIP = (num) => {

    const pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    // 172.16.254.1 
    return num.match(pattern) ? true : false;
}


export default checkIP;
