const TOKEN_STORAGE_KEY = {
    AUTH: "authToken",
    REFRESH: "refreshToken",
    USER: "user",
    ISADMINPAGE: "isAdminPage",
    INDEXTAB: "indexTab",
};
export const getTokens = () => ({
    authToken: localStorage.getItem(TOKEN_STORAGE_KEY.AUTH),
    user: JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY.USER)),
    // refreshToken: localStorage.getItem(JSON.parse(TOKEN_STORAGE_KEY.REFRESH)),
});

export const setTokens = (authToken, user) => {
    localStorage.setItem(TOKEN_STORAGE_KEY.AUTH, authToken);
    localStorage.setItem(TOKEN_STORAGE_KEY.USER, JSON.stringify(user));
};

export const formartCurrencyVNĐ = (number) => {
    return Number(number).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};


export const convertToMinutesAndSeconds = (decimalMinutes) => {
    const minutes = Math.floor(decimalMinutes); // Lấy phần nguyên để biểu diễn phút
    const decimalPart = decimalMinutes - minutes; // Lấy phần thập phân
    const seconds = Math.round(decimalPart * 60); // Chuyển phần thập phân thành giây
    return `${minutes}:${seconds}`;
}

export const fomartTimeString = (timestamp) => {
    const year = timestamp.substring(0, 4);
    const month = timestamp.substring(4, 6);
    const day = timestamp.substring(6, 8);
    const hours = timestamp.substring(8, 10);
    const minutes = timestamp.substring(10, 12);
    const seconds = timestamp.substring(12, 14);

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}


export const convertToDayHourMinute = (total_duration) => {
    const days = Math.floor(total_duration / 24); // Tính số ngày
    const hours = Math.floor(total_duration % 24); // Tính số giờ còn lại
    const minutes = Math.floor((total_duration - Math.floor(total_duration)) * 60); // Tính số phút còn lại
    return `${days} ngày, ${hours} giờ, ${minutes} phút`;
};

export const convertToHourMinuteCourse = (total_duration) => {
    const days = Math.floor(total_duration / 24); // Tính số ngày
    const hours = Math.floor(total_duration % 24); // Tính số giờ còn lại
    const minutes = Math.round((total_duration - Math.floor(total_duration)) * 60); // Chuyển phần thập phân thành phút và làm tròn

    // Nếu có ngày, hiển thị ngày, giờ và phút
    if (days > 0) {
        return `${days} ngày  ${hours} giờ  ${minutes} phút`;
    }

    // Nếu không có ngày, chỉ hiển thị giờ và phút
    if (hours > 0) {
        return `${hours} giờ  ${minutes} phút`;
    }

    // Nếu chỉ có phút
    return `${minutes} phút`;
};
