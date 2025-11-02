const OTPGenerator = (length = 5) => {
    return Math.floor(100000 + Math.random() * 900000).toString().slice(0, length);
}

module.exports = OTPGenerator