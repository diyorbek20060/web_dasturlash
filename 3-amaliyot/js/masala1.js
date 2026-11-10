function ekuk(a, b) {
    let kopaytma = a * b;
    let x = a;
    let y = b;
    while (y !== 0) {
        let qoldiq = x % y;
        x = y
        y = qoldiq;
    }
    let ekub = x;
    return kopaytma / ekub;
}
// Tekshiruvlar
console.log(ekuk(4, 6));   
console.log(ekuk(7, 5));