const checkVisa = (num) => {
    //4xxx xxxx xxxx xxxx össz 16 szám
    const pattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    return num.match(pattern) ? true : false;
};
// /^4\d{15})$/
export default checkVisa;