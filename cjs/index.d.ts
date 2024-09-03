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
export declare const FenextjsDateCompare: readonly ["Date", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"];
export type FenextjsDateCompareType = (typeof FenextjsDateCompare)[number];
export declare const FenextjsDateCompareSymbol: readonly ["==", "!=", ">", ">=", "<", "<="];
export type FenextjsDateCompareSymbolType = (typeof FenextjsDateCompareSymbol)[number];
export declare class FenextjsDate {
    date: Date;
    private formats;
    private onCallback;
    private DateByMonth;
    private DateByCalendar;
    constructor(options?: FenextjsDateConstructor);
    setOnCallback(callback: (date: Date) => void): void;
    addTime(time: number): void;
    addMilliseconds(milliseconds: number): void;
    addSeconds(seconds: number): void;
    addMinutes(minutes: number): void;
    addHours(hours: number): void;
    addDate(date: number): void;
    addMonth(month: number): void;
    addYear(year: number): void;
    onFormat(options: FenextjsDateFormatOptions, date?: FenextjsDateValue): string;
    onFormatId(id: string, date?: FenextjsDateValue): string;
    getDateByMonth(): Date[];
    setDateByMonth(DateByMonth: Date[]): void;
    onGenerateDateByMonth(date?: FenextjsDateValue): Date[];
    getDateByCalendar(): Date[];
    setDateByCalendar(DateByCalendar: Date[]): void;
    onGenerateDateByCalendar(date?: FenextjsDateValue): Date[];
    onValidateMinMax({ date, max, min, }: {
        min?: Date;
        max?: Date;
        date?: Date;
    }): boolean;
    onCompareDate({ date, dateCompare: dateCompareProps, compare, }: {
        date?: Date;
        dateCompare: Date;
        compare: {
            [id in FenextjsDateCompareType]?: boolean;
        };
    }): {
        "==": boolean;
        "!=": boolean;
        ">": boolean;
        ">=": boolean;
        "<": boolean;
        "<=": boolean;
    };
}
