

const checkIP = (num) => {
    pattern: {
        // 172.16.254.1 
        ip: /^\d{3}.\d{2}.\d{3}.\{1} $/,
    },
    validate(num) {
        return num.match(this.pattern) ? true : false;
    }
}

export default checkIP