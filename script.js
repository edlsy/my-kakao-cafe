// 메뉴 데이터
const menuData = {
    coffee: [
        {
            name: '에스프레소',
            description: '진한 에스프레소의 깊은 맛',
            price: '4,000원'
        },
        {
            name: '아메리카노',
            description: '부드럽고 깔끔한 아메리카노',
            price: '4,500원'
        },
        {
            name: '카페라떼',
            description: '부드러운 우유와 에스프레소의 조화',
            price: '5,000원'
        },
        {
            name: '카푸치노',
            description: '우유 거품이 올라간 클래식한 커피',
            price: '5,000원'
        },
        {
            name: '카라멜 마키아토',
            description: '달콤한 카라멜과 에스프레소',
            price: '5,500원'
        },
        {
            name: '바닐라라떼',
            description: '바닐라 시럽이 들어간 부드러운 라떼',
            price: '5,500원'
        }
    ],
    beverage: [
        {
            name: '그린티라떼',
            description: '진한 녹차와 우유의 만남',
            price: '5,000원'
        },
        {
            name: '초콜릿라떼',
            description: '달콤한 초콜릿과 우유',
            price: '5,000원'
        },
        {
            name: '레몬에이드',
            description: '상큼한 레몬에이드',
            price: '4,500원'
        },
        {
            name: '자몽에이드',
            description: '시원한 자몽에이드',
            price: '4,500원'
        },
        {
            name: '아이스티',
            description: '시원한 복숭아 아이스티',
            price: '4,000원'
        },
        {
            name: '유자차',
            description: '따뜻한 유자차',
            price: '4,500원'
        }
    ],
    dessert: [
        {
            name: '치즈케이크',
            description: '부드러운 뉴욕 스타일 치즈케이크',
            price: '6,500원'
        },
        {
            name: '초콜릿 케이크',
            description: '진한 초콜릿 케이크',
            price: '6,500원'
        },
        {
            name: '마카롱 세트',
            description: '다양한 맛의 마카롱 4개',
            price: '8,000원'
        },
        {
            name: '브라우니',
            description: '진한 초콜릿 브라우니',
            price: '5,000원'
        },
        {
            name: '크루아상',
            description: '바삭한 버터 크루아상',
            price: '4,500원'
        },
        {
            name: '머핀',
            description: '따뜻한 블루베리 머핀',
            price: '4,000원'
        }
    ]
};

// DOM 요소
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const tabButtons = document.querySelectorAll('.tab-button');
const menuGrid = document.getElementById('menuGrid');

// 모바일 메뉴 토글
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 스크롤 시 네비게이션 스타일 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// 메뉴 렌더링 함수
function renderMenu(category) {
    menuGrid.innerHTML = '';
    const items = menuData[category];
    
    items.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.style.animationDelay = `${index * 0.1}s`;
        menuItem.innerHTML = `
            <h3 class="menu-item-name">${item.name}</h3>
            <p class="menu-item-description">${item.description}</p>
            <p class="menu-item-price">${item.price}</p>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// 탭 버튼 이벤트
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 활성 탭 변경
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // 메뉴 렌더링
        const category = button.getAttribute('data-category');
        renderMenu(category);
    });
});

// 초기 메뉴 로드 (커피 메뉴)
renderMenu('coffee');

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 섹션 요소들 관찰
document.querySelectorAll('section > .container > *').forEach(el => {
    observer.observe(el);
});

// 부드러운 스크롤 (네비게이션 링크)
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// CTA 버튼 스크롤
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        const menuSection = document.querySelector('#menu');
        if (menuSection) {
            const offsetTop = menuSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

