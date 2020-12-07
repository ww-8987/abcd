
$(document).ready(function () {
    // $指令(全部).在畫面載入完成後才會指令動作  
       
    // TODO: 1 啟用WOW.js
    new WOW().init();

    // 指令('.navbar .nav-link')的點擊

    $('.navbar .nav-link').click(function () {

        // 選取要移動的目標
        // $(this):指令被點擊的nav導覽列的部分
        const target = $(this).attr('href');

        //取得屬性元素屬性的值
        console.log(target)

        // #introSection
        // TODO: 2-3 取得移動目標的座標
        // .offset移動() => { top: 200, left: 0 }
        const position = $(target).offset().top;
        console.log(position);
        // TODO: 2-4 使用動畫移動到目標的座標
        // 導覽列的高度
        const navbarHeight = 56;
        //    先停止目前有在執行的動畫.stop()，再執行新的動畫
        // .animate({物件}, 動畫秒數-單位為千分之一秒)
        $('html,body').animate({
            scrollTop: position - navbarHeight
        }, 300);
    });

});