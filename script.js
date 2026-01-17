/* === ไฟล์ script.js (ฉบับอัปเดต เพิ่มรูปภาพ) === */

// 1. ฟังก์ชันเปิด Popup (รับ 3 ค่า: ชื่อวิชา, รายละเอียด, และ ลิ้งก์รูปภาพ)
function openPopup(title, description, imgUrl) {
    // อ้างอิงไปยังกล่องข้อความใน HTML
    var modal = document.getElementById("courseModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalDesc = document.getElementById("modalDesc");
    var modalImg = document.getElementById("modalImg"); // ✅ เพิ่มการอ้างอิงรูปภาพ

    // ใส่ข้อความ
    modalTitle.innerText = title;
    modalDesc.innerHTML = description;

    // ✅ ส่วนจัดการรูปภาพ
    if (imgUrl) {
        // ถ้ามีการส่งลิ้งก์รูปมา (imgUrl ไม่ว่าง)
        modalImg.src = imgUrl;       // ใส่ path รูป
        modalImg.style.display = "block"; // สั่งให้แสดงรูป
    } else {
        // ถ้าไม่ได้ส่งลิ้งก์รูปมา
        modalImg.style.display = "none";  // ซ่อนรูปไปเลย
    }

    // สั่งให้ Popup แสดงตัว
    modal.style.display = "flex";
}

// 2. ฟังก์ชันปิด Popup (เมื่อกดปุ่มกากบาท)
function closePopup() {
    var modal = document.getElementById("courseModal");
    modal.style.display = "none";
}

// 3. ฟังก์ชันปิด Popup (เมื่อกดพื้นที่สีดำข้างนอก)
window.onclick = function(event) {
    var modal = document.getElementById("courseModal");
    // เช็คว่าสิ่งที่กด คือตัวพื้นหลังสีดำใช่ไหม
    if (event.target == modal) {
        modal.style.display = "none";
    }
}