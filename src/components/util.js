import moment from "moment";

export const getDiffDate= (baseDate, diff) => {
    // 날짜 비교 함수 
    const now = moment();
    return moment.duration(now.diff(moment(baseDate))).asDays()<diff;
}