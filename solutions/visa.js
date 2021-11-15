const checkVisa = {
    //4xxx xxxx xxxx xxxx össz 16 szám
    pattern: {
        visa: /^4\d{15}$/,
    },
    validate(text, type) {
        return text.match(this.pattern[type]) ? true : false;
    }
};

export default checkVisa;