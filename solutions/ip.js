

const checkIP = (num) => {
    const pattern = /^\d{3}.\d{2}.\d{3}.\d{1} $/;
    // 172.16.254.1 
    return num.match(pattern) ? true : false;
}
}

export default checkIP;