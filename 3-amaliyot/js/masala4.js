function satrniSiqish(s) {
    if (s === "") return "";
    let natija = "";
    let sanoq = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            sanoq++;
        } else {
            natija += s[i] + sanoq;
            sanoq = 1;
        }
    }
    return natija;
}
// Tekshiruvlar
console.log(satrniSiqish("aaabccdddd")); 
console.log(satrniSiqish("abc"));