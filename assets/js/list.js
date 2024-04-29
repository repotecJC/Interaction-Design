// 開合動畫
var GuideContainer = document.getElementById('Guide-container');
var Select_area = document.getElementById('Select_area');
// 初始時列表是收合的
var isExpanded = false;

// 監聽列表容器的點擊事件
GuideContainer.addEventListener('click', function() {
    // 如果列表是展開的，則收合；如果是收合的，則展開
    if (isExpanded) {
        GuideContainer.style.height = '50px'; // 30px 是收合後的高度
        Select_area.style.top = parseInt(GuideContainer.style.height) + 30 +'px';
    } else {
        // 通過計算列表內容的高度來展開列表
        GuideContainer.style.height = GuideContainer.scrollHeight + 'px';
        Select_area.style.top = parseInt(GuideContainer.style.height) + 30 +'px';
    }
    // 更新展開狀態
    isExpanded = !isExpanded;
});


// 選單設定
var select_value = document.getElementById('Select');

// 監聽下拉選單的變化
select_value.addEventListener('change', function() {
    // 獲取所選擇的值
    var selectedValue = select_value.value;

    var link_list = {
        S : 'https://maps.app.goo.gl/rZtdZXR4no9G9dGq6',
        B : 'https://maps.app.goo.gl/5KadNmvjteqYsLhR8',
        C : 'https://maps.app.goo.gl/5KadNmvjteqYsLhR8',
        A : 'https://maps.app.goo.gl/qBA6u5bqnyUcYKJRA',
        L : 'https://maps.app.goo.gl/qBA6u5bqnyUcYKJRA',
        K : 'https://maps.app.goo.gl/vN3UpjzLcvgo6Dyz5',
        J : 'https://maps.app.goo.gl/vN3UpjzLcvgo6Dyz5',
        H : 'https://maps.app.goo.gl/vN3UpjzLcvgo6Dyz5',
        G : 'https://maps.app.goo.gl/vN3UpjzLcvgo6Dyz5',
        M : 'https://maps.app.goo.gl/vN3UpjzLcvgo6Dyz5',
        F : 'https://maps.app.goo.gl/h6xhUNXFLmVb7uxE7',
        E : 'https://maps.app.goo.gl/UiddKZ7yzr4MR1x16',
        D : 'https://maps.app.goo.gl/hyvfYcq5bgsJdkAF7',
        N : 'https://maps.app.goo.gl/3Cqpc1kKvEYxTsVH7',
        Z : 'https://maps.app.goo.gl/7pzTBLfuJbYtTtucA',
        X : 'https://maps.app.goo.gl/u7qz497m2ZPPNeAK8',
        U : 'https://maps.app.goo.gl/anizof2whbwsvEK86',
        W : 'https://maps.app.goo.gl/7Lobq7Wkuf6eydKXA',
        T : 'https://maps.app.goo.gl/ab86gDfscBkinN5i6',
        P : 'https://maps.app.goo.gl/nJXsjsJCT2aqoY2g7',
        Q : 'https://maps.app.goo.gl/nJXsjsJCT2aqoY2g7',
        R : 'https://maps.app.goo.gl/X2Ah76BjjxZFcESA9'
    };
    
    // 檢查所選值是否在對應關係物件中
    if (selectedValue in link_list) {
        // 如果是，則開啟對應的網頁
        window.location.href = link_list[selectedValue];
    }
});