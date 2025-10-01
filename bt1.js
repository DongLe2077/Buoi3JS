let giasp = prompt("Nhập giá sản phẩm: ");
let soluong = prompt("Nhập số lượng sản phẩm: ");
total = giasp * soluong;
total -=total * 0.1;
total += total * 0.05;

console.log("Tổng tiền phải trả là: " + total);