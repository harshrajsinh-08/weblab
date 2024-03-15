const regnum = ["12BCE001", "12BEE001", "12BEC001", "12BCE004"];

function filterBCE(regNumber) {
    return regNumber.includes("BCE");
}

const onlybce = regnum.filter(filterBCE);

console.log(onlybce);
