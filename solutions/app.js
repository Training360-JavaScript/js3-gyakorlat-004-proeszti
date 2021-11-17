
// Fájl: solutions/app.js
// Objektum neve: checker
// Export: a checker objektum legyen a default export!
// Az előző három reguláris kifejezést és a validálást egy objektumon belül készítsd el.
// Importáld be a másik három fájlban található függvényeket, és azokat használd fel az objektumon belül.
// rules: a checker objektumnak legyen egy rules property-je, amely objektumban tárolja a függvényeket.
// validate: validate metódus, amely paraméterként kap egy string-értéket, és azt, hogy melyik mintát kell ráilleszteni, amely lehet ['visa'|'ip'|'mac']. Attól függően hívja meg a rules-ban található függvényeket, hogy mi a minta neve. A visszatérési értéke a kiválasztott függvény visszatérési értéke legyen.

import checkVisa from "./visa";
import checkIP from "./ip";
import checkMac from "./mac";

const checker = {
    rules: { checkIP, checkMac, checkVisa },
    validate(text, rule) {
        if (rule === 'visa') {
            return this.rules.checkVisa(text)
        } if else (rule === 'mac'){
            return this.rules.checkMac('text')
        } if else (rule === 'ip') { return this.rules.checkIP(text) }
    }
};


export default { checker }