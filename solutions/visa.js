
// Fájl: solutions/visa.js
// Függvény neve: checkVisa
// Export: a checkVisa függvény legyen a default export!
// Írj reguláris kifejezést Visa típusú bankkártyák számának validálására! Teszteld is a megoldásod!
// A checkVisa függvényben valósítsd meg a validálást, a paraméterként kapott kártyaszámot validálja le a függvény, és true|false legyen a visszatérési értéke attól függően, hogy valid|invalid a szám.

const checkVisa = (num) => {
    //4xxx xxxx xxxx xxxx össz 16 szám
    const pattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    return num.match(pattern) ? true : false;
};

export default checkVisa;