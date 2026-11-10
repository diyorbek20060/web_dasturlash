function engUzunSoz(s) {
    let sozlar = s.trim().split(/\s+/);
    if (sozlar.length === 0 || sozlar[0] === "") return "";
    let engUzuni = sozlar[0];
    for (let i = 1; i < sozlar.length; i++) {
        if (sozlar[i].length > engUzuni.length) {
            engUzuni = sozlar[i];
        }
    }
    return engUzuni;
}
// Tekshiruvlar
console.log(engUzunSoz("veb dasturlash juda qiziqarli")); 
console.log(engUzunSoz("bir ikki uch"));