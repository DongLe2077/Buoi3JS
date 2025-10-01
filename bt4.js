let userName = prompt("Nhập tên của bạn:");
let password = prompt("Nhập mật khẩu của bạn:");

if (userName === "admin" && password === "123") {
    console.log("Đăng nhập thành công");
} else {
    console.log("Đăng nhập thất bại");
}