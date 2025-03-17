// Mảng chứa các URL của ảnh
const images = [
    '../landing/assets/images/image1.png',  // Ảnh đầu tiên
    '../landing/assets/images/image2.png',  // Ảnh thứ hai
    '../landing/assets/images/image3.png'   // Ảnh thứ ba (thêm ảnh mới)
];

let currentImageIndex = 0; // Đặt chỉ số ảnh hiện tại là 0 (ảnh đầu tiên)

// Khi trang web tải, thiết lập ảnh nền đầu tiên
document.querySelector('.swap').style.backgroundImage = `url("${images[currentImageIndex]}")`;

document.querySelector('.turn_left').addEventListener('click', function() {
    // Giảm chỉ số ảnh (quay lại ảnh trước đó)
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    // Thay đổi ảnh nền
    document.querySelector('.swap').style.backgroundImage = `url("${images[currentImageIndex]}")`;
});

document.querySelector('.turn_right').addEventListener('click', function() {
    // Tăng chỉ số ảnh (chuyển đến ảnh tiếp theo)
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // Thay đổi ảnh nền
    document.querySelector('.swap').style.backgroundImage = `url("${images[currentImageIndex]}")`;
});
