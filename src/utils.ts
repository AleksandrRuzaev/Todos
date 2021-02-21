const formatString = (value: string, ...args: any): string => {
    let result: string = value;

    if (args?.length) {
        const count = ((value || '').match(/\{\d+\}/g) || []).length;

        for (let i = 0; i < count; i++) {
            result = result.replace(/\{\d+\}/, args[i]);
        }
    }

    return result;
};

export { formatString };
