const checkMac = {
    //00:00:5e:00:53:af
    pattern: {
        mac: /^\d{ 2}: \d{ 2}: \d{ 1}* [a - z]{ 1 }: \d{ 2 }: \d{ 2 }:* [a - z]{ 2 } $ /
    },
    validate(text, type) {
        return text.match(this.pattern[type]) ? true : false;
    }

}



export default checkMac;