let weight = parseFloat(prompt("Nhập cân nặng (kg):"));
let height = parseFloat(prompt("Nhập chiều cao (m):"));

let bmi = weight / (height * height);

if (bmi < 18.5) {
    console.log("Gầy");
} else if (bmi >= 25) {
    console.log("Béo");
} else {
    console.log("Bình thường");
}
