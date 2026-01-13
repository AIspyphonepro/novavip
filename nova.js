document.addEventListener('DOMContentLoaded', () => {
    // تحديد البطاقات
    const cards = [document.getElementById('profileCard'), document.getElementById('menuCard')];
    
    // 1. 3D Tilt Effect (تأثير الميلان ثلاثي الأبعاد)
    if (window.matchMedia("(min-width: 768px)").matches) {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // حساب زاوية الدوران
            const xRotation = ((clientY - innerHeight / 2) / innerHeight) * -5; 
            const yRotation = ((clientX - innerWidth / 2) / innerWidth) * 5;

            // تطبيق الحركة على كل بطاقة مع تأخير بسيط للبطاقة الثانية
            cards.forEach((card, index) => {
                if(card) {
                    const factor = 1 + (index * 0.2); // اختلاف سرعة الحركة للعمق
                    card.style.transform = `
                        perspective(1000px) 
                        rotateX(${xRotation * factor}deg) 
                        rotateY(${yRotation * factor}deg)
                    `;
                }
            });
        });

        // إعادة الوضع الطبيعي عند الخروج
        document.addEventListener('mouseleave', () => {
            cards.forEach(card => {
                if(card) card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    // 2. Parallax Effect للصور
    const profileImg = document.querySelector('.profile-img-wrapper');
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
        
        if(profileImg) {
            profileImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });

});

// وظيفة النقر على الأزرار
function handleClick(element) {
    // إضافة تأثير نقر بسيط
    element.style.transform = 'scale(0.98)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        // هنا يمكنك إضافة كود التوجيه للصفحات
        // window.location.href = "services.html";
        alert("سيتم نقلك إلى: " + element.querySelector('span').innerText);
    }, 150);
}
