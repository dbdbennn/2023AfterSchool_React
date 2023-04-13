// 첫번째 버튼을 누르ㅡ면
// 기본의 오렌지바와 해당 상품 텍스트거 보이지 않아야 함
// 해당 오렌지바와 해당 상품 텍스트가 보여야 함
// 1.모든 버튼의 orange 클래스 제거
// 2. 모든 div에 붙은 show클래스를제거
// 3.버튼 0에 orange 클래스 추가
// 4.div0에 show  클래스를 추가

//querySelectorAll('.tab-button')[0]
// $('.tab-button').eq(0).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').eq(0).addClass('show');
// })
// $('.tab-button').eq(1).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').eq(1).addClass('show');
// })
// $('.tab-button').eq(2).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').eq(2).addClass('show');
// })
// $('.tab-button').eq(3).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(3).addClass('orange');
//     $('.tab-content').eq(3).addClass('show');
// })
// $('.tab-button').eq(4).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(4).addClass('orange');
//     $('.tab-content').eq(4).addClass('show');
// })

// Get all tab buttons
const tabButtons = document.querySelectorAll('.tab-button');

// Loop through each tab button
for (let i = 0; i < tabButtons.length; i++) {
  // Add click event listener to each tab button
  tabButtons[i].addEventListener('click', function() {
    // Remove orange class from all tab buttons
    $('.tab-button').removeClass('orange');
    // Remove show class from all tab contents
    $('.tab-content').removeClass('show');
    // Add orange class to clicked tab button
    $(this).addClass('orange');
    // Add show class to corresponding tab content
    $('.tab-content').eq(i).addClass('show');
  });
}