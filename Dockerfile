# Sử dụng Node.js image
FROM node:18 AS build

# Đặt thư mục làm việc trong container
WORKDIR /var/www/frontend

# Sao chép file package.json, yarn.lock và cài đặt dependencies
COPY package.json yarn.lock ./

# Sử dụng Yarn để cài đặt các dependencies
RUN yarn install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng React bằng Yarn và Webpack
RUN yarn build

# Cài đặt serve để chạy ứng dụng trong môi trường production
RUN yarn global add serve

# Mở cổng 3000
EXPOSE 3000

# Chạy ứng dụng với serve
CMD ["serve", "-s", "build"]
