const questionData = {
  mainQuestions: [
    {
      question:
        "Một bản tin thời tiết ghi 38°C. Để hiểu đúng thông tin này, cần biết thêm điều gì?",
      answers: [
        "Dung lượng của tệp chứa bản tin",
        "Thiết bị dùng để xem bản tin",
        "Địa điểm và thời điểm đo nhiệt độ",
        "Phần mềm dùng để tạo bản tin",
      ],
      correct: 2,
    },
    {
      question:
        "Một tệp ảnh có dung lượng 2 MB. Theo cách quy đổi trong SGK, dung lượng đó bằng bao nhiêu KB?",
      answers: ["2048 KB", "2000 KB", "1024 KB", "4096 KB"],
      correct: 0,
    },
    {
      question:
        "Thiết bị nào có thể tự xử lí dữ liệu và thực hiện hành động theo chương trình đã cài đặt?",
      answers: [
        "Đồng hồ cơ hiển thị thời gian",
        "Quạt điện điều chỉnh bằng núm xoay",
        "Đèn bàn bật bằng công tắc",
        "Robot hút bụi tự tránh vật cản",
      ],
      correct: 3,
    },
    {
      question:
        "Muốn kết nối điện thoại với mạng Wi-Fi của trường, học sinh cần thực hiện thao tác nào?",
      answers: [
        "Bật Bluetooth và chọn tên máy tính",
        "Bật Wi-Fi và chọn đúng mạng cần kết nối",
        "Bật chế độ máy bay rồi mở trình duyệt",
        "Bật định vị rồi chọn tên mạng di động",
      ],
      correct: 1,
    },
    {
      question:
        "Một phòng máy có 40 máy tính kết nối để chia sẻ máy in. Hệ thống này thuộc loại mạng nào?",
      answers: ["Mạng LAN", "Mạng Internet", "Mạng di động", "Mạng toàn cầu"],
      correct: 0,
    },
    {
      question:
        "Khi nhận được tệp đính kèm từ người gửi không rõ danh tính, cách xử lí nào phù hợp nhất?",
      answers: [
        "Mở tệp để xác định nội dung",
        "Tải tệp về rồi đổi tên tệp",
        "Chuyển tệp cho bạn bè kiểm tra",
        "Không mở tệp và xác minh nguồn gửi",
      ],
      correct: 3,
    },
    {
      question:
        "Một thẻ nhớ 4 GB đã sử dụng 1024 MB. Nếu mỗi ảnh mới chiếm 3 MB, thẻ còn lưu tối đa bao nhiêu ảnh?",
      answers: ["1365 ảnh", "1024 ảnh", "768 ảnh", "3072 ảnh"],
      correct: 1,
    },
    {
      question:
        "Hệ thống tưới cây tự bật khi cảm biến báo đất khô. Bộ phận nào trực tiếp cung cấp dữ liệu đầu vào?",
      answers: [
        "Máy bơm nước",
        "Bộ điều khiển",
        "Cảm biến độ ẩm",
        "Nguồn điện",
      ],
      correct: 2,
    },
    {
      question:
        "Điện thoại đã kết nối Wi-Fi nhưng không truy cập được Internet. Nhận định nào hợp lí nhất?",
      answers: [
        "Điện thoại chưa được kết nối Bluetooth",
        "Điện thoại không thể tham gia mạng LAN",
        "Mọi thiết bị dùng Wi-Fi đều đã hỏng",
        "Mạng Wi-Fi có thể đang mất kết nối Internet",
      ],
      correct: 3,
    },
    {
      question:
        "Khi chuyển ảnh từ điện thoại sang máy tính bằng cáp USB, điều kiện nào thường cần thiết?",
      answers: [
        "Chọn chế độ truyền tệp trên điện thoại",
        "Bật dữ liệu di động trên điện thoại",
        "Đăng nhập cùng tài khoản mạng xã hội",
        "Kết nối hai thiết bị với cùng mạng Wi-Fi",
      ],
      correct: 0,
    },
    {
      question:
        "Một nhóm học sinh cùng chỉnh sửa tài liệu trực tuyến từ nhiều địa điểm. Công nghệ nào hỗ trợ trực tiếp hoạt động này?",
      answers: [
        "Lưu trữ trên ổ đĩa cục bộ",
        "Kết nối Bluetooth giữa các máy",
        "Dịch vụ điện toán đám mây",
        "Sao chép tài liệu bằng USB",
      ],
      correct: 2,
    },
    {
      question:
        "Một website yêu cầu nhập mật khẩu tài khoản để nhận phần thưởng. Học sinh nên làm gì?",
      answers: [
        "Nhập mật khẩu rồi thay đổi sau",
        "Kiểm tra nguồn tin và không cung cấp mật khẩu",
        "Dùng mật khẩu tài khoản ít quan trọng",
        "Nhờ bạn bè đăng nhập thử trước",
      ],
      correct: 1,
    },
    {
      question:
        "Camera thông minh nhận diện người và gửi cảnh báo đến điện thoại. Nhận định nào phù hợp nhất?",
      answers: [
        "Hệ thống chỉ thực hiện lưu trữ hình ảnh",
        "Hệ thống chỉ sử dụng kết nối mạng LAN",
        "Hệ thống không cần xử lí dữ liệu hình ảnh",
        "Hệ thống kết hợp xử lí hình ảnh và truyền dữ liệu",
      ],
      correct: 3,
    },
    {
      question:
        "Hai máy tính cùng mạng LAN chia sẻ tệp trực tiếp. Nếu mất Internet nhưng mạng LAN vẫn hoạt động thì điều gì có thể xảy ra?",
      answers: [
        "Hai máy vẫn có thể trao đổi tệp trong LAN",
        "Hai máy bắt buộc phải ngừng trao đổi tệp",
        "Hai máy chỉ trao đổi được qua mạng di động",
        "Hai máy phải kết nối với máy chủ trên Internet",
      ],
      correct: 0,
    },
    {
      question:
        "Một tệp video 1,5 GB cần sao chép vào USB còn trống 1400 MB. Giả sử không nén tệp, kết luận nào đúng?",
      answers: [
        "Đủ chỗ vì 1,5 GB nhỏ hơn 1400 MB",
        "Không đủ vì tệp lớn hơn 136 MB",
        "Không đủ vì tệp lớn hơn 1400 MB",
        "Đủ chỗ vì USB còn hơn 1 GB",
      ],
      correct: 2,
    },
    {
      question:
        "Hệ thống đèn đường tự điều chỉnh độ sáng dựa trên ánh sáng môi trường. Yếu tố nào thể hiện rõ khả năng thông minh?",
      answers: [
        "Đèn sử dụng nguồn điện ổn định",
        "Đèn xử lí dữ liệu cảm biến để điều khiển",
        "Đèn được kết nối bằng dây dẫn điện",
        "Đèn có thể phát sáng trong thời gian dài",
      ],
      correct: 1,
    },
    {
      question:
        "Một học sinh muốn gửi video 2 GB từ điện thoại sang máy tính ở xa. Phương án nào phù hợp nhất khi cả hai có Internet?",
      answers: [
        "Chia sẻ video qua kết nối Bluetooth trực tiếp",
        "Sao chép video vào bộ nhớ trong của điện thoại",
        "Kết nối hai thiết bị bằng cáp USB",
        "Tải video lên dịch vụ đám mây rồi chia sẻ",
      ],
      correct: 3,
    },
    {
      question:
        "Một học sinh dùng chung mật khẩu cho email và mạng xã hội. Nếu một tài khoản bị lộ mật khẩu, nguy cơ nào đáng lo nhất?",
      answers: [
        "Các tài khoản khác có thể bị truy cập trái phép",
        "Các tài khoản khác tự động bị xóa dữ liệu",
        "Thiết bị đang sử dụng sẽ mất kết nối mạng",
        "Dung lượng lưu trữ của thiết bị bị giảm",
      ],
      correct: 0,
    },
    {
      question:
        "Một trường học muốn học sinh truy cập tài liệu từ nhà nhưng chỉ giáo viên được chỉnh sửa. Giải pháp nào phù hợp nhất?",
      answers: [
        "Lưu tài liệu trên một máy tính không kết nối mạng",
        "Chia sẻ tài liệu trực tuyến và phân quyền truy cập",
        "Gửi tài liệu qua Bluetooth cho từng học sinh",
        "Cho mọi người quyền chỉnh sửa tài liệu trực tuyến",
      ],
      correct: 1,
    },
    {
      question:
        "Một học sinh nhận tin nhắn từ tài khoản giống giáo viên, yêu cầu gửi mã xác thực đăng nhập. Cách xử lí nào an toàn nhất?",
      answers: [
        "Gửi mã nếu tài khoản có ảnh đại diện của giáo viên",
        "Gửi mã rồi đổi mật khẩu ngay sau đó",
        "Không gửi mã và xác minh qua kênh liên lạc tin cậy",
        "Chỉ gửi một phần mã để kiểm tra người yêu cầu",
      ],
      correct: 2,
    },
  ],

  bonusQuestions: [],
};
