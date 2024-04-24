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
export type FenextjsDateConstructor<F extends string> = FenextjsDateValue | FenextjsDateProps<F>;
export declare class FenextjsDate<F extends string> extends Date {
    private formats;
    private onCallback;
    private DateByMonth;
    private DateByCalendar;
    constructor(options?: FenextjsDateConstructor<F>);
    setOnCallback(callback: (date: FenextjsDate<F>) => void): void;
    addTime(time: number): void;
    addMilliseconds(milliseconds: number): void;
    addSeconds(seconds: number): void;
    addMinutes(minutes: number): void;
    addHours(hours: number): void;
    addDate(date: number): void;
    addMonth(month: number): void;
    addYear(year: number): void;
    onFormat(options: FenextjsDateFormatOptions, date?: FenextjsDateValue): string;
    onFormatId(id: keyof F, date?: FenextjsDateValue): string;
    getDateByMonth(): Date[];
    setDateByMonth(DateByMonth: Date[]): void;
    onGenerateDateByMonth(date?: FenextjsDateValue): Date[];
    getDateByCalendar(): Date[];
    setDateByCalendar(DateByCalendar: Date[]): void;
    onGenerateDateByCalendar(date?: FenextjsDateValue): Date[];
}
