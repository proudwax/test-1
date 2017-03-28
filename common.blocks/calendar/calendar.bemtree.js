block('calendar').content()(function() {
    var data = this.data,
        arrayDate = [];

    // console.log(this.data);

    /**
    *   Получаем массив дат
    *   @return {array}
    */
    // [].forEach.call(data, function (item, i) {
    //     arrayDate[i] = new Date(Date.parse(item.date));
    //     // console.log(arrayDate[i].getDay());
    // });

    /**
    *   Сортируем
    *   elem[0] - min,
    *   elem[last] - max
    *   @return {array}
    */
    arrayDate.sort(function (a, b) { return a - b; } );

    /**
    *   Дата с понедельника
    *   @return {Date}
    */
    // var calendarFrom = new Date(arrayDate[0].getFullYear(), arrayDate[0].getMonth(),  arrayDate[0].getDate() - arrayDate[0].getDay() + 1);

    /**
    *   Дата до воскресенья
    *   @return {Date}
    */
    // var calendarTo = new Date(arrayDate[arrayDate.length - 1].getFullYear(), arrayDate[arrayDate.length - 1].getMonth(),  arrayDate[arrayDate.length - 1].getDate() + 7 - arrayDate[arrayDate.length - 1].getDay());

    // console.log(data);

    return [
        {
            elem: 'week',
            content: [
                {
                    elem: 'day',
                    content: 're'
                }
            ]
        }
    ];
});
