export const debounce = (func, delay) => {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
            clearTimeout(timer);
        }, delay);
    };
};

// 时间戳转日期
export const getGMT = function (dateTime) {
    if (dateTime === null) {
        return '';
    }
    let date = new Date(parseInt(dateTime) * 1000);
    let now = new Date().getTime();
    let second = Math.floor((now - date) / 1000);
    let minute = Math.floor(second / 60);
    let hour = Math.floor(minute / 60);
    let day = Math.floor(hour / 24);
    let month = Math.floor(day / 31);
    let year = Math.floor(month / 12);
    let Year = date.getFullYear();
    let Moth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let Day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    if (year > 0) {
        return `${Year}-${Moth}-${Day}`;
    } else if (day > 0) {
        return `${Moth}-${Day}`;
    } else if (hour > 0) {
        return hour + '小时前';
    } else if (minute > 0) {
        return minute + '分钟前';
    } else if (second > 10) {
        return second + '秒前';
    } else {
        return '刚刚';
    }
};
