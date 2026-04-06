
---

# Dự án: Trình Quản Lý Công Việc (Task Tracker CLI)

**Task Tracker** là một dự án dùng để theo dõi và quản lý các công việc của bạn. Trong bài tập này, bạn sẽ xây dựng một giao diện dòng lệnh (CLI) đơn giản để theo dõi những việc cần làm, những việc đã làm và những việc đang thực hiện. Dự án này giúp bạn thực hành các kỹ năng lập trình bao gồm: làm việc với hệ thống tệp tin (filesystem), xử lý đầu vào từ người dùng và xây dựng một ứng dụng CLI cơ bản.

## 1. Yêu cầu (Requirements)
Ứng dụng phải chạy được từ dòng lệnh, chấp nhận các hành động và đầu vào của người dùng dưới dạng đối số (arguments), và lưu trữ các tác vụ trong một tệp **JSON**. Người dùng có thể:

* **Thêm (Add), Cập nhật (Update) và Xóa (Delete)** công việc.
* Đánh dấu một công việc là **đang thực hiện (in progress)** hoặc **đã hoàn thành (done)**.
* **Liệt kê (List)** tất cả công việc.
* Liệt kê tất cả công việc theo trạng thái: **đã xong (done)**, **chưa làm (todo)**, hoặc **đang thực hiện (in-progress)**.

## 2. Các ràng buộc (Constraints)
* **Ngôn ngữ:** Bạn có thể sử dụng bất kỳ ngôn ngữ lập trình nào.
* **Đầu vào:** Sử dụng các đối số vị trí (positional arguments) để nhận dữ liệu từ người dùng.
* **Lưu trữ:** Sử dụng một tệp JSON trong thư mục hiện hành. Nếu tệp chưa tồn tại, ứng dụng phải tự tạo mới.
* **Thư viện:** Sử dụng các mô-đun hệ thống tệp (file system) có sẵn của ngôn ngữ. **Không** sử dụng các thư viện hoặc framework bên ngoài.
* **Xử lý lỗi:** Đảm bảo xử lý các lỗi và trường hợp ngoại lệ một cách mượt mà.

## 3. Ví dụ về câu lệnh
Dưới đây là danh sách các lệnh và cách sử dụng:

```bash
# Thêm một công việc mới
task-cli add "Đi chợ"
# Đầu ra: Task added successfully (ID: 1)

# Cập nhật và xóa công việc
task-cli update 1 "Đi chợ và nấu cơm tối"
task-cli delete 1

# Đánh dấu trạng thái công việc
task-cli mark-in-progress 1
task-cli mark-done 1

# Liệt kê công việc
task-cli list             # Tất cả
task-cli list done        # Đã xong
task-cli list todo        # Chưa làm
task-cli list in-progress # Đang làm
```

## 4. Thuộc tính của công việc (Task Properties)
Mỗi công việc trong tệp JSON cần có các thuộc tính sau:
* `id`: Mã định danh duy nhất (số nguyên).
* `description`: Mô tả ngắn gọn về công việc.
* `status`: Trạng thái (`todo`, `in-progress`, `done`).
* `createdAt`: Ngày và giờ tạo công việc.
* `updatedAt`: Ngày và giờ cập nhật công việc lần cuối.

## 5. Các bước thực hiện
1.  **Thiết lập môi trường:** Chọn ngôn ngữ lập trình và trình soạn thảo mã nguồn (VS Code, PyCharm...).
2.  **Khởi tạo dự án:** Tạo thư mục dự án và khởi tạo Git để quản lý phiên bản.
3.  **Triển khai tính năng:** * Xây dựng cấu trúc CLI cơ bản để nhận đối số.
    * Lần lượt thực hiện các tính năng: Thêm -> Liệt kê -> Cập nhật -> Đánh dấu trạng thái -> Xóa.
4.  **Kiểm tra và sửa lỗi:** Kiểm tra tệp JSON sau mỗi lệnh để đảm bảo dữ liệu được lưu đúng định dạng.
5.  **Hoàn thiện:** Dọn dẹp mã nguồn, thêm chú thích và viết tệp `README.md` hướng dẫn cách sử dụng.

---