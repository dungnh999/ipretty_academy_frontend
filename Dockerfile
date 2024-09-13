# Sử dụng Node.js image
FROM node:18 AS build

# Đặt thư mục làm việc trong container
WORKDIR /var/www/frontend

# Sao chép file package.json, yarn.lock và cài đặt dependencies
COPY package.json yarn.lock ./

# Sử dụng Yarn để cài đặt các dependencies
RUN yarn install

# Sao chép toàn bộ mã nguồn vào container
COPY . ./

# Build ứng dụng React bằng Yarn và Webpack
RUN yarn build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /var/www/frontend/build /usr/share/nginx/html

# # Mở cổng 3000
# EXPOSE 3000

# Chạy ứng dụng với serve
CMD ["nginx", "-g", "daemon off;"]

