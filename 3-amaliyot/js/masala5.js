function pufakchaliSaralash(arr) {
    let a = [...arr];
    let n = a.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                let vaqtinchalik = a[j];
                a[j] = a[j + 1];
                a[j + 1] = vaqtinchalik;
            }
        }
    }
    return a;
}
// Tekshiruvlar
console.log(pufakchaliSaralash([5, 1, 4, 2, 8])); 
console.log(pufakchaliSaralash([3, -1, 3]));