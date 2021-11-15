

const checkIP = {
    pattern: {
        // 172.16.254.1 
        ip: /^\d{3}.\d{2}.\d{3}.\{1} $/,
    },
    validate(text, type) {
        return text.match(this.pattern[type]) ? true : false;
    }
}

export default checkIP