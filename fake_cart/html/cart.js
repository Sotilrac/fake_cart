var cart_total = 0;
$('#cart_total').html(cart_total.toString() + "$");
$('#sku_input').focus();

// Find product in products list, return null otherwise
function get_item (sku) {
    var product = null;
    for (p_ind in products){
        if (products[p_ind]['sku'] == sku) {
            product = products[p_ind];}
    }
    return product;
}

function add_item (product) {
    if (product != null) {
        var product_str = '<tbody class="cart_item"><tr><td>' + product['sku'] + '</td><td>' + product['name'] + '</td><td>' + product['price'] + '</td></tr></tbody>';

        $('#cart_table').prepend(product_str);
        cart_total += parseFloat(product['price'])
        $('#cart_total').html(cart_total.toFixed(2));
    }
    else {
        console.log('invalid product')
    }
}

$('#sku_input').keydown(function(e) {
var key = e.which;
if (key == 13) {
    add_item(get_item($('#sku_input').val()));
    $('#sku_input').val('');
}
});

$('#buy_btn').click(function(){
    cart_total = 0;
    $('.cart_item').remove();
    $('#cart_total').html(cart_total.toFixed(2) + "$");
});