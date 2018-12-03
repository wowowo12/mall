/*$(".wrap").each(function(){
    $(this).imagesLoaded().done(function(){ //imageloading delay 처리
        var hei=$(".wrap").find(".box").height();
        $(".wrap").height(hei);
    });
});
//absolute의 높이를 relative로 가져온다.
//resize대응해주기
*/

//parent:relative , me:absolute


(function autoHeight(){
    $(".hei_wrap").imagesLoaded().done(heiCalc);
    $(window).resize(heiCalc);
    function heiCalc(pa, me){
        $(".hei_wrap").each(function(){
            $(this).height($(this).find(".hei_elem").height());
        });
       
    }
})();

//hei_wrap, .hei_elem 로 autoheight처리