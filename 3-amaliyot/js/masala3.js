function ikkiBaravar(arr) {
    let natija = [];
    for (let i = 0; i < arr.length; i++) {
        natija.push(arr[i] * 2);
    }
    return natija;
}
// Tekshiruvlar
console.log(ikkiBaravar([1, 5, 10])); 
console.log(ikkiBaravar([-3, 0]));