$(function(){
    // 탭 메뉴 클릭 시
    $('.flex-box p').click(function() {
        // 모든 탭에서 active 클래스 제거
        $('.flex-box p').removeClass('active');
        // 클릭된 탭에 active 클래스 추가
        $(this).addClass('active');

        // 모든 의사 정보 숨김
        $('.info_doctor').removeClass('active');
        // 선택된 의사 정보 표시
        const doctorId = $(this).data('doctor');
        $('#' + doctorId).addClass('active');
    });

    // 페이지 로드 시 URL 해시(#)에 따라 탭 활성화 및 스크롤
    const hash = window.location.hash;
    if (hash) {
        // 모든 탭과 의사 정보에서 active 클래스 제거
        $('.flex-box p').removeClass('active');
        $('.info_doctor').removeClass('active');

        // 해시값에 해당하는 탭과 의사 정보에 active 클래스 추가
        const targetId = hash.substring(1); // '#' 제거
        $(`.flex-box p[data-doctor="${targetId}"]`).addClass('active');
        $(`#${targetId}`).addClass('active');

        // 해당 위치로 부드럽게 스크롤
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    } else {
        // 해시값이 없으면 페이지 로드 시 첫 번째 탭(최용석 원장)을 활성화
        $('.flex-box p[data-doctor="choi"]').addClass('active');
        $('#choi').addClass('active');
    }
});