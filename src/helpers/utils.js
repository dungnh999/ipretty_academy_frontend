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
    const minutes = Math.floor(decimalMinutes / 60); // Tính số phút
    const remainingSeconds = decimalMinutes % 60; // Lấy phần giây còn lại
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`; // Định dạng giây với 2 chữ số
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
    const days = Math.floor(total_duration / (24 * 3600)); // Số ngày
    const hours = Math.floor((total_duration % (24 * 3600)) / 3600); // Số giờ còn lại
    const minutes = Math.floor((total_duration % 3600) / 60); // Số phút còn lại
    const seconds = (total_duration % 60).toFixed(0); // Lấy số giây (làm tròn 2 chữ số thập phân)

    // Nếu có ngày, hiển thị ngày, giờ, phút
    if (days > 0) {
        return `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
    }

    // Nếu có giờ, hiển thị giờ, phút
    if (hours > 0) {
        return `${hours} giờ ${minutes} phút ${seconds} giây`;
    }

    // Nếu chỉ có phút và giây
    if (minutes > 0) {
        return `${minutes} phút ${seconds} giây`;
    }

    // Nếu chỉ có giây
    return `${seconds} giây`;
};



export const timeAgoTemplate = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const seconds = Math.floor((now - time) / 1000);

    if (seconds < 60) {
        return `${seconds} giây trước`;
    }
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes} phút trước`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours} giờ trước`;
    }
    const days = Math.floor(hours / 24);
    return `${days} ngày trước`;
};
