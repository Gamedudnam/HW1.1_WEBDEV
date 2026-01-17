/* === ไฟล์ script.js === */

// 1. ฟังก์ชันเปิด Popup (รับชื่อวิชา และ รายละเอียด มาแสดง)
function openPopup(title, description) {
    // อ้างอิงไปยังกล่องข้อความใน HTML
    var modal = document.getElementById("courseModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalDesc = document.getElementById("modalDesc");

    // เอาข้อความที่รับมา ใส่เข้าไปในกล่อง
    modalTitle.innerText = title;
    modalDesc.innerHTML = description; // ใช้ innerHTML เพื่อให้ใส่ <br> เว้นบรรทัดได้

    // สั่งให้ Popup แสดงตัว (เปลี่ยนจาก display:none เป็น flex)
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
    // เช็คว่าสิ่งที่กด คือตัวพื้นหลังสีดำใช่ไหม (ถ้าใช่ ให้ปิด)
    if (event.target == modal) {
        modal.style.display = "none";
    }
}