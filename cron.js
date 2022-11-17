
const WeekSchedule = require('./js/schedule/week.js');
const cron = require('node-cron');

//초 분 시 월 머시기 요일
cron.schedule('5 0 10 * * 5', function(){
    console.log('요청 완료 > 주간업무 보고');
    WeekSchedule.주간업무();
});