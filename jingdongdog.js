const logo = document.querySelector('.logo');
// 鼠标放置事件
logo.addEventListener('mouseover', function() {
  // 处理放置事件
  logo.src = './jd2.png';
});

// 鼠标离开事件
logo.addEventListener('mouseout', function() {
  // 处理离开事件
  logo.src = './jd1.png';
});
