export interface FenextjsDateFormatOptions extends Intl.DateTimeFormatOptions {
    locales?: string | string[] | undefined;
}
export type FenextjsDateFormats = {
    [id: string]: FenextjsDateFormatOptions;
};
export interface FenextjsDateProps {
    defaultDate?: Date;
    formats?: FenextjsDateFormats;
    onCallback?: (date: Date) => void;
}

export type FenextjsDateValue = Date | number | string;

export type FenextjsDateConstructor = FenextjsDateValue | FenextjsDateProps;

export const FenextjsDateCompare = [
    "Date",
    "FullYear",
    "Hours",
    "Milliseconds",
    "Minutes",
    "Month",
    "Seconds",
] as const;

export type FenextjsDateCompareType = (typeof FenextjsDateCompare)[number];

export const FenextjsDateCompareSymbol = [
    "==",
    "!=",
    ">",
    ">=",
    "<",
    "<=",
] as const;
export type FenextjsDateCompareSymbolType =
    (typeof FenextjsDateCompareSymbol)[number];

export class FenextjsDate {
    public date: Date;
    private formats: FenextjsDateFormats = {};
    private onCallback: undefined | ((date: Date) => void) = undefined;
    private DateByMonth: Date[] = [];
    private DateByCalendar: Date[] = [];

    constructor(options?: FenextjsDateConstructor) {
        const isDate =
            options instanceof Date ||
            typeof options == "number" ||
            typeof options == "string";
        let date: Date | undefined = undefined;
        if (isDate) {
            date = new Date(options ?? new Date());
        } else {
            date = options?.defaultDate ?? new Date();
        }
        this.date = date;
        if (!isDate) {
            this.formats = options?.formats ?? {};
            this.onCallback = options?.onCallback;
        }
    }

    setOnCallback(callback: (date: Date) => void) {
        this.onCallback = callback;
    }

    addTime(time: number) {
        this.date.setTime(this.date.getTime() + time);
        this.onCallback?.(this.date);
    }
    addMilliseconds(milliseconds: number) {
        this.date.setMilliseconds(this.date.getMilliseconds() + milliseconds);
        this.onCallback?.(this.date);
    }
    addSeconds(seconds: number) {
        this.date.setSeconds(this.date.getSeconds() + seconds);
        this.onCallback?.(this.date);
    }
    addMinutes(minutes: number) {
        this.date.setMinutes(this.date.getMinutes() + minutes);
        this.onCallback?.(this.date);
    }
    addHours(hours: number) {
        this.date.setHours(this.date.getHours() + hours);
        this.onCallback?.(this.date);
    }
    addDate(date: number) {
        this.date.setDate(this.date.getDate() + date);
        this.onCallback?.(this.date);
    }
    addMonth(month: number) {
        this.date.setMonth(this.date.getMonth() + month);
        this.onCallback?.(this.date);
    }
    addYear(year: number) {
        this.date.setFullYear(this.date.getFullYear() + year);
        this.onCallback?.(this.date);
    }

    onFormat(options: FenextjsDateFormatOptions, date?: FenextjsDateValue) {
        const formatter = new Intl.DateTimeFormat(options?.locales, options);
        return formatter.format(new Date(date ?? this.date));
    }
    onFormatId(id: string, date?: FenextjsDateValue) {
        return this.onFormat(this.formats?.[id] ?? {}, date ?? this.date);
    }

    getDateByMonth() {
        return this.DateByMonth;
    }
    setDateByMonth(DateByMonth: Date[]) {
        this.DateByMonth = DateByMonth;
    }
    onGenerateDateByMonth(date?: FenextjsDateValue) {
        const DATE = new Date(date ?? this.date.getTime());
        DATE.setDate(1);
        const MONTH = DATE.getMonth();
        const DateByMonth: Date[] = [];
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
    setDateByCalendar(DateByCalendar: Date[]) {
        this.DateByCalendar = DateByCalendar;
    }
    onGenerateDateByCalendar(date?: FenextjsDateValue) {
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

        const DateByCalendar: Date[] = [];
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
    onValidateMinMax({
        date,
        max,
        min,
    }: {
        min?: Date;
        max?: Date;
        date?: Date;
    }) {
        const d = date ?? this.date;
        let sw = true;
        if (min) {
            sw &&= min <= d;
        }
        if (max) {
            sw &&= max >= d;
        }
        return sw;
    }
    onCompareDate({
        date,
        dateCompare: dateCompareProps,
        compare,
    }: {
        date?: Date;
        dateCompare: Date;
        compare: {
            [id in FenextjsDateCompareType]?: boolean;
        };
    }) {
        const d = new Date(date ?? this.date);
        const dateCompare = new Date(dateCompareProps);

        const compareValue: {
            [id in FenextjsDateCompareSymbolType]: boolean;
        } = {
            "!=":true,
            "<":true,
            "<=":true,
            "==":true,
            ">":true,
            ">=":true
        };

        FenextjsDateCompare.forEach((e) => {
            const compareKey = e as FenextjsDateCompareType;
            if (compare[compareKey] !== true) {
                const f = `set${compareKey}`;

                d[f](0);
                dateCompare[f](0);
            }
        });

        FenextjsDateCompareSymbol.forEach((b) => {
            const compareKeySymbol = b as FenextjsDateCompareSymbolType;
            compareValue[compareKeySymbol] = eval(
                `${d.getTime()} ${compareKeySymbol} ${dateCompare.getTime()}`,
            );
        });
        return compareValue;
    }
}
