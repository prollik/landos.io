// Меню бургер
$('.menu_toggle').on('click', function (e) {
    e.preventDefault;
    $('.menu_toggle').toggleClass('active');
    $('.ul1').toggleClass('ul1_active');
});

// Автоматичекские скрытие меню вторго уровня
$("input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {

        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false);
        $box.prop("checked", true);
    } else {
        $box.prop("checked", false);
    }
});

// Автоматичекские скрытие меню третьего уровня
$("input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {

        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false);
        $box.prop("checked", true);
    } else {
        $box.prop("checked", false);
    }
});