export class TimeUtil {
  constructor(date, weekBack) {
    this.date = date;
    this.weekBack = weekBack;
  }

  formate(date) {
    const regex = /\d{4}\-\d{2}\-\d{1,2}/g;
    const arrDate = date.match(regex).join().split("-");
    const cardDate = [];
    switch (arrDate[1]) {
      case "01":
        cardDate.push("января");
        break;
      case "02":
        cardDate.push("февраля");
        break;
      case "03":
        cardDate.push("марта");
        break;
      case "04":
        cardDate.push("апреля");
        break;
      case "05":
        cardDate.push("мая");
        break;
      case "06":
        cardDate.push("июня");
        break;
      case "07":
        cardDate.push("июля");
        break;
      case "08":
        cardDate.push("августа");
        break;
      case "09":
        cardDate.push("сентября");
        break;
      case "10":
        cardDate.push("октября");
        break;
      case "11":
        cardDate.push("ноября");
        break;
      case "12":
        cardDate.push("декабря");
        break;
    }
    cardDate.push(arrDate[0], arrDate[2]);
    return `${cardDate[2]} ${cardDate[0]} ${cardDate[1]}`;
  }

  apiFormateTo() {
    const today =
    this.date.getFullYear() + "-" + (parseInt(this.date.getMonth() + 1) < 10 ? "0" +
    parseInt(this.date.getMonth() + 1) : parseInt(this.date.getMonth() + 1)) + "-" + this.date.getDate();
    return today;
  }

  apiFormateFrom(number) {
    const week = this.weekBack;
    week.setDate(week.getDate());
    const weekAgo = week.getFullYear() + "-" + (parseInt(week.getMonth() + 1) < 10 ? "0" + parseInt(week.getMonth() + 1) : parseInt(week.getMonth() + 1)) + "-" + (week.getDate() - number);
    return weekAgo;
  }
}
