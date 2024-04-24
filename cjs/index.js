"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FenextjsDate = void 0;
class FenextjsDate extends Date {
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
        super(date);
        if (!isDate) {
            this.formats = options?.formats ?? {};
            this.onCallback = options?.onCallback;
        }
    }
    setOnCallback(callback) {
        this.onCallback = callback;
    }
    addTime(time) {
        this.setTime(this.getTime() + time);
        this.onCallback?.(this);
    }
    addMilliseconds(milliseconds) {
        this.setMilliseconds(this.getMilliseconds() + milliseconds);
        this.onCallback?.(this);
    }
    addSeconds(seconds) {
        this.setSeconds(this.getSeconds() + seconds);
        this.onCallback?.(this);
    }
    addMinutes(minutes) {
        this.setMinutes(this.getMinutes() + minutes);
        this.onCallback?.(this);
    }
    addHours(hours) {
        this.setHours(this.getHours() + hours);
        this.onCallback?.(this);
    }
    addDate(date) {
        this.setDate(this.getDate() + date);
        this.onCallback?.(this);
    }
    addMonth(month) {
        this.setMonth(this.getMonth() + month);
        this.onCallback?.(this);
    }
    addYear(year) {
        this.setFullYear(this.getFullYear() + year);
        this.onCallback?.(this);
    }
    onFormat(options, date) {
        const formatter = new Intl.DateTimeFormat(options?.locales, options);
        return formatter.format(new Date(date ?? this));
    }
    onFormatId(id, date) {
        return this.onFormat(this.formats?.[id] ?? {}, date);
    }
    getDateByMonth() {
        return this.DateByMonth;
    }
    setDateByMonth(DateByMonth) {
        this.DateByMonth = DateByMonth;
    }
    onGenerateDateByMonth(date) {
        const DATE = new Date(date ?? this.getTime());
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
        const D = new Date(date ?? this.getTime());
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