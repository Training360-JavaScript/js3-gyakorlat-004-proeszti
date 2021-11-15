const checkVisa = (num) => {
    //4xxx xxxx xxxx xxxx össz 16 szám
    pattern: {
        visa: /^4\d{15})$/,
    },
    validate(num) {
        return num.match(this.pattern) ? true : false;
    }
};

export default checkVisa;