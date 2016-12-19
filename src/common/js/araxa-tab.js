/**
 * Created by hosseinAb on 12/17/2016.
 */

$('#araxa-tab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

$('.responsive-tabs').responsiveTabs({
    accordionOn: ['xs', 'sm'] // xs, sm, md, lg
});