 // 创建 Audio 对象，传入你的 MP3 文件路径
 const bgm = new Audio('./bg.mp3'); // 替换为你的实际路径
 // 设置循环播放
 bgm.loop = true;
 // 可选：页面加载后尝试自动播放（可能被浏览器阻止）
 window.addEventListener('load', () => {
   // 某些浏览器允许静音自动播放
   bgm.muted = true;
   bgm.play().then(() => {
     bgm.muted = false; // 播放成功后再取消静音
   }).catch(() => {
     // 自动播放失败，等待用户交互
     bgm.muted = false;
   });
 });
