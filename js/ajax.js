$(function() {

    let mainElement = $('main');
    let mainChildren = $('main').children();
    let bG_page = $('.flutter-container');
    let smooth_flag = 0;
    

    $('.wr-art-lnk a').on('click', function(e) {
       e.preventDefault();
       
       bG_page.removeClass('smoothy');

       let id = this.id
       let url = this.href;
       let strURL = url + ' div.' + id;

       mainChildren.remove(); 
       mainElement.load(strURL);        
    });

    $('button#artists').on('click', function() {
        if (!smooth_flag) {
            bG_page.addClass('smoothy');
            smooth_flag = 1;
        }
        else {
            bG_page.removeClass('smoothy');
            smooth_flag = 0;
        } 
    });

});