var daysArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
var dateObj = new Date(),
      year = dateObj.getFullYear(),
      month = dateObj.getMonth(),
      numDay = dateObj.getDate(),
     day = dateObj.getDay(),
      hour = dateObj.getHours(),
      minute = dateObj.getMinutes(),
      second = dateObj.getSeconds();


function nullPlus(data) { 
    if (data < 10) { data = "0" + data } else { data = data };
    return data;
}





numDay = nullPlus(numDay);
month = nullPlus(month);
hour = nullPlus(hour);
minute = nullPlus(minute);
second = nullPlus(second);
document.write(hour + ':' + minute + ':' + second + ' ' + numDay + '.' + month + '.' + year + ' ' + daysArr[day]);

document.getElementById("click").onclick = func;

function func() {
    let years1 = +document.querySelector('.years1').value,
        years2 = +document.querySelector('.years2').value,
        month1 = +document.querySelector('.month1').value,
        month2 = +document.querySelector('.month2').value,
        day1 = +document.querySelector('.day1').value,
        day2 = +document.querySelector('.day2').value;


    var date1 = new Date(years1, month1, day1);

    var date2 = new Date(years2, month2, day2);

    var days = Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24));

    if (days < 0) {
        days = days * -1;
    }
    console.log(days)
}