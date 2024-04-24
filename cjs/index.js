"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FenextjsDate = void 0;
class FenextjsDate {
    date;
    formats = {};
    onCallback = undefined;
    DateByMonth = [];
    DateByCalendar = [];
    constructor(options) {
        const isDate = options instanceof Date ||
            typeof options == "number" ||
            typeof options == "string";
        let date = undefined;
        if (isDate) {
            date = new Date(options ?? new Date());
        }
        else {
            date = options?.defaultDate ?? new Date();
        }
        this.date = date;
        if (!isDate) {
            this.formats = options?.formats ?? {};
            this.onCallback = options?.onCallback;
        }
    }
    setOnCallback(callback) {
        this.onCallback = callback;
    }
    addTime(time) {
        this.date.setTime(this.date.getTime() + time);
        this.onCallback?.(this.date);
    }
    addMilliseconds(milliseconds) {
        this.date.setMilliseconds(this.date.getMilliseconds() + milliseconds);
        this.onCallback?.(this.date);
    }
    addSeconds(seconds) {
        this.date.setSeconds(this.date.getSeconds() + seconds);
        this.onCallback?.(this.date);
    }
    addMinutes(minutes) {
        this.date.setMinutes(this.date.getMinutes() + minutes);
        this.onCallback?.(this.date);
    }
    addHours(hours) {
        this.date.setHours(this.date.getHours() + hours);
        this.onCallback?.(this.date);
    }
    addDate(date) {
        this.date.setDate(this.date.getDate() + date);
        this.onCallback?.(this.date);
    }
    addMonth(month) {
        this.date.setMonth(this.date.getMonth() + month);
        this.onCallback?.(this.date);
    }
    addYear(year) {
        this.date.setFullYear(this.date.getFullYear() + year);
        this.onCallback?.(this.date);
    }
    onFormat(options, date) {
        const formatter = new Intl.DateTimeFormat(options?.locales, options);
        return formatter.format(new Date(date ?? this.date));
    }
    onFormatId(id, date) {
        return this.onFormat(this.formats?.[id] ?? {}, date ?? this.date);
    }
    getDateByMonth() {
        return this.DateByMonth;
    }
    setDateByMonth(DateByMonth) {
        this.DateByMonth = DateByMonth;
    }
    onGenerateDateByMonth(date) {
        const DATE = new Date(date ?? this.date.getTime());
        DATE.setDate(1);
        const MONTH = DATE.getMonth();
        const DateByMonth = [];
        while (DATE.getMonth() == MONTH) {
            DateByMonth.push(new Date(DATE.getTime()));
            DATE.setDate(DATE.getDate() + 1);
        }
        this.DateByMonth = DateByMonth;
        return DateByMonth;
    }
    getDateByCalendar() {
        return this.DateByCalendar;
    }
    setDateByCalendar(DateByCalendar) {
        this.DateByCalendar = DateByCalendar;
    }
    onGenerateDateByCalendar(date) {
        const D = new Date(date ?? this.date);
        const DATE = new Date(D.getTime());
        DATE.setDate(1);
        while (DATE.getDay() != 0) {
            DATE.setDate(DATE.getDate() - 1);
        }
        const DATEMAX = new Date(D.getTime());
        DATEMAX.setMonth(DATEMAX.getMonth() + 1);
        DATEMAX.setDate(1);
        while (DATEMAX.getDay() != 6) {
            DATEMAX.setDate(DATEMAX.getDate() + 1);
        }
        const DateByCalendar = [];
        while (DATE.getTime() != DATEMAX.getTime()) {
            DateByCalendar.push(new Date(DATE.getTime()));
            DATE.setDate(DATE.getDate() + 1);
        }
        const n = 7 - (DateByCalendar.length % 7);
        for (let i = 0; i < n; i++) {
            DateByCalendar.push(new Date(DATE.getTime()));
            DATE.setDate(DATE.getDate() + 1);
        }
        this.DateByCalendar = DateByCalendar;
        return DateByCalendar;
    }
}
exports.FenextjsDate = FenextjsDate;
//# sourceMappingURL=index.js.map