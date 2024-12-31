declare const _default: {
    id: string;
    name: string;
    description: string;
    useImport: boolean;
    useBreadcrumb: boolean;
    functions: ({
        id: string;
        name: string;
        type: string;
        description: string;
        props: {
            id: string;
            type: string;
            require: boolean;
            description: string;
        }[];
        useImport: boolean;
        useExample: {
            text: string;
            content: string;
        }[];
    } | {
        id: string;
        name: string;
        type: string;
        description: string;
        props: {
            id: string;
            type: string;
            require: boolean;
            description: string;
        }[];
        useExample: {
            text: string;
            content: string;
        }[];
        useImport?: undefined;
    })[];
};
export default _default;
