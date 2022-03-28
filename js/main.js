$(function(){
  // ハンバーガー
  $('.toggle_btn').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });
  // リンクをクリックした時にメニューを閉じる
  $('#navi a').on('click', function() {
    $('#header').removeClass('open');
  });
  // スムーススクロール
  $('a[href^="#"]').click(function(){
    let speed = 500;
    // thisの中に入っているhref属性の値をattrメソッドで取得
    let href= $(this).attr("href");
    // 変数targetに三項演算子の結果を代入
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });
  // ここからスライダー
  $('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
  // スクロール時のイベント
  $(window).scroll(function() {
    $('.fadein').each(function() {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
});

