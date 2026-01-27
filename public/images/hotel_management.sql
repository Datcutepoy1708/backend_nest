-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2025 at 05:15 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blog_id` int(11) NOT NULL,
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `content` longtext NOT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `category` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` enum('Draft','Published','Archived') DEFAULT 'Draft',
  `view_count` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`blog_id`, `title`, `slug`, `description`, `content`, `thumbnail`, `category`, `status`, `view_count`, `created_at`, `updated_at`, `deleted`) VALUES
(1, '5 Điều Bạn Không Nên Bỏ Lỡ Khi Đến OceanPearl Hotel', '5-dieu-khong-nen-bo-lo-khi-den-oceanpearl', 'Khám phá những trải nghiệm tuyệt vời tại khách sạn OceanPearl với những tiện ích hàng đầu', '<p>OceanPearl Hotel là một trong những khách sạn sang trọng nhất ở thành phố. Khi đến đây, bạn sẽ có cơ hội trải nghiệm những dịch vụ tuyệt vời.</p><h3>1. Spa & Massage</h3><p>Thư giãn tại spa của chúng tôi với các liệu pháp massage truyền thống và hiện đại.</p><h3>2. Phòng Tập Gym</h3><p>Giữ dáng với thiết bị tập luyện hiện đại và HLV chuyên nghiệp.</p><h3>3. Dịch Vụ Phòng 24/7</h3><p>Thưởng thức các bữa ăn ngon tại phòng của bạn bất kỳ lúc nào.</p>', '/images/blog/oceanpearl-experience.jpg', 'Du Lịch', 'Published', 1250, '2025-11-06 03:51:18', '2025-11-06 03:51:18', NULL),
(2, 'Những Lợi Ích Của Việc Đặt Phòng Trực Tuyến', 'loi-ich-dat-phong-truc-tuyen', 'Tìm hiểu tại sao đặt phòng online là lựa chọn thông minh nhất', '<p>Đặt phòng khách sạn trực tuyến không chỉ tiện lợi mà còn mang lại nhiều lợi ích bất ngờ.</p><h3>Lợi Ích 1: Giá Tốt Nhất</h3><p>Bạn sẽ nhận được giá ưu đãi đặc biệt khi đặt phòng thông qua website của chúng tôi.</p><h3>Lợi Ích 2: Không Phí Ẩn Nấp</h3><p>Tất cả giá cả đều được công khai rõ ràng, không có bất kỳ chi phí bất ngờ.</p><h3>Lợi Ích 3: Xác Nhận Ngay Lập Tức</h3><p>Sau khi đặt, bạn sẽ nhận được email xác nhận trong vòng vài phút.</p>', '/images/blog/online-booking.jpg', 'Hướng Dẫn', 'Published', 856, '2025-11-06 03:51:18', '2025-11-06 03:51:18', NULL),
(3, 'Mùa Du Lịch Tốt Nhất Để Ghé Thăm Thành Phố', 'mua-du-lich-tot-nhat-ghe-tham-thanh-pho', 'Chuẩn bị kế hoạch du lịch của bạn vào đúng thời điểm', '<p>Thành phố có những mùa du lịch khác nhau, mỗi mùa đều có những điểm đặc biệt riêng.</p><h3>Mùa Hè (Tháng 5-8)</h3><p>Thời tiết nắng nóng nhưng lại là mùa cao điểm du lịch. Nhiều sự kiện và lễ hội được tổ chức.</p><h3>Mùa Thu (Tháng 9-11)</h3><p>Thời tiết dễ chịu nhất, không quá nóng cũng không quá lạnh. Đây là thời điểm lý tưởng để du lịch.</p><h3>Mùa Đông (Tháng 12-2)</h3><p>Thời tiết lạnh nhưng không quá khắc nghiệt. Đây là mùa lý tưởng cho những ai thích thời tiết mát mẻ.</p>', '/images/blog/best-season.jpg', 'Du Lịch', 'Published', 2145, '2025-11-06 03:51:18', '2025-11-06 03:51:18', NULL),
(4, 'Các Truyện Về Khách Sạn: Lịch Sử Và Phát Triển', 'cac-truyen-ve-khach-san-lich-su-va-phat-trien', 'Tìm hiểu về lịch sử phát triển của ngành khách sạn qua các thời kỳ', '<p>Ngành khách sạn đã trải qua những thay đổi lớn trong suốt hàng trăm năm lịch sử.</p><h3>Thời Kỳ Đầu</h3><p>Những khách sạn đầu tiên xuất hiện vào thế kỷ 17 tại châu Âu, với những tiện nghi rất sơ khai.</p><h3>Kỷ Nguyên Hiện Đại</h3><p>Từ thế kỷ 20 trở đi, khách sạn bắt đầu phát triển mạnh mẽ với các tiện ích hàng đầu.</p><h3>Hiện Tại</h3><p>Ngày nay, khách sạn không chỉ cung cấp chỗ ở mà còn là những trung tâm giải trí và thư giãn toàn diện.</p>', '/images/blog/hotel-history.jpg', 'Lịch Sử', 'Draft', 0, '2025-11-06 03:51:18', '2025-11-06 03:51:18', NULL),
(5, 'Cách Tiết Kiệm Tiền Khi Du Lịch Tại Khách Sạn', 'cach-tiet-kiem-tien-khi-du-lich-tai-khach-san', 'Những mẹo và thủ thuật để giảm chi phí du lịch mà vẫn tận hưởng dịch vụ tốt', '<p>Du lịch không nhất thiết phải tốn kém. Dưới đây là những cách để tiết kiệm tiền khi lưu trú tại khách sạn.</p><h3>Tip 1: Đặt Trước Sớm</h3><p>Đặt phòng với thời gian trước càng sớm càng nhận được giá ưu đãi tốt hơn.</p><h3>Tip 2: Chọn Off-Season</h3><p>Tránh những mùa cao điểm, bạn sẽ tiết kiệm được một khoảng tiền đáng kể.</p><h3>Tip 3: Sử Dụng Loyalty Program</h3><p>Đăng ký chương trình thành viên để nhận các ưu đãi đặc biệt và giảm giá suất.</p>', '/images/blog/save-money.jpg', 'Hướng Dẫn', 'Published', 756, '2025-11-06 03:51:18', '2025-11-06 03:51:18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `booking_id` int(11) NOT NULL,
  `booking_date` datetime NOT NULL,
  `check_in_date` date NOT NULL,
  `check_out_date` date NOT NULL,
  `quantity` int(11) NOT NULL,
  `special_request` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `booking_method` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `deposit` decimal(12,2) DEFAULT NULL,
  `status` enum('Pending','Confirmed','Cancelled','Completed') DEFAULT 'Pending',
  `customer_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted` timestamp NULL DEFAULT NULL
) ;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`booking_id`, `booking_date`, `check_in_date`, `check_out_date`, `quantity`, `special_request`, `booking_method`, `deposit`, `status`, `customer_id`, `room_id`, `created_at`, `deleted`) VALUES
(1, '2024-11-01 10:30:00', '2024-11-15', '2024-11-20', 2, 'Phòng có view biển, vui lòng sắp xếp', 'Website', 300.00, 'Confirmed', 1, 1, '2025-11-06 04:06:52', NULL),
(2, '2024-11-02 14:15:00', '2024-11-18', '2024-11-22', 1, 'Yêu cầu chuông báo thức vào lúc 6h sáng', 'Phone', 500.00, 'Confirmed', 2, 2, '2025-11-06 04:06:52', NULL),
(3, '2024-11-03 09:45:00', '2024-11-20', '2024-11-25', 3, 'Gia đình 2 bé, cần giường phụ', 'Website', 450.00, 'Pending', 3, 3, '2025-11-06 04:06:52', NULL),
(4, '2024-11-04 16:20:00', '2024-11-25', '2024-11-28', 2, 'Công ty booking, yêu cầu hóa đơn công ty', 'Email', 600.00, 'Confirmed', 4, 4, '2025-11-06 04:06:52', NULL),
(5, '2024-11-05 11:00:00', '2024-11-22', '2024-11-24', 1, 'Mong muốn phòng im tĩnh, xa từ khu phục vụ', 'Website', 150.00, 'Completed', 5, 5, '2025-11-06 04:06:52', NULL),
(6, '2024-11-06 13:30:00', '2024-11-28', '2024-12-02', 2, 'Đặt dịch vụ spa, xin giảm giá', 'Phone', 400.00, 'Confirmed', 1, 6, '2025-11-06 04:06:52', NULL),
(7, '2024-11-06 15:45:00', '2024-11-26', '2024-11-29', 1, 'Yêu cầu Late checkout lúc 2h chiều', 'Website', 250.00, 'Pending', 2, 7, '2025-11-06 04:06:52', NULL),
(8, '2024-11-07 10:15:00', '2024-12-01', '2024-12-05', 4, 'Phòng family, có trẻ em nhỏ', 'Website', 500.00, 'Confirmed', 3, 8, '2025-11-06 04:06:52', NULL),
(9, '2024-11-07 17:30:00', '2024-11-30', '2024-12-03', 2, 'Không có yêu cầu gì đặc biệt', 'Email', 350.00, 'Cancelled', 4, 9, '2025-11-06 04:06:52', NULL),
(10, '2024-11-08 12:00:00', '2024-12-10', '2024-12-15', 1, 'Honeymoon package, cần trang trí đặc biệt', 'Website', 750.00, 'Pending', 5, 10, '2025-11-06 04:06:52', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `booking_service`
--

CREATE TABLE `booking_service` (
  `booking_service_id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `unit_price` decimal(12,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking_service`
--

INSERT INTO `booking_service` (`booking_service_id`, `booking_id`, `service_id`, `quantity`, `unit_price`, `created_at`, `deleted`) VALUES
(1, 1, 1, 1, 150.00, '2025-11-06 04:06:52', NULL),
(2, 1, 3, 2, 50.00, '2025-11-06 04:06:52', NULL),
(3, 2, 2, 3, 50.00, '2025-11-06 04:06:52', NULL),
(4, 3, 5, 1, 120.00, '2025-11-06 04:06:52', NULL),
(5, 4, 4, 1, 80.00, '2025-11-06 04:06:52', NULL),
(6, 5, 1, 2, 150.00, '2025-11-06 04:06:52', NULL),
(7, 6, 2, 5, 50.00, '2025-11-06 04:06:52', NULL),
(8, 6, 3, 3, 25.00, '2025-11-06 04:06:52', NULL),
(9, 7, 4, 1, 80.00, '2025-11-06 04:06:52', NULL),
(10, 8, 5, 2, 120.00, '2025-11-06 04:06:52', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `full_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gender` enum('Male','Female','Other') DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `nationality` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `id_card` varchar(30) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `account_status` enum('Active','Locked') DEFAULT 'Active',
  `customer_type` enum('Regular','VIP','Corporate') DEFAULT 'Regular',
  `loyalty_points` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `full_name`, `gender`, `date_of_birth`, `nationality`, `id_card`, `email`, `phone`, `username`, `password`, `account_status`, `customer_type`, `loyalty_points`, `created_at`, `deleted`) VALUES
(1, 'Nguyễn Văn An', 'Male', '1990-05-15', 'Vietnam', '123456789', 'nguyenvanan@email.com', '0912345678', 'nguyenvanan', 'hashed_password_1', 'Active', 'Regular', 500, '2025-11-06 04:05:52', NULL),
(2, 'Trần Thị Bảo', 'Female', '1992-08-22', 'Vietnam', '987654321', 'tranthbao@email.com', '0923456789', 'tranthbao', 'hashed_password_2', 'Active', 'VIP', 1200, '2025-11-06 04:05:52', NULL),
(3, 'Phạm Minh Tuấn', 'Male', '1988-03-10', 'Vietnam', '456123789', 'phammtuan@email.com', '0934567890', 'phammtuan', 'hashed_password_3', 'Active', 'Regular', 300, '2025-11-06 04:05:52', NULL),
(4, 'Lê Hương Giang', 'Female', '1995-11-30', 'Vietnam', '789456123', 'lehgiang@email.com', '0945678901', 'lehgiang', 'hashed_password_4', 'Active', 'Corporate', 2000, '2025-11-06 04:05:52', NULL),
(5, 'Hoàng Quốc Huy', 'Male', '1993-07-17', 'Vietnam', '321654987', 'hoangqhuy@email.com', '0956789012', 'hoangqhuy', 'hashed_password_5', 'Active', 'Regular', 150, '2025-11-06 04:05:52', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `invoice_id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `room_charge` decimal(12,2) NOT NULL,
  `service_charge` decimal(12,2) DEFAULT 0.00,
  `vat` decimal(12,2) DEFAULT 0.00,
  `other_fees` decimal(12,2) DEFAULT 0.00,
  `total_amount` decimal(12,2) NOT NULL,
  `payment_method` enum('Cash','Bank Transfer','Credit Card','E-Wallet') DEFAULT 'Cash',
  `status` enum('Unpaid','Paid','Refunded') DEFAULT 'Unpaid',
  `payment_time` datetime DEFAULT NULL,
  `note` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`invoice_id`, `booking_id`, `room_charge`, `service_charge`, `vat`, `other_fees`, `total_amount`, `payment_method`, `status`, `payment_time`, `note`, `created_at`, `deleted`) VALUES
(1, 1, 500.00, 200.00, 70.00, 0.00, 770.00, 'Bank Transfer', 'Paid', '2024-11-15 08:00:00', 'Thanh toán đủ', '2025-11-06 04:06:52', NULL),
(2, 2, 800.00, 150.00, 95.00, 0.00, 1045.00, 'Credit Card', 'Paid', '2024-11-18 09:30:00', 'Thanh toán đủ', '2025-11-06 04:06:52', NULL),
(3, 3, 600.00, 120.00, 86.00, 0.00, 806.00, 'Cash', 'Unpaid', NULL, 'Chờ thanh toán', '2025-11-06 04:06:52', NULL),
(4, 4, 900.00, 80.00, 108.00, 0.00, 1088.00, 'Bank Transfer', 'Paid', '2024-11-25 07:00:00', 'Thanh toán đủ', '2025-11-06 04:06:52', NULL),
(5, 5, 200.00, 300.00, 50.00, 0.00, 550.00, 'Cash', 'Paid', '2024-11-24 11:00:00', 'Thanh toán đủ', '2025-11-06 04:06:52', NULL),
(6, 6, 1000.00, 350.00, 135.00, 0.00, 1485.00, 'Credit Card', 'Paid', '2024-11-28 16:00:00', 'Thanh toán đủ', '2025-11-06 04:06:52', NULL),
(7, 7, 450.00, 80.00, 53.00, 0.00, 583.00, 'E-Wallet', 'Unpaid', NULL, 'Chờ thanh toán', '2025-11-06 04:06:52', NULL),
(8, 8, 1200.00, 240.00, 144.00, 0.00, 1584.00, 'Bank Transfer', 'Paid', '2024-12-01 10:00:00', 'Thanh toán đủ', '2025-11-06 04:06:52', NULL),
(9, 10, 750.00, 0.00, 75.00, 0.00, 825.00, 'Credit Card', 'Unpaid', NULL, 'Honeymoon package', '2025-11-06 04:06:52', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `review_id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL CHECK (`rating` >= 1 and `rating` <= 5),
  `comment` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` enum('Pending','Approved','Hidden') DEFAULT 'Pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`review_id`, `booking_id`, `rating`, `comment`, `status`, `created_at`, `deleted`) VALUES
(1, 1, 5, 'Khách sạn tuyệt vời! Nhân viên rất thân thiện, phòng sạch sẽ và tiện nghi. Sẽ quay lại lần nữa!', 'Approved', '2025-11-06 04:06:52', NULL),
(2, 2, 4, 'Phòng rất thoải mái, view đẹp. Chỉ có một điều nhỏ là dịch vụ room service hơi chậm.', 'Approved', '2025-11-06 04:06:52', NULL),
(3, 5, 5, 'Trải nghiệm tuyệt vời từ check-in đến check-out. Phòng sạch, đồ ăn ngon, dịch vụ chuyên nghiệp.', 'Approved', '2025-11-06 04:06:52', NULL),
(4, 6, 4, 'Spa rất thư giãn, nhân viên chuyên nghiệp. Giá hơi cao nhưng chất lượng xứng đáng.', 'Pending', '2025-11-06 04:06:52', NULL),
(5, 8, 5, 'Phòng family rất spacious, thích hợp cho gia đình. Các tiện ích như hình chụp. Rất hài lòng!', 'Approved', '2025-11-06 04:06:52', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `room_id` int(11) NOT NULL,
  `room_number` varchar(10) NOT NULL,
  `floor` int(11) NOT NULL,
  `room_type_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` enum('Available','Booked','Occupied','Maintenance','Cleaning') DEFAULT 'Available',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_id`, `room_number`, `floor`, `room_type_id`, `image`, `status`, `updated_at`, `deleted`) VALUES
(1, '101', 1, 3, '/images/rooms/101.jpg', 'Available', '2025-11-10 02:40:32', NULL),
(2, '102', 1, 1, '/images/rooms/102.jpg', 'Available', '2025-11-06 03:47:33', NULL),
(3, '103', 1, 1, '/images/rooms/103.jpg', 'Booked', '2025-11-06 03:47:33', NULL),
(4, '104', 1, 5, '/images/rooms/104.jpg', 'Available', '2025-11-06 03:47:33', NULL),
(5, '105', 1, 5, '/images/rooms/105.jpg', 'Maintenance', '2025-11-06 03:47:33', NULL),
(6, '201', 2, 2, '/images/rooms/201.jpg', 'Available', '2025-11-06 03:47:33', NULL),
(7, '202', 2, 5, '/images/rooms/202.jpg', 'Occupied', '2025-11-10 02:40:23', NULL),
(8, '203', 2, 2, '/images/rooms/203.jpg', 'Available', '2025-11-06 03:47:33', NULL),
(9, '204', 2, 4, '/images/rooms/204.jpg', 'Available', '2025-11-06 03:47:33', NULL),
(10, '205', 2, 4, '/images/rooms/205.jpg', 'Booked', '2025-11-06 03:47:33', NULL),
(11, '301', 3, 3, '/images/rooms/301.jpg', 'Available', '2025-11-06 03:47:33', NULL),
(12, '302', 3, 3, '/images/rooms/302.jpg', 'Occupied', '2025-11-06 03:47:33', NULL),
(13, '303', 3, 2, '/images/rooms/303.jpg', 'Cleaning', '2025-11-06 03:47:33', NULL),
(14, '304', 3, 2, '/images/rooms/304.jpg', 'Available', '2025-11-06 03:47:33', NULL),
(15, '401', 4, 1, '/images/rooms/401.jpg', 'Available', '2025-11-06 03:47:33', NULL),
(16, '402', 4, 1, '/images/rooms/402.jpg', 'Available', '2025-11-06 03:47:33', NULL),
(17, '403', 4, 1, '/images/rooms/403.jpg', 'Booked', '2025-11-06 03:47:33', NULL),
(18, '501', 5, 5, NULL, 'Booked', '2025-11-06 04:22:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `room_type`
--

CREATE TABLE `room_type` (
  `room_type_id` int(11) NOT NULL,
  `room_type_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `base_price` decimal(12,2) NOT NULL,
  `capacity` int(11) NOT NULL,
  `amenities` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `area` decimal(8,2) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room_type`
--

INSERT INTO `room_type` (`room_type_id`, `room_type_name`, `description`, `base_price`, `capacity`, `amenities`, `area`, `image`, `created_at`, `deleted`) VALUES
(1, 'Standard Room', 'Phòng tiêu chuẩn với đầy đủ tiện nghi cơ bản, thích hợp cho 1-2 khách', 100.00, 2, 'Giường đơn/đôi, WiFi, TV, Phòng tắm riêng, Điều hòa', 25.00, '/images/room-types/standard-room.jpg', '2025-11-06 03:47:33', NULL),
(2, 'Deluxe Room', 'Phòng cao cấp với trang thiết bị hiện đại và tầm nhìn đẹp', 150.00, 2, 'Giường king size, WiFi, TV Smart, Ban công, Phòng tắm với bồn tắm', 35.00, '/images/room-types/deluxe-room.jpg', '2025-11-06 03:47:33', NULL),
(3, 'Suite Room', 'Phòng nghỉ dưỡng cao cấp nhất với phòng khách riêng', 250.00, 4, 'Phòng ngủ + Phòng khách, Pantry, WiFi, TV 4K, Jacuzzi, Ban công lớn', 60.00, '/images/room-types/suite-room.jpg', '2025-11-06 03:47:33', NULL),
(4, 'Family Room', 'Phòng dành cho gia đình với 2-3 giường ngủ riêng biệt', 180.00, 4, 'Nhiều giường ngủ, WiFi, TV, Phòng tắm rộng, Khu vui chơi trẻ em', 50.00, '/images/room-types/family-room.jpg', '2025-11-06 03:47:33', NULL),
(5, 'Budget Room', 'Phòng tiết kiệm với tiện nghi cơ bản, lý tưởng cho khách lưu trú ngắn', 60.00, 1, 'Giường đơn, WiFi, Phòng tắm riêng, Điều hòa', 18.00, '/images/room-types/budget-room.jpg', '2025-11-06 03:47:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `service_id` int(11) NOT NULL,
  `service_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `service_type` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `unit` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` enum('Active','Inactive') DEFAULT 'Active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`service_id`, `service_name`, `description`, `service_type`, `price`, `unit`, `image`, `status`, `created_at`, `deleted`) VALUES
(1, 'Spa & Massage', 'Dịch vụ massage toàn thân thư giãn với các liệu pháp truyền thống và hiện đại', 'Wellness', 150.00, 'session/hour', '/images/services/spa-massage.jpg', 'Active', '2025-11-06 03:42:48', NULL),
(2, 'Gym & Fitness', 'Phòng tập gym hiện đại với đầy đủ thiết bị, HLV chuyên nghiệp hỗ trợ', 'Fitness', 50.00, 'day', '/images/services/gym-fitness.jpg', 'Active', '2025-11-06 03:42:48', NULL),
(3, 'Room Service', 'Dịch vụ phục vụ đồ ăn, đồ uống tại phòng khách sạn 24/7', 'Food & Beverage', 25.00, 'order', '/images/services/room-service.jpg', 'Active', '2025-11-06 03:42:48', NULL),
(4, 'Airport Transfer', 'Dịch vụ đưa đón sân bay bằng xe riêng thoải mái và an toàn', 'Transportation', 80.00, 'trip', '/images/services/airport-transfer.jpg', 'Active', '2025-11-06 03:42:48', NULL),
(5, 'Tour Guide', 'Hướng dẫn viên du lịch chuyên nghiệp cho các tour tham quan địa phương', 'Tour', 120.00, 'day', '/images/services/tour-guide.jpg', 'Active', '2025-11-06 03:42:48', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blog_id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `idx_blog_status` (`status`),
  ADD KEY `idx_blog_category` (`category`),
  ADD KEY `idx_blog_deleted` (`deleted`),
  ADD KEY `idx_blog_slug` (`slug`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `idx_booking_customer` (`customer_id`),
  ADD KEY `idx_booking_room` (`room_id`),
  ADD KEY `idx_booking_status` (`status`),
  ADD KEY `idx_booking_dates` (`check_in_date`,`check_out_date`),
  ADD KEY `idx_booking_deleted` (`deleted`);

--
-- Indexes for table `booking_service`
--
ALTER TABLE `booking_service`
  ADD PRIMARY KEY (`booking_service_id`),
  ADD UNIQUE KEY `unique_booking_service` (`booking_id`,`service_id`),
  ADD KEY `service_id` (`service_id`),
  ADD KEY `idx_booking_service_deleted` (`deleted`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `idx_customer_email` (`email`),
  ADD KEY `idx_customer_deleted` (`deleted`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`invoice_id`),
  ADD UNIQUE KEY `booking_id` (`booking_id`),
  ADD KEY `idx_invoice_status` (`status`),
  ADD KEY `idx_invoice_deleted` (`deleted`),
  ADD KEY `idx_invoice_booking` (`booking_id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`review_id`),
  ADD UNIQUE KEY `booking_id` (`booking_id`),
  ADD KEY `idx_review_status` (`status`),
  ADD KEY `idx_review_deleted` (`deleted`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_id`),
  ADD UNIQUE KEY `unique_room` (`room_number`),
  ADD KEY `idx_room_status` (`status`),
  ADD KEY `idx_room_deleted` (`deleted`),
  ADD KEY `idx_room_type_id` (`room_type_id`),
  ADD KEY `idx_room_roomtype` (`room_type_id`);

--
-- Indexes for table `room_type`
--
ALTER TABLE `room_type`
  ADD PRIMARY KEY (`room_type_id`),
  ADD UNIQUE KEY `room_type_name` (`room_type_name`),
  ADD KEY `idx_room_type_deleted` (`deleted`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`service_id`),
  ADD KEY `idx_service_type` (`service_type`),
  ADD KEY `idx_service_status` (`status`),
  ADD KEY `idx_service_deleted` (`deleted`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `booking_service`
--
ALTER TABLE `booking_service`
  MODIFY `booking_service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `invoice_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `room_type`
--
ALTER TABLE `room_type`
  MODIFY `room_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`);

--
-- Constraints for table `booking_service`
--
ALTER TABLE `booking_service`
  ADD CONSTRAINT `booking_service_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`booking_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `booking_service_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`);

--
-- Constraints for table `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`booking_id`) ON DELETE CASCADE;

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`booking_id`) ON DELETE CASCADE;

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`room_type_id`) REFERENCES `room_type` (`room_type_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
