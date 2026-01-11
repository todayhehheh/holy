// logo_config.js
// 태그 ID(prefix)에 따라 로고와 링크를 설정하는 파일입니다.

const logoConfig = [
    { 
        prefix: 'church_',           // 이 글자로 시작하는 태그 ID면
        img: 'images/church_logo.png', // 이 로고를 보여주고
        link: 'https://www.google.com' // 클릭 시 여기로 이동
    },
    { 
        prefix: 'kids_', 
        img: 'images/kids_logo.png', 
        link: '#' // 링크 없을 땐 #
    },
    { 
        prefix: 'bigger_', 
        img: 'images/bigger.png', 
        link: 'https://naver.com' 
    }
    // 여기에 계속 추가 가능 {...},
];
