export interface FenextjsDateFormatOptions extends Intl.DateTimeFormatOptions {
    locales?: string | string[] | undefined;
}
export type FenextjsDateFormats<F extends string> = {
    [id in F]?: FenextjsDateFormatOptions;
};
export interface FenextjsDateProps<F extends string> {
    defaultDate?: Date;
    formats?: FenextjsDateFormats<F>;
    onCallback?: (date: FenextjsDate<F>) => void;
}

export type FenextjsDateValue = Date | number | string;

export type FenextjsDateConstructor<F extends string> =
    | FenextjsDateValue
    | FenextjsDateProps<F>;

export class FenextjsDate<F extends string> extends Date {
    private formats: FenextjsDateFormats<F> = {};
    private onCallback: undefined | ((date: FenextjsDate<F>) => void) =
        undefined;
    private DateByMonth: Date[] = [];
    private DateByCalendar: Date[] = [];

    constructor(options?: FenextjsDateConstructor<F>) {
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
        super(date);
        if (!isDate) {
            this.formats = options?.formats ?? {};
            this.onCallback = options?.onCallback;
        }
    }

    addTime(time: number) {
        this.setTime(this.getTime() + time);
        this.onCallback?.(this)
    }
    addMilliseconds(milliseconds: number) {
        this.setMilliseconds(this.getMilliseconds() + milliseconds);
        this.onCallback?.(this)
    }
    addSeconds(seconds: number) {
        this.setSeconds(this.getSeconds() + seconds);
        this.onCallback?.(this)
    }
    addMinutes(minutes: number) {
        this.setMinutes(this.getMinutes() + minutes);
        this.onCallback?.(this)
    }
    addHours(hours: number) {
        this.setHours(this.getHours() + hours);
        this.onCallback?.(this)
    }
    addDate(date: number) {
        this.setDate(this.getDate() + date);
        this.onCallback?.(this)
    }
    addMonth(month: number) {
        this.setMonth(this.getMonth() + month);
        this.onCallback?.(this)
    }
    addYear(year: number) {
        this.setFullYear(this.getFullYear() + year);
        this.onCallback?.(this)
    }

    onFormat(options: FenextjsDateFormatOptions, date?: FenextjsDateValue) {
        const formatter = new Intl.DateTimeFormat(options?.locales, options);
        return formatter.format(new Date(date ?? this));
    }
    onFormatId(id: keyof F, date?: FenextjsDateValue) {
        return this.onFormat(this.formats?.[id] ?? {}, date);
    }

    getDateByMonth() {
        return this.DateByMonth;
    }
    setDateByMonth(DateByMonth: Date[]) {
        this.DateByMonth = DateByMonth;
    }
    onGenerateDateByMonth(date?: FenextjsDateValue) {
        const DATE = new Date(date ?? this.getTime());
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
}
