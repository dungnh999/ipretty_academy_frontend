import ErrorImage from 'academy/assets/Image/error-default.png'

export const handleDefaultImage = (e) => {
    e.target.src = ErrorImage;
    e.target.classList.add('object-cover'); // Thêm lớp object-cover khi ảnh bị lỗi
};