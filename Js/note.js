function getNote(data, date, hour, priorty) {
    return {
        id: `n${data.split(' ')[0]}_${Math.floor(Math.random() * 101)}`,
        hasAnimated: false,
        hasChaked: false,
        data,
        date,
        hour,
        priorty,
    };
}