// ==============================
// THÔNG BÁO KHI GỬI GÓP Ý
// ==============================

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Cảm ơn bạn đã gửi góp ý!");

        form.reset();
    });
}

// ==============================
// NÚT BACK TO TOP
// ==============================

// Tạo nút
const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.id = "topBtn";
document.body.appendChild(topButton);

// CSS cho nút
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 16px";
topButton.style.fontSize = "18px";
topButton.style.background = "#e91e63";
topButton.style.color = "white";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

// Hiện nút khi cuộn
window.onscroll = function () {

    if (document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

};

// Cuộn lên đầu
topButton.onclick = function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// ==============================
// HIỆU ỨNG HOVER CHO ẢNH
// ==============================

const images = document.querySelectorAll("img");

images.forEach(function (img) {

    img.addEventListener("mouseover", function () {

        img.style.transform = "scale(1.05)";
        img.style.transition = "0.4s";

    });

    img.addEventListener("mouseout", function () {

        img.style.transform = "scale(1)";

    });

});
