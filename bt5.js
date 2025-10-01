let year = prompt("Nhập năm:");
if (year > 0 ){
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(year + " là năm nhuận");
    } else {
        console.log(year + " không phải là năm nhuận");
    }
}