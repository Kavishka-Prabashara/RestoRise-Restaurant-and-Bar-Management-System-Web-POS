    $(document).ready(function(){

    $('#dashboard-section').css({display: 'block'});
        $('#items-section').css({display: 'none'});
        $('#order-section').css({display: 'none'});
        $('#customer-section').css({display: 'none'});
        $('#staff-section').css({display: 'none'});

    $('#nav-dashboard').on('click', () => {
    $('#dashboard-section').css({display: 'block'});
    $('#items-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#staff-section').css({display: 'none'});
});
    $('#nav-item').on('click', () => {
    $('#dashboard-section').css({display: 'none'});
    $('#items-section').css({display: 'block'});
    $('#order-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#staff-section').css({display: 'none'});
});
    $('#nav-customer').on('click', () => {
    $('#dashboard-section').css({display: 'none'});
    $('#items-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#customer-section').css({display: 'block'});
    $('#staff-section').css({display: 'none'});
});

    $('#nav-order').on('click', () => {
    $('#dashboard-section').css({display: 'none'});
    $('#items-section').css({display: 'none'});
    $('#order-section').css({display: 'block'});
    $('#customer-section').css({display: 'none'});
    $('#staff-section').css({display: 'none'});
});

    $('#nav-staff').on('click', () => {
    $('#dashboard-section').css({display: 'none'});
    $('#items-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#staff-section').css({display: 'block'});
});

            // Listen for click events on dropdown items and set the text of the button
            $('.job-category').on('click', function() {
                $('#jobCategory').text($(this).text());
            });

             $('.item-category').on('click', function() {
                $('#dropdownItemCategory').text($(this).text());
            });
});

