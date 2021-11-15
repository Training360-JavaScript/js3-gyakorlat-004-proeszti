const checkMac = (num) => {
    //00:00:5e:00:53:af
    const pattern = /^*[a-z]{2}:\d{ 2}: \d{ 1}*[A-Z]{1}:\d{2}:\d{ 2}:*[A - Z]{ 2 } $ /;
    return num.match(pattern) ? true : false;
};

export default checkMac;