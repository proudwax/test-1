block('calendar').content()(function() {
    var data = this.data,
        months = this.ctx.js.months,
        weekdays = this.ctx.js.weekdays,
        toDay = new Date(2016,10,28),
        calendar = [];


    /**
    *   Объединяю все лекции из всех школ в одим массив, с добавлением ID школы.
    *   @return {array}
    */
    [].forEach.call(data.schools, function (school, i) {
        [].forEach.call(school.calendar, function (item) {
            item.school_id = school.school_id;
        });

        calendar = calendar.concat(school.calendar);
    });

    /**
    *   У каждой лекции привожу дату в миллисекунды
    *   @return {array}
    */
    calendar.forEach(function (item, i) {
        item.date = Date.parse(item.date);
    });

    /**
    *   Сортирую массив объектов data по дате
    *   @return {array}
    */
    calendar.sort(function (a, b) {
        return a.date - b.date;
    });

    /**
    *   Дата с понедельника 00:00:00:000Z
    *   @return {Date}
    */
    var firstDay = new Date(calendar[0].date),
        calendarFrom = new Date(firstDay.getFullYear(), firstDay.getMonth(),  firstDay.getDate() - firstDay.getDay() + 1, 3);

    /**
    *   Дата до воскресенья 00:00:00:000Z
    *   @return {Date}
    */
    var lastDay = new Date(calendar[calendar.length - 1].date);
        calendarTo = new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate() - lastDay.getDay() + 7, 3);

    // for (let i = 0; i < array.length; i++) {
    //     array[i]
    // }



    console.log(calendarFrom.getTime());
    console.log(Date.parse(calendarFrom));

    /**
    *   в data преобразем .date в unix Date
    *   @return {data}
    */

    // [].forEach.call(data, function (item, i) {
    //     item.date = new Date(Date.parse(item.date));
    // });


    /**
    *   Сортируем массив объектов data по дате
    *   @return {data}
    */

    // [].sort.call(data, function (a, b) {
    //     return a.date - b.date;
    // });


    /**
    *   Дата с понедельника
    *   @return {Date}
    */

    // var firstDay = data[0].date,
    //     calendarFrom = new Date(firstDay.getFullYear(), firstDay.getMonth(),  firstDay.getDate() - firstDay.getDay() + 1, 3);
    // var calendarFromDay = calendarFrom.getDate(),
    //     calendarFromMonth = calendarFrom.getMonth(),
    //     currentDate = calendarFrom;

    /**
    *   Дата до воскресенья
    *   @return {Date}
    */

    // var lastDay = data[data.length - 1].date;
    //     calendarTo = new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate() - lastDay.getDay() + 7, 3);
    // var calendarToDay = calendarTo.getDate(),
    //     calendarToMonth = calendarTo.getMonth();
    //
    //
    // for(let i = Date.parse(calendarFrom); i <= Date.parse(calendarTo); i += 3600 * 24 * 1000) {
    //     if (i == Date.parse(data[j].date)) {
    //         calendar.push({
    //             elem: 'day',
    //             content: [
    //                 {
    //                     block: 'day',
    //                     mods: { 'school': (school[data[j].school]) },
    //                     content: (new Date(data[j].date).getDate())
    //                 }
    //             ]
    //         });
    //
    //         j++;
    //     } else {
    //         calendar.push({
    //                 elem: 'day',
    //                 content: [
    //                     {
    //                         block: 'day',
    //                         content: (new Date(i).getDate())
    //                     }
    //                 ]
    //             });
    //     }
    //
    //     if (new Date(i).getDay() == 0) {
    //         calendarFull.push([{ elem: 'week', content: calendar }]);
    //         calendar = [];
    //     }
    // }
    //
    // return calendarFull;
});
