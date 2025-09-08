$(function(){
    // PC 메가메뉴 호버
    $('.pc-only, .mega-menu').mouseenter(function(){
        $('.mega-menu').stop().slideDown();
    });
    $('.pc-only, .mega-menu').mouseleave(function(){
        $('.mega-menu').stop().slideUp();
    });
    
    // 태블릿 메뉴 드롭다운 (기존 코드 정리 및 최적화)
    $('.tablet-item').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const $submenu = $(this).next('.tablet-submenu');

        // 다른 서브메뉴 모두 닫기
        $('.tablet-submenu').not($submenu).slideUp(300);

        // 현재 서브메뉴 토글
        $submenu.stop(true, true).slideToggle(300);

        // 2차 메뉴 모두 닫기 초기화
        $('.tablet-submenu-inner.open').removeClass('open').find('.tablet-submenu-depth2').slideUp(300);
    });

    $('.tablet-submenu-title').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const $parentInner = $(this).parent('.tablet-submenu-inner');
        const $depth2 = $parentInner.find('.tablet-submenu-depth2');

        // 다른 2차 메뉴 모두 닫기
        $('.tablet-submenu-inner').not($parentInner).removeClass('open').find('.tablet-submenu-depth2').slideUp(300);

        // 현재 3차 메뉴 토글
        $depth2.stop(true, true).slideToggle(300);
        $parentInner.toggleClass('open');
    });

    // 바깥 영역 클릭 시 태블릿 메뉴 닫기
    $('body').on('click', function() {
        $('.tablet-submenu').slideUp(300);
        $('.tablet-submenu-inner.open').removeClass('open').find('.tablet-submenu-depth2').slideUp(300);
    });

    // 메뉴 클릭 시 body 클릭 이벤트 전파 막기
    $('.tablet-menu, .tablet-submenu-inner').on('click', function(e) {
        e.stopPropagation();
    });

    // 스크롤 시 팝업 띄우기
    window.addEventListener('scroll', function() {
        const popup = document.querySelector('.popup-container');
        if (!popup) return; // 팝업 컨테이너가 없으면 함수 종료

        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollThreshold = documentHeight * 0.2;

        if (scrollPosition > scrollThreshold) {
            popup.classList.add('visible');
        } else {
            popup.classList.remove('visible');
        }
    });
    
    // 햄버거 버튼 클릭 시 사이드바 열기/닫기
    $('.hamburger').click(function(){
        $('.mobile-sidebar').toggleClass('active');
        $('.sidebar-overlay').toggleClass('active');
    });
    
    // 오버레이 클릭 시 사이드바 닫기
    $('.sidebar-overlay').click(function(){
        $('.mobile-sidebar').removeClass('active');
        $('.sidebar-overlay').removeClass('active');
    });

    // 모바일 메뉴 클릭 시 하위 메뉴 토글 (1단 메뉴)
    $('.mobile-menu-title').click(function(){
        const $submenu = $(this).siblings('.mobile-submenu');
        $('.mobile-submenu').not($submenu).slideUp(300);
        $submenu.slideToggle(300);
    });

    // 모바일 메뉴 클릭 시 하위 메뉴 토글 (2단 메뉴)
    $('.mobile-submenu-item .mobile-submenu-title').click(function(e){
        e.preventDefault();
        const $depth2 = $(this).next('.mobile-submenu-depth2');
        
        // 다른 2단 메뉴 모두 닫기
        $('.mobile-submenu-depth2').not($depth2).slideUp(300);
        
        // 현재 2단 메뉴 토글
        $depth2.slideToggle(300);
    });
});