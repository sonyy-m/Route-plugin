var $ = jQuery;

var max_fields      = 5; //maximum input boxes allowed
var wrapper         = $(".rzp_transfer_custom_field"); //Fields wrapper
var add_button      = $(".add_field_button"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function (e) { //on add input button click
        e.preventDefault();
        // alert('hii');
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append('<p><input type="text" name="LA_number[]" placeholder="Linked Account Number"/><input type="text" name="LA_transfer_amount[]" class="LA_transfer_amount" placeholder="Amount"><label class="trf_settlement_label">Hold Settlement:</label><select name="LA_transfer_status[]"><optgroup label="On Hold"> <option value="1"> Yes</option><option value="0" selected> No</option></optgroup></select> <a href="#" class="remove_field">Remove</a></p>'); //add input box
        }
    });

    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault();
        $(this).parent('p').remove();
        x--;
    });


    $(document).on('keyup', ".LA_transfer_amount",function () {

        var productPrice = $('#_regular_price').val();
        var trfAmount = 0;

        $('input[name^=LA_transfer_amount]').each(function () {
            var price = $(this).val();
            trfAmount += Number(price);
        });
        if (trfAmount > productPrice) {
            $('#transfer_err_msg').text('The sum of amount requested for transfer is greater than the product price');
        } else {
            $('#transfer_err_msg').text('');
        }
    });

$(function(){
    $('input[name="rzp_transfer_from"]').click(function(){
        var $radio = $(this);

        // if this was previously checked
        if ($radio.data('waschecked') == true)
        {
            $radio.prop('checked', false);
            $radio.data('waschecked', false);
        }
        else
            $radio.data('waschecked', true);

        // remove was checked from other radios
        $radio.siblings('input[name="rzp_transfer_from"]').data('waschecked', false);
    });
});


    $(".enable_hold_until").click(function() {
        $("#hold_until").attr("disabled", false);
    });

    $(".disable_hold_until").click(function() {
        $("#hold_until").attr("disabled", true);
    });
