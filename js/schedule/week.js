const WebHook = require('../webHook.js');


const 주간업무보고 =  '오늘은 금요일 입니다.! 퇴근 하시기 전에 주간업무보고 작성 부탁드립니다.\r\n\r\nhttps://docs.google.com/document/d/1r-oOKSCk2f_FINSoU0JOi9t0oxLRms3bWtIMGRMu-gU/edit';

module.exports = week = {
    '주간업무' : () => {
        WebHook.send(주간업무보고);
    }
}
