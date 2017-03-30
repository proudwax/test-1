block('calendar').content()(function() {
    var data = this.data,
        j = 0,
        calendar = [],
        calendarFull = [],
        school = {'shri': 1, 'design': 2, 'mobdev': 3},
        month = ['Январь', '', '', '', '', '',];
        toDay = new Date(2016,10,23);

    /**
    *   в data преобразем .date в unix Date
    *   @return {data}
    */

    [].forEach.call(data, function (item, i) {
        item.date = new Date(Date.parse(item.date));
    });


    /**
    *   Сортируем массив объектов data по дате
    *   @return {data}
    */

    [].sort.call(data, function (a, b) {
        return a.date - b.date;
    });


    /**
    *   Дата с понедельника
    *   @return {Date}
    */

    var firstDay = data[0].date,
        calendarFrom = new Date(firstDay.getFullYear(), firstDay.getMonth(),  firstDay.getDate() - firstDay.getDay() + 1, 3);
    var calendarFromDay = calendarFrom.getDate(),
        calendarFromMonth = calendarFrom.getMonth(),
        currentDate = calendarFrom;

    /**
    *   Дата до воскресенья
    *   @return {Date}
    */

    var lastDay = data[data.length - 1].date;
        calendarTo = new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate() - lastDay.getDay() + 7, 3);
    var calendarToDay = calendarTo.getDate(),
        calendarToMonth = calendarTo.getMonth();


    for(let i = Date.parse(calendarFrom); i <= Date.parse(calendarTo); i += 3600 * 24 * 1000) {
        if (i == Date.parse(data[j].date)) {
            console.log('rertertertertertre');
            calendar.push({
                    elem: 'day',
                    content: [
                        {
                            block: 'day',
                            mods: { 'school': (school[data[j].school]) },
                            content: (new Date(data[j].date).getDate())
                        }
                    ]
                });

            j++;
        } else {
            calendar.push({
                    elem: 'day',
                    content: [
                        {
                            block: 'day',
                            content: (new Date(i).getDate())
                        }
                    ]
                });
        }

        if (new Date(i).getDay() == 0) {
            calendarFull.push([{ elem: 'week', content: calendar }]);
            calendar = [];
        }
    }

    return calendarFull;
});
