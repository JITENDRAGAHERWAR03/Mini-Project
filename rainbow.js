$('h1').html(function(i, html) {
    var chars = $.trim(html).split("");

    return '<h1>' + chars.join('</h1><h1>') + '</h1>';
});