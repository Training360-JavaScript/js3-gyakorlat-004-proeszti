const checkVisa = {
    //4xxx xxxx xxxx xxxx össz 16 szám
    pattern: {
        visa: /^[52]\d{15}$/,
    },
    validate(text, type) {
        text.match(this.pattern[type]) ? true : false;
    }
};

export default checkVisa;