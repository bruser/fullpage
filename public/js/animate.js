
$(function(){
  // let animate = (dom, time) => {
  //   dom.css('transform','translateY(0)')
  // }
  
  // $('.textanimation').css('transform','translateY(0)'); // 文字效果
  // $('.textanimation').animate({'transform':'translateY(0)'}) // 文字效果

  $('.navbox').on('click',function(){ // 导航栏切换
    let right = $('.navbar').css('right');
    if(right == '0px') {
      $('.meng').hide();
      $('.navbar').css('right','-100%');
      $('.navbox').show();
      $('.navclose').hide();
    } else {
      $('.navbar').css('right','0');
      $('.meng').show();
      $('.navbox').hide();
      $('.navclose').show();
    }
  })
  $('.meng').on('click',function(){
    $('.meng').hide();
    $('.navbar').css('right','-100%');
    $('.navbox').show();
    $('.navclose').hide();
  })

})
