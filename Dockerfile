# Chọn hình ảnh Node.js làm base image
FROM node:18 AS build

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép package.json và yarn.lock vào thư mục làm việc
COPY package.json yarn.lock ./

# Cài đặt các phụ thuộc với Yarn
RUN yarn install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Xây dựng ứng dụng React
RUN yarn build

# Sử dụng Nginx để phục vụ ứng dụng React
FROM nginx:alpine

# Sao chép ứng dụng React đã build từ build stage vào thư mục của Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Mở cổng 80 để Nginx có thể phục vụ ứng dụng
EXPOSE 80

# Chạy Nginx trong chế độ nền
CMD ["nginx", "-g", "daemon off;"]
