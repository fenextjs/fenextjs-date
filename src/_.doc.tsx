export default {
    id: "FenextjsDate",
    name: "FenextjsDate",
    description: "Clase para manipular fechas, proporcionando métodos para sumar unidades de tiempo, formatear, validar y comparar fechas.",
    useImport: true,
    useBreadcrumb:false,
    functions: [
        {
            id: "setOnCallback",
            name: "setOnCallback",
            type: "(callback: (date: Date) => void) => void",
            description: "Establece el callback que se ejecutará al modificar la fecha.",
            props: [
                {
                    id: "callback",
                    type: "(date: Date) => void",
                    require: true,
                    description: "Función callback a ejecutar.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Establecer un callback para actualización de fecha",
                    content: `const fenextDate = new FenextjsDate();
fenextDate.setOnCallback((date) => console.log("Fecha actualizada:", date));`,
                },
            ]
        },
        {
            id: "addTime",
            name: "addTime",
            type: "(time: number) => void",
            description: "Agrega una cantidad de tiempo en milisegundos a la fecha actual.",
            props: [
                {
                    id: "time",
                    type: "number",
                    require: true,
                    description: "Tiempo en milisegundos para agregar.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Agregar milisegundos a la fecha actual",
                    content: `const fenextDate = new FenextjsDate(new Date());
fenextDate.addTime(60000); // Agrega 1 minuto en milisegundos`,
                },
            ]
        },
        {
            id: "addMilliseconds",
            name: "addMilliseconds",
            type: "(milliseconds: number) => void",
            description: "Agrega una cantidad específica de milisegundos a la fecha.",
            props: [
                {
                    id: "milliseconds",
                    type: "number",
                    require: true,
                    description: "Milisegundos para agregar a la fecha.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Agregar milisegundos específicos",
                    content: `const fenextDate = new FenextjsDate(new Date());
fenextDate.addMilliseconds(500); // Agrega 500 milisegundos`,
                },
            ]
        },
        {
            id: "addSeconds",
            name: "addSeconds",
            type: "(seconds: number) => void",
            description: "Agrega una cantidad de segundos a la fecha actual.",
            props: [
                {
                    id: "seconds",
                    type: "number",
                    require: true,
                    description: "Segundos para agregar.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Agregar segundos a la fecha actual",
                    content: `const fenextDate = new FenextjsDate(new Date());
fenextDate.addSeconds(10); // Agrega 10 segundos`,
                },
            ]
        },
        {
            id: "addMinutes",
            name: "addMinutes",
            type: "(minutes: number) => void",
            description: "Agrega una cantidad de minutos a la fecha actual.",
            props: [
                {
                    id: "minutes",
                    type: "number",
                    require: true,
                    description: "Minutos para agregar.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Agregar minutos a la fecha actual",
                    content: `const fenextDate = new FenextjsDate(new Date());
fenextDate.addMinutes(30); // Agrega 30 minutos`,
                },
            ]
        },
        {
            id: "addHours",
            name: "addHours",
            type: "(hours: number) => void",
            description: "Agrega una cantidad de horas a la fecha actual.",
            props: [
                {
                    id: "hours",
                    type: "number",
                    require: true,
                    description: "Horas para agregar.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Agregar horas a la fecha actual",
                    content: `const fenextDate = new FenextjsDate(new Date());
fenextDate.addHours(5); // Agrega 5 horas`,
                },
            ]
        },
        {
            id: "addDate",
            name: "addDate",
            type: "(date: number) => void",
            description: "Agrega una cantidad de días a la fecha actual.",
            props: [
                {
                    id: "date",
                    type: "number",
                    require: true,
                    description: "Días para agregar.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Agregar días a la fecha actual",
                    content: `const fenextDate = new FenextjsDate(new Date());
fenextDate.addDate(10); // Agrega 10 días`,
                },
            ]
        },
        {
            id: "addMonth",
            name: "addMonth",
            type: "(month: number) => void",
            description: "Agrega una cantidad de meses a la fecha actual.",
            props: [
                {
                    id: "month",
                    type: "number",
                    require: true,
                    description: "Meses para agregar.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Agregar meses a la fecha actual",
                    content: `const fenextDate = new FenextjsDate(new Date());
fenextDate.addMonth(3); // Agrega 3 meses`,
                },
            ]
        },
        {
            id: "addYear",
            name: "addYear",
            type: "(year: number) => void",
            description: "Agrega una cantidad de años a la fecha actual.",
            props: [
                {
                    id: "year",
                    type: "number",
                    require: true,
                    description: "Años para agregar.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Agregar años a la fecha actual",
                    content: `const fenextDate = new FenextjsDate(new Date());
fenextDate.addYear(2); // Agrega 2 años`,
                },
            ]
        },
        {
            id: "onFormat",
            name: "onFormat",
            type: "(options: FenextjsDateFormatOptions, date?: FenextjsDateValue) => string",
            description: "Devuelve la fecha formateada según las opciones dadas.",
            props: [
                {
                    id: "options",
                    type: "FenextjsDateFormatOptions",
                    require: true,
                    description: "Opciones de formato para la fecha.",
                },
                {
                    id: "date",
                    type: "FenextjsDateValue",
                    require: false,
                    description: "Fecha para formatear; usa la fecha actual si no se proporciona.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Formatear la fecha actual",
                    content: `const fenextDate = new FenextjsDate(new Date());
const formattedDate = fenextDate.onFormat({ year: 'numeric', month: '2-digit', day: '2-digit' });
console.log("Fecha formateada:", formattedDate);`,
                },
            ]
        },
        {
            id: "onFormatId",
            name: "onFormatId",
            type: "(id: string, date?: FenextjsDateValue) => string",
            description: "Devuelve la fecha formateada usando un formato identificado por un ID.",
            props: [
                {
                    id: "id",
                    type: "string",
                    require: true,
                    description: "ID del formato a usar.",
                },
                {
                    id: "date",
                    type: "FenextjsDateValue",
                    require: false,
                    description: "Fecha a formatear; usa la fecha actual si no se proporciona.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Formatear la fecha con un formato identificado",
                    content: `const fenextDate = new FenextjsDate({ formats: { short: { year: 'numeric', month: '2-digit', day: '2-digit' } } });
const formattedDate = fenextDate.onFormatId('short');
console.log("Fecha formateada con ID:", formattedDate);`,
                },
            ]
        },

        {
            id: "getDateByMonth",
            name: "getDateByMonth",
            type: "(month: number, year?: number) => Date[]",
            description: "Devuelve un arreglo de fechas para un mes y año específicos.",
            props: [
                {
                    id: "month",
                    type: "number",
                    require: true,
                    description: "Número del mes (1 para enero, 12 para diciembre).",
                },
                {
                    id: "year",
                    type: "number",
                    require: false,
                    description: "Año para obtener las fechas; usa el año actual si no se proporciona.",
                }
            ],
            useExample: [
                {
                    text: "Obtener las fechas de un mes específico",
                    content: `const fenextDate = new FenextjsDate(new Date());
const dates = fenextDate.getDateByMonth(2); // Obtiene las fechas de febrero del año actual
console.log("Fechas de febrero:", dates);`,
                },
            ]
        },
        {
            id: "setDateByMonth",
            name: "setDateByMonth",
            type: "(month: number, year?: number) => void",
            description: "Establece la fecha a un mes y año específicos.",
            props: [
                {
                    id: "month",
                    type: "number",
                    require: true,
                    description: "Número del mes (1 para enero, 12 para diciembre).",
                },
                {
                    id: "year",
                    type: "number",
                    require: false,
                    description: "Año para establecer la fecha; usa el año actual si no se proporciona.",
                }
            ],
            useExample: [
                {
                    text: "Establecer la fecha a un mes y año específicos",
                    content: `const fenextDate = new FenextjsDate(new Date());
fenextDate.setDateByMonth(6, 2023); // Establece la fecha a junio de 2023
console.log("Fecha establecida:", fenextDate);`,
                },
            ]
        },


        {
            id: "onGenerateDateByMonth",
            name: "onGenerateDateByMonth",
            type: "(date?: FenextjsDateValue) => Date[]",
            description: "Genera una lista de fechas para un mes específico.",
            props: [
                {
                    id: "date",
                    type: "FenextjsDateValue",
                    require: false,
                    description: "Fecha de referencia para el mes a generar.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Generar fechas para el mes actual",
                    content: `const fenextDate = new FenextjsDate(new Date());
const dates = fenextDate.onGenerateDateByMonth();
console.log("Fechas del mes:", dates);`,
                },
            ]
        },
        {
            id: "getDateByCalendar",
            name: "getDateByCalendar",
            type: "() => Date[]",
            description: "Devuelve un arreglo de fechas que representa un calendario completo del mes actual, con días de la semana.",
            props: [],
            useExample: [
                {
                    text: "Obtener las fechas de un calendario completo para el mes actual",
                    content: `const fenextDate = new FenextjsDate(new Date());
const calendarDates = fenextDate.getDateByCalendar(); // Obtiene las fechas del calendario completo del mes actual
console.log("Fechas del calendario:", calendarDates);`,
                },
            ]
        },
        {
            id: "setDateByCalendar",
            name: "setDateByCalendar",
            type: "(calendarDates: Date[]) => void",
            description: "Establece las fechas del calendario con un arreglo de fechas.",
            props: [
                {
                    id: "calendarDates",
                    type: "Date[]",
                    require: true,
                    description: "Un arreglo de objetos `Date` que representa las fechas del calendario completo.",
                },
            ],
            useExample: [
                {
                    text: "Establecer un calendario con un arreglo de fechas",
                    content: `const fenextDate = new FenextjsDate(new Date());
const calendarDates = [new Date(2023, 5, 1), new Date(2023, 5, 2)]; // Un ejemplo de fechas del calendario
fenextDate.setDateByCalendar(calendarDates); // Establece las fechas del calendario
console.log("Fechas del calendario establecidas:", fenextDate);`,
                },
            ]
        },
        {
            id: "onGenerateDateByCalendar",
            name: "onGenerateDateByCalendar",
            type: "(date?: FenextjsDateValue) => Date[]",
            description: "Genera una lista de fechas para el mes y año específicos, con una vista tipo calendario.",
            props: [
                {
                    id: "date",
                    type: "FenextjsDateValue",
                    require: false,
                    description: "Fecha de referencia para generar el calendario.",
                }
            ], useImport: false,
            useExample: [
                {
                    text: "Generar fechas para el calendario de un mes",
                    content: `const fenextDate = new FenextjsDate(new Date());
const calendarDates = fenextDate.onGenerateDateByCalendar();
console.log("Fechas del calendario:", calendarDates);`,
                },
            ]
        },

        {
            id: "onValidateMinMax",
            name: "onValidateMinMax",
            type: "(params: { min?: Date; max?: Date; date?: Date }) => boolean",
            description: "Valida si la fecha proporcionada está dentro del rango especificado por las fechas mínima y máxima.",
            props: [
                {
                    id: "min",
                    type: "Date",
                    require: false,
                    description: "Fecha mínima que la fecha proporcionada debe cumplir. Si no se proporciona, no se valida el límite inferior.",
                },
                {
                    id: "max",
                    type: "Date",
                    require: false,
                    description: "Fecha máxima que la fecha proporcionada debe cumplir. Si no se proporciona, no se valida el límite superior.",
                },
                {
                    id: "date",
                    type: "Date",
                    require: false,
                    description: "Fecha que se va a validar. Si no se proporciona, se usa la fecha actual de la instancia.",
                },
            ],
            useImport: false,
            useExample: [
                {
                    text: "Validar si una fecha está dentro de un rango específico",
                    content: `const fenextDate = new FenextjsDate(new Date());
const isValid = fenextDate.onValidateMinMax({ 
    min: new Date(2023, 0, 1), 
    max: new Date(2023, 11, 31) 
}); // Retorna true si la fecha está dentro del rango, false en caso contrario
console.log(isValid);`,
                },
            ]
        },
        {
            id: "onCompareDate",
            name: "onCompareDate",
            type: "(params: { dateCompare: Date; compare: { [id in FenextjsDateCompareType]?: boolean } }) => { [id in FenextjsDateCompareSymbolType]: boolean }",
            description: "Compara la fecha actual con otra fecha proporcionada, utilizando los criterios de comparación especificados.",
            props: [
                {
                    id: "dateCompare",
                    type: "Date",
                    require: true,
                    description: "La fecha con la que se va a comparar la fecha actual.",
                },
                {
                    id: "compare",
                    type: "{ [id in FenextjsDateCompareType]?: boolean }",
                    require: true,
                    description: "Un objeto que contiene los criterios de comparación. Puede incluir propiedades como 'FullYear', 'Month', 'Date', etc.",
                },
            ],
            useImport: false,
            useExample: [
                {
                    text: "Comparar dos fechas con diferentes criterios",
                    content: `const fenextDate = new FenextjsDate(new Date());
const compareResult = fenextDate.onCompareDate({ 
    dateCompare: new Date(2023, 0, 1), 
    compare: { FullYear: true, Month: true, Date: true }
}); // Compara el año, mes y día de las dos fechas
console.log(compareResult);`,
                },
            ]
        },
    ],
};
