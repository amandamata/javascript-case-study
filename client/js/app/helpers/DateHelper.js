class DateHelper{
    constructor() {
        throw new Error('DateHelper cannot be instantiated');
    }

    static transformDate(date){
        if(!/\d{4}-\d{2}-\d{2}/.test(date)) throw Error('Date format aaaa-mm-dd');

        return new Date(...date.split('-').map((item, index) =>  item - index % 2));
    }

    static showDate(date){
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}
