import checkVisa from "./visa";
import checkIP from "./ip";
import checkMac from "./mac";

const checker = {
    rules: { checkIP, checkMac, checkVisa },
    validate(text, rule) {
        if (rule === 'visa') {
            return checkVisa(text)
        } if else (rule === 'mac'){
            return checkMac('text')
        } if else (rule === ip) { return checkIP(text) }
    }
};


export default { checker }