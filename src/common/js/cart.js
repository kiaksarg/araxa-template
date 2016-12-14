/**
 * Created by hosseinAb on 12/13/2016.
 */
$('.pay-methods .first-col').click(function () {
    //kole radio ha ro gheir faal mikonim
    $('input[name=pay-method]').prop('checked',false);
    //class active ro hazf mikonim
    $('.first-col.active').removeClass('active');
    //zir majmooe ravesh haye pardakht ro az halate entekhab dar miavarim
    $('input[name=sub-pay-method]').prop('checked',false);
    //radio entekhab shode ro faal mikonim
    $(this).children('.pay-method-radio').prop('checked', true);
    //class active ro ezafe mikonim
    $(this).addClass('active');

    //agar ravesh pardakht dargah banki entekhab shavad bayad dargah bank melat entekhab shavad
    if($(this).children('.pay-method-radio').val()==1){
        $('input[name=sub-pay-method][value=1]').prop('checked',true);
    }
    
    var url = '/buy/payment?pay-method={pay-method}&sub-pay-method={sub-pay-method}';
    //sakht url dokme
    var pay_method_id = $('.pay-methods .first-col.active input').val();
    url = url.replace("{pay-method}",pay_method_id);

    var sub_pay_method = 1;
    url = url.replace("{sub-pay-method}",sub_pay_method);
    $('a[name=pay-btn]').prop('href',url);
});

$('input[name=sub-pay-method]').click(function () {
    $('input[name=pay-method][value=1]').prop('checked',true);
});