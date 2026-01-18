
// Popup (รับ 3 ค่า: ชื่อวิชา, รายละเอียด, และ ลิ้งก์รูปภาพ)
function openPopup(title, description, imgUrl) {
    var modal = document.getElementById("courseModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalDesc = document.getElementById("modalDesc");
    var modalImg = document.getElementById("modalImg");

    modalTitle.innerText = title;
    modalDesc.innerHTML = description;

    if (imgUrl) {
        modalImg.src = imgUrl; 
        modalImg.style.display = "block"; 
    } else {
        modalImg.style.display = "none";
    }

    modal.style.display = "flex";
}

// ฟังก์ชันปิด Popup (กากบาท)
function closePopup() {
    var modal = document.getElementById("courseModal");
    modal.style.display = "none";
}

// ฟังก์ชันปิด Popup (เมื่อกดพื้นที่สีดำข้างนอก)
window.onclick = function(event) {
    var modal = document.getElementById("courseModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}