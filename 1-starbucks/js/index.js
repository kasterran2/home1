$(function(){
  $('.modal-close').click(function(){
    $('.modal').hide();
  })
  
  $('body').addClass('modal-lock');

  // 닫기 버튼 누르면 배경 스크롤 다시 복원
  $('.modal-close').click(function(){
    $('.modal').hide();
    $('body').removeClass('modal-lock');
  });
});