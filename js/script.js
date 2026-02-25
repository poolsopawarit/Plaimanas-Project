// รอให้หน้าเว็บ (HTML) โหลดเสร็จสมบูรณ์ก่อน ค่อยให้ JavaScript เริ่มทำงาน
document.addEventListener('DOMContentLoaded', () => {
    
    // ดึงปุ่มเมนูสำหรับหน้าจอมือถือมาเก็บไว้ในตัวแปร
    const mobileBtn = document.getElementById('mobileMenuBtn');
    
    // เช็กว่ามีปุ่มนี้อยู่ในหน้าเว็บจริงๆ ถึงจะเพิ่มเหตุการณ์การคลิก
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // จำลองการทำงานเมื่อกดปุ่มแฮมเบอร์เกอร์บนมือถือ
            // (เวลาทำงานจริง คุณสามารถเขียนโค้ดเพิ่มคลาสเพื่อโชว์/ซ่อน เมนู Sidebar ตรงนี้ได้ครับ)
            alert('เปิดเมนูสำหรับหน้าจอมือถือ!');
        });
    }

    
});