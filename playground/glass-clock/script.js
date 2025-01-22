// 時計を更新する関数
function updateClock() {
    const now = new Date();
    
    // 時間を取得
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // 日付を日本語形式で取得
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const date = `${month}月${day}日`;
    
    // 曜日を日本語で取得
    const weekDays = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
    const weekDay = weekDays[now.getDay()];
    
    // タイムゾーンを取得
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // 時間を更新
    document.querySelectorAll('.hours').forEach(el => el.textContent = hours);
    document.querySelectorAll('.minutes').forEach(el => el.textContent = minutes);
    document.querySelectorAll('.seconds').forEach(el => el.textContent = seconds);
    
    // 日付を更新
    document.querySelectorAll('.date').forEach(el => el.textContent = date);
    document.querySelectorAll('.day').forEach(el => el.textContent = weekDay);
    document.querySelectorAll('.timezone').forEach(el => el.textContent = timezone);
}

// 初期化時に時計を更新
updateClock();

// 1秒ごとに時計を更新
setInterval(updateClock, 1000);
