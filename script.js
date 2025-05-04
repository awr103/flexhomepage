// Language data
const translations = {
    en: {
        'nav.about': 'About Us',
        'nav.teachers': 'Our Teachers',
        'nav.test': 'Take English Test',
        'nav.classes': 'Our Classes',
        'nav.news': 'News',
        'hero.title': 'Welcome to Flex English',
        'hero.subtitle': 'Your journey to English fluency starts here',
        'hero.button': 'Start Your English Test',
        'hero.tagline': '✅ Free. Fast. Accurate. AI-powered.',
        'hero.cta': 'Find Your English Level in 30 Minutes',
        'about.title': 'About Our Center',
        'about.text1': 'At Flex English, we\'re dedicated to helping you achieve your language learning goals. Our innovative approach combines traditional teaching methods with modern technology to create an engaging and effective learning environment.',
        'about.text2': 'Whether you\'re a beginner or looking to perfect your English skills, our experienced teachers and comprehensive programs are designed to meet your needs.',
        'about.philosophy.title': 'Our Philosophy',
        'about.philosophy.text': 'At Flex, our philosophy is all about building confidence. Many students are afraid to speak English, so we create an environment where students feel comfortable, have fun, and are free to make mistakes. We want every student to feel confident so they can truly flex their English!',
        'teachers.title': 'Our Teachers',
        'teachers.teacher1.name': 'Alexander Rieger',
        'teachers.teacher1.qualifications': 'TESOL certificate, 10 years experience teaching in Vietnam, fun and engaging lessons, and a co-founder of Flex English Center.',
        'teachers.teacher2.name': 'Quan Le',
        'teachers.teacher2.qualifications': 'Co-founder, Vietnamese teaching certificate, studied in America, specializes in IELTS, IELTS 8.0, excellent at academic teaching and writing',
        'teachers.teacher3.name': 'Liam Fleming',
        'teachers.teacher3.qualifications': 'Experienced teacher from the United Kingdom, TESOL certificate, 10 years experience, specializes in young children.',
        'teachers.teacher4.name': 'David',
        'teachers.teacher4.qualifications': "Experienced teacher with teenagers. Holds a bachelor's degree in education.",
        'teachers.teacher5.name': 'Chau',
        'teachers.teacher5.qualifications': "Bachelor's degree in education. IELTS 7.0. Specializes in teenagers and adults.",
        'teachers.teacher6.name': 'Joyce (TA)',
        'teachers.teacher6.qualifications': 'Teaching Assistant. Helps teachers in class, supports students, and communicates with parents.',
        'test.title': 'Take Our English Test',
        'test.description': 'Discover your current English level with our AI-powered assessment',
        'test.button': 'Start Test Now',
        'footer.contact': 'Contact Us',
        'footer.follow': 'Follow Us',
        'footer.rights': 'All rights reserved.',
        'classes.class1.title': 'First Flight (Ages 3–5)',
        'classes.class2.title': 'Power Up (Ages 6–12)',
        'classes.class3.title': 'Teens',
        'classes.class4.title': 'IELTS',
        'classes.class5.title': 'Adults',
        'classes.class6.title': 'Communication',
        'classes.class7.title': 'Business English',
        'classes.join': 'Join Class'
    },
    vi: {
        'nav.about': 'Về Chúng Tôi',
        'nav.teachers': 'Giáo Viên',
        'nav.test': 'Làm Bài Kiểm Tra',
        'nav.classes': 'Các Lớp Học',
        'nav.news': 'Tin Tức',
        'hero.title': 'Chào Mừng Đến Với Flex English',
        'hero.subtitle': 'Hành trình chinh phục tiếng Anh của bạn bắt đầu từ đây',
        'hero.button': 'Bắt Đầu Bài Kiểm Tra',
        'hero.tagline': '✅ <b>Miễn phí. Nhanh chóng. Chính xác. AI hỗ trợ.</b>',
        'hero.cta': 'Tìm trình độ tiếng Anh của bạn chỉ trong 30 phút',
        'about.title': 'Về Trung Tâm',
        'about.text1': 'Tại Flex English, chúng tôi cam kết giúp bạn đạt được mục tiêu học ngôn ngữ. Phương pháp tiếp cận sáng tạo của chúng tôi kết hợp phương pháp giảng dạy truyền thống với công nghệ hiện đại để tạo ra môi trường học tập hiệu quả và hấp dẫn.',
        'about.text2': 'Dù bạn là người mới bắt đầu hay muốn hoàn thiện kỹ năng tiếng Anh, đội ngũ giáo viên giàu kinh nghiệm và chương trình học toàn diện của chúng tôi được thiết kế để đáp ứng nhu cầu của bạn.',
        'about.philosophy.title': 'Triết Lý Của Chúng Tôi',
        'about.philosophy.text': 'Tại Flex, triết lý của chúng tôi là giúp học viên tự tin hơn. Nhiều học viên sợ nói tiếng Anh, vì vậy chúng tôi tạo ra một môi trường nơi các em cảm thấy thoải mái, vui vẻ và tự do mắc lỗi. Chúng tôi muốn mọi học viên đều tự tin để có thể "flex" tiếng Anh của mình!',
        'teachers.title': 'Đội Ngũ Giáo Viên',
        'teachers.teacher1.name': 'Alexander Rieger',
        'teachers.teacher1.qualifications': 'Chứng chỉ TESOL, 10 năm kinh nghiệm giảng dạy tại Việt Nam, bài học vui nhộn và hấp dẫn, đồng sáng lập Trung tâm Flex English.',
        'teachers.teacher2.name': 'Quan Le',
        'teachers.teacher2.qualifications': 'Đồng sáng lập, chứng chỉ giảng dạy tiếng Việt, từng học tập tại Mỹ, chuyên luyện thi IELTS, đạt IELTS 8.0, xuất sắc trong giảng dạy học thuật và kỹ năng viết',
        'teachers.teacher3.name': 'Liam Fleming',
        'teachers.teacher3.qualifications': 'Giáo viên giàu kinh nghiệm đến từ Vương quốc Anh, chứng chỉ TESOL, 10 năm kinh nghiệm, chuyên dạy trẻ nhỏ.',
        'teachers.teacher4.name': 'David',
        'teachers.teacher4.qualifications': 'Giáo viên giàu kinh nghiệm với học sinh tuổi teen. Có bằng cử nhân sư phạm.',
        'teachers.teacher5.name': 'Chau',
        'teachers.teacher5.qualifications': 'Cử nhân sư phạm. IELTS 7.0. Chuyên dạy thiếu niên và người lớn.',
        'teachers.teacher6.name': 'Joyce (TA)',
        'teachers.teacher6.qualifications': 'Trợ giảng. Hỗ trợ giáo viên trong lớp, hỗ trợ học viên và trao đổi với phụ huynh.',
        'test.title': 'Làm Bài Kiểm Tra Tiếng Anh',
        'test.description': 'Khám phá trình độ tiếng Anh hiện tại của bạn với bài đánh giá sử dụng AI',
        'test.button': 'Bắt Đầu Ngay',
        'footer.contact': 'Liên Hệ',
        'footer.follow': 'Theo Dõi Chúng Tôi',
        'footer.rights': 'Bảo lưu mọi quyền.',
        'classes.class1.title': 'First Flight (3–5 tuổi)',
        'classes.class2.title': 'Power Up (6–12 tuổi)',
        'classes.class3.title': 'Thiếu Niên',
        'classes.class4.title': 'IELTS',
        'classes.class5.title': 'Người Lớn',
        'classes.class6.title': 'Giao Tiếp',
        'classes.class7.title': 'Tiếng Anh Thương Mại',
        'classes.join': 'Đăng Ký'
    }
};

// Language switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('language') || 'en';

    // Set initial language
    updateLanguage(currentLang);

    // Add click event listeners to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            currentLang = lang;
            localStorage.setItem('language', lang);
            updateLanguage(lang);
            updateActiveButton(button);
        });
    });

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                if (key === 'hero.tagline') {
                    element.innerHTML = translations[lang][key];
                } else if (element.tagName === 'INPUT' || element.tagName === 'BUTTON' || element.tagName === 'TEXTAREA') {
                    element.value = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    function updateActiveButton(activeButton) {
        langButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
}); 