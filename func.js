function convertMonth (month) {
    switch (month) {
        case 0:
            month = "Jan";
            return month;
            break;
        case 1:
            month = "Feb";
            return month;
            break;
        case 2:
            month = "Mar";
            return month;
            break;
        case 3:
            month = "Apr";
            return month;
            break;
        case 4:
            month = "May";
            return month;
            break;
        case 5:
            month = "Jun";
            return month;
            break;
        case 6:
            month = "Jul";
            return month;
            break;
        case 7:
            month = "Aug";
            return month;
            break;
        case 8:
            month = "Sep";
            return month;
            break;
        case 9:
            month = "Oct";
            return month;
            break;
        case 10:
            month = "Nov";
            return month;
            break;
        case 11:
            month = "Dec";
            return month;
            break;
    }
}
function convertDay (day) {
    switch (day) {
        case 0:
            day = "Sunday"
            return day;
            break;
        case 1:
            day = "Monday"
            return day;
            break;
        case 2:
            day = "Tuesday"
            return day;
            break;
        case 3:
            day = "Wednesday"
            return day;
            break;
        case 4:
            day = "Thursday"
            return day;
            break;
        case 5:
            day = "Friday"
            return day;
            break;
        case 6:
            day = "Saturdau"
            return day;
            break;
    }
}
export {convertMonth, convertDay};