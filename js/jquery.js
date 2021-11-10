$(function () {
    
    // Start Page Header
    // $('.loading-page').fadeOut(1000, function (){
    //     $('.wrapper').fadeIn( );
    // }); 
    $('.Categories').click(function (e) { 
        e.preventDefault();
        $('.menu-list').toggleClass('active');
    });



    // Sidebar show toggle
    $('.page-header .oc-toggle').click(function (e) {
        e.preventDefault();
        $('.page-header .sidebar').toggleClass('show');
        $('.page-header .overlay').toggleClass('show');
    });
    $('.page-header .overlay').click(function (e) {
        e.preventDefault();
        $(this).removeClass('show');
        $('.page-header .sidebar').removeClass('show');
        $('aside.filter-side').removeClass('show');
    });
    // Dropdown menu in sidebar
    $('.page-header .sidebar .item-link.dropdown-list').click(function (e) { 
        e.preventDefault();
        $(this).parent().toggleClass('active').siblings('.item').removeClass('active');
        $(this).next('.n-list').toggleClass('show').slideToggle(400, function () {
            $('.page-header .sidebar .n-list').not(this).slideUp();
        });
    });


    $(document).ready(function() {
        $('#autoWidth').lightSlider({
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        });  
      });




    
});