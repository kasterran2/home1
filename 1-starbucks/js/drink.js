$(function(){
    // 모바일 화면인지 확인하는 함수
    function isMobile() {
        return $(window).width() <= 767;
    }
    
    // 전체 버튼 클릭
    $(".btn-all").click(function(){
        if (isMobile()) {
            // 드롭다운 닫기
            $('.category').removeClass('dropdown-open');
            $('.btn-select').removeClass('active selected');
            $('.category li').removeClass('dropdown-selected');
            
            // 분류 버튼을 기본 상태로 복원
            $('.btn-select').text('분류').css({
                'background-color': '#f8f8f8',
                'color': '#333'
            });
        }
        
        $('.category li').css({
            'background-color': '#f8f8f8',
            'color': '#333'
        });
        
        $(this).css({
            'background-color': '#00704A',
            'color': '#fff'
        });
        
        $('.card-box').show();
    });
    
    // 분류 버튼 클릭 (드롭다운 토글)
    $(".btn-select").click(function(){
        if (isMobile()) {
            $('.category').toggleClass('dropdown-open');
            $(this).toggleClass('active');
            // 가상자 방식에서는 CSS에서 자동으로 화살표 회전됨
        }
    });
    
    // 커피 버튼 클릭
    $(".btn-coffee").click(function(){
        if (isMobile()) {
            // 드롭다운 항목 선택
            $('.category li').removeClass('dropdown-selected');
            $(this).addClass('dropdown-selected');
            $('.btn-select').text('커피').addClass('selected'); // selected 클래스로 화살표 숨김
            $('.category').removeClass('dropdown-open');
            $('.btn-select').removeClass('active');
            
            // 전체 버튼 스타일 리셋, 분류 버튼 활성화
            $('.btn-all').css({
                'background-color': '#f8f8f8',
                'color': '#333'
            });
            $('.btn-select').css({
                'background-color': '#00704A',
                'color': '#fff'
            });
        } else {
            // PC/태블릿에서는 기존 기능
            $('.category li').css({
                'background-color': '#f8f8f8',
                'color': '#333'
            });
            
            $(this).css({
                'background-color': '#00704A',
                'color': '#fff'
            });
        }
        
        $('.card-box').hide();
        $('.card-box.coffee').show();
    });
    
    // 블렌디드 버튼 클릭
    $(".btn-blend").click(function(){
        if (isMobile()) {
            $('.category li').removeClass('dropdown-selected');
            $(this).addClass('dropdown-selected');
            $('.btn-select').text('블렌디드 & 기타').addClass('selected');
            $('.category').removeClass('dropdown-open');
            $('.btn-select').removeClass('active');
            
            // 전체 버튼 스타일 리셋, 분류 버튼 활성화
            $('.btn-all').css({
                'background-color': '#f8f8f8',
                'color': '#333'
            });
            $('.btn-select').css({
                'background-color': '#00704A',
                'color': '#fff'
            });
        } else {
            $('.category li').css({
                'background-color': '#f8f8f8',
                'color': '#333'
            });
            
            $(this).css({
                'background-color': '#00704A',
                'color': '#fff'
            });
        }
        
        $('.card-box').hide();
        $('.card-box.blend').show();
    });
    
    // 티 버튼 클릭
    $(".btn-tea").click(function(){
        if (isMobile()) {
            $('.category li').removeClass('dropdown-selected');
            $(this).addClass('dropdown-selected');
            $('.btn-select').text('티(티바나)').addClass('selected');
            $('.category').removeClass('dropdown-open');
            $('.btn-select').removeClass('active');
            
            // 전체 버튼 스타일 리셋, 분류 버튼 활성화
            $('.btn-all').css({
                'background-color': '#f8f8f8',
                'color': '#333'
            });
            $('.btn-select').css({
                'background-color': '#00704A',
                'color': '#fff'
            });
        } else {
            $('.category li').css({
                'background-color': '#f8f8f8',
                'color': '#333'
            });
            
            $(this).css({
                'background-color': '#00704A',
                'color': '#fff'
            });
        }
        
        $('.card-box').hide();
        $('.card-box.tea').show();
    });
    
    // 병음료 버튼 클릭
    $(".btn-bottle").click(function(){
        if (isMobile()) {
            $('.category li').removeClass('dropdown-selected');
            $(this).addClass('dropdown-selected');
            $('.btn-select').text('스타벅스 병음료').addClass('selected');
            $('.category').removeClass('dropdown-open');
            $('.btn-select').removeClass('active');
            
            // 전체 버튼 스타일 리셋, 분류 버튼 활성화
            $('.btn-all').css({
                'background-color': '#f8f8f8',
                'color': '#333'
            });
            $('.btn-select').css({
                'background-color': '#00704A',
                'color': '#fff'
            });
        } else {
            $('.category li').css({
                'background-color': '#f8f8f8',
                'color': '#333'
            });
            
            $(this).css({
                'background-color': '#00704A',
                'color': '#fff'
            });
        }
        
        $('.card-box').hide();
        $('.card-box.bottle').show();
    });    
});