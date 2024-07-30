$(document).ready(function(){
    // Mask for Card Number
    $('#cardnumber').mask('0000 0000 0000 0000');

    // Mask for Expiry Date
    $("input[name='expiry-date']").mask("00 / 00");

    // Mask for CVC
    $('#securitycode').mask('000');
});