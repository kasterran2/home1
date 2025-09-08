$(function(){
    //pc화면 헤더       
    $('.nav-item').mouseover(function(){
        $('.sub-menu').stop().slideDown(500);
    });

    $('.sub-menu').mouseleave(function(){
        $('.sub-menu').stop().slideUp(500);
    });  
    
    $(function(){
        // 오버레이가 없다면 생성
        if ($('.overlay').length === 0) {
            $('body').append('<div class="overlay"></div>');
        }

        // 햄버거 버튼 클릭
        $('.hamburger').click(function(e) {
            e.stopPropagation();
            $('.side-menu').toggleClass('active');
            $('.overlay').toggleClass('active');
            
            // 아이콘 변경
            const icon = $(this).find('i');
            if ($('.side-menu').hasClass('active')) {
                icon.removeClass('fa-bars').addClass('fa-times');
            } else {
                icon.removeClass('fa-times').addClass('fa-bars');
            }
        });

        // 오버레이 클릭 시 메뉴 닫기
        $('.overlay').click(function() {
            $('.side-menu').removeClass('active');
            $('.overlay').removeClass('active');
            $('.hamburger i').removeClass('fa-times').addClass('fa-bars');
        });

        // 모든 사이드메뉴 헤더에 클릭 이벤트 (수정된 부분)
        $('.side-menu-header').click(function() {
            const $submenu = $(this).next('.side-submenu');
            const isActive = $submenu.hasClass('active');
            
            // 다른 모든 서브메뉴 닫기 (아코디언 효과)
            $('.side-submenu').removeClass('active');
            $('.side-menu-header').removeClass('active');
            
            // 클릭한 서브메뉴가 닫혀있었다면 열기
            if (!isActive) {
                $submenu.addClass('active');
                $(this).addClass('active');
            }
        });

        
    });
})