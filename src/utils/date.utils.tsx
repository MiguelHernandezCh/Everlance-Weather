import moment from "moment";

export const getDateName = (date: any) => {
    if (!date) return null;
    const isDateToday = moment().isSame(date, "day");
    const isTomorrow = moment().add(1, "day").isSame(date, "day");

    //TODO: return i18n key
    if (isDateToday) return "Today"
    if (isTomorrow) return "Tomorrow"
    return moment(date).format("dddd")
}