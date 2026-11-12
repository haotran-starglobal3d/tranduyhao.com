// Dữ liệu hồ sơ dùng chung cho trang chủ, trang Công nghệ và trang Giới thiệu.
// Mọi số liệu đều lấy từ nguồn công khai, ghi ở mảng `press` và `sources` bên dưới.
// Khi có số mới, chỉ cần sửa ở file này.

export const patents = [
	{
		office: 'USPTO',
		country: 'Hoa Kỳ',
		officeFull: 'Cơ quan Sáng chế và Thương hiệu Hoa Kỳ',
		number: 'US 10,922,881 B2',
		date: '16/02/2021',
		title:
			'Three dimensional/360 degree (3D/360°) real-time full information smart management integrated mapping system (SMIMS) and process of generating the same',
		titleVi:
			'Hệ thống quản lý tương tác thông minh tích hợp thông tin thời gian thực bằng bản đồ số hóa 3D/360',
		url: 'https://patents.google.com/patent/US10922881B2/en',
	},
	{
		office: 'NOIP',
		country: 'Việt Nam',
		officeFull: 'Cục Sở hữu trí tuệ Việt Nam',
		number: 'Bằng độc quyền sáng chế số 41304',
		date: '2024',
		title: '',
		titleVi: '',
		url: 'https://starglobal3d.com/about-us',
	},
];

// Số liệu do StarGlobal 3D công bố, tính đến năm 2026.
export const stats = [
	{ value: '350+', label: 'dự án đã hoàn thành' },
	{ value: '5+', label: 'quốc gia có dự án triển khai' },
	{ value: '10+', label: 'năm kinh nghiệm trên thị trường' },
	{ value: '50K+', label: 'không gian số 360 tương tác' },
	{ value: '5K+', label: 'mô hình số 3D tương tác' },
	{ value: '1 triệu+', label: 'lượt truy cập từ 150 quốc gia' },
];

export const pillars = [
	{
		title: 'Ảnh 360 kết hợp đám mây điểm',
		text: 'Kết hợp hình ảnh 360 panorama với đám mây điểm (point cloud) có tọa độ x, y, z, cho phép đo chính xác kích thước của bất kỳ vật thể nào trong không gian đã số hóa.',
	},
	{
		title: 'Tích hợp thông tin đa phương tiện',
		text: 'Văn bản, hình ảnh, âm thanh, video, bản vẽ và mô hình 3D được gắn trực tiếp vào không gian số, truy xuất bằng cách chạm vào vật thể trên màn hình.',
	},
	{
		title: 'Dữ liệu thời gian thực từ IoT',
		text: 'Đấu nối cảm biến IoT như chiếu sáng, thông số môi trường, trạng thái thiết bị, hệ thống điện và camera, hiển thị theo thời gian thực ngay trong môi trường 3D.',
	},
	{
		title: 'Trợ lý AI thuyết minh và tương tác',
		text: 'AI thuyết minh không gian và vật thể bằng nhiều ngôn ngữ từ dữ liệu nguồn, đóng vai hướng dẫn viên ảo dẫn khách tham quan và trả lời thắc mắc.',
	},
	{
		title: 'Chạy trên web và điện thoại',
		text: 'Thay vì cần máy cấu hình cao để xử lý hàng Terabyte dữ liệu quét 3D, người dùng truy cập bản sao số bằng trình duyệt trên máy tính hoặc điện thoại thông minh.',
	},
	{
		title: 'Phân cấp, phân quyền vận hành',
		text: 'Thiết lập phân cấp phân quyền để lưu trữ, quảng bá, giám sát, điều khiển và quản lý vận hành từ xa như đang làm việc trong điều kiện thực.',
	},
];

export const industries = [
	{ title: 'Du lịch - Bảo tàng - Di sản', text: 'Tham quan từ xa, chạm vào từng hiện vật, nghe thuyết minh đa ngôn ngữ.' },
	{ title: 'Nhà máy - Khu công nghiệp - Hạ tầng', text: 'Tour nhà máy trực tuyến, quản lý tài sản và giám sát thiết bị.' },
	{ title: 'Thành phố - Bất động sản - Trường học', text: 'Bản đồ số 3D/360 cho đô thị, dự án và khuôn viên.' },
	{ title: 'Dầu khí - Hàng hải - Năng lượng', text: 'Số hóa giàn khoan và công trình phức tạp phục vụ kiểm định, bảo trì.' },
	{ title: 'Showroom - Triển lãm - Văn phòng', text: 'Không gian trưng bày tồn tại lâu dài trên môi trường số.' },
	{ title: 'Nông nghiệp - Tài nguyên - Môi trường', text: 'Khảo sát địa hình 3D và lập bản đồ bằng UAV.' },
];

export const projects = [
	'Bản đồ số du lịch tương tác thông minh 3D/360 kết nối TP.HCM với các điểm đến tại 34 tỉnh, thành',
	'Bảo tàng tương tác thông minh 3D/360 cho Bảo tàng Phụ nữ Nam Bộ (2020)',
	'Nhà máy tương tác thông minh cho tập đoàn Ajinomoto',
	'Dự án số hóa đầu tiên cho Khu công nghiệp Long Hậu (2017)',
	'Số hóa 3D giàn khoan dầu khí ngoài khơi và nhà máy tại Nhật Bản, Úc',
];

export const timeline = [
	{
		year: 'Tuổi thơ',
		title: 'Nghệ An - Đồng Nai',
		text: 'Sinh ra ở Nghệ An, theo gia đình vào Đồng Nai sinh sống. Tuổi thơ gắn với những buổi chiều chăn bò, mót lúa.',
	},
	{
		year: 'Đại học',
		title: 'Đại học Bách khoa TP.HCM',
		text: 'Đỗ cùng lúc ba trường Bách khoa, Kinh tế và Luật, chọn ngành cơ khí rồi chuyển sang kỹ thuật hàng không. Nhận học bổng thực tập tại một hãng hàng không vũ trụ của Pháp theo chương trình hợp tác Việt - Pháp.',
	},
	{
		year: 'Trước 2016',
		title: 'Kỹ sư hàng không và dầu khí',
		text: 'Làm kỹ sư bảo dưỡng máy bay khoảng hai năm, sau đó làm kỹ sư dầu khí, đi qua hơn 20 quốc gia của 4 châu lục.',
	},
	{
		year: '2016',
		title: 'Thành lập Star Global',
		text: 'Sau khủng hoảng ngành dầu khí 2015-2016, thành lập Star Global ngày 29/9/2016. Ban đầu công ty tư vấn giải pháp kỹ thuật dầu khí - hàng hải, rồi chuyển hướng sang công nghệ số hóa 3D.',
	},
	{
		year: '2017',
		title: 'Dự án số hóa đầu tiên',
		text: 'Tháng 10/2017 nhận dự án số hóa đầu tiên từ Khu công nghiệp Long Hậu.',
	},
	{
		year: '2019',
		title: 'Doanh nghiệp Khoa học và Công nghệ',
		text: 'Được cấp chứng nhận bản quyền hệ thống phần mềm tương tác thông minh 3D/360 và chứng nhận Doanh nghiệp Khoa học và Công nghệ số 80 của Sở Khoa học và Công nghệ TP.HCM.',
	},
	{
		year: '2021',
		title: 'Bằng sáng chế độc quyền tại Hoa Kỳ',
		text: 'Ngày 16/02/2021, USPTO cấp bằng sáng chế US 10,922,881 B2. Cùng năm, nhận cam kết đầu tư từ Shark Phạm Thanh Hưng tại Shark Tank Việt Nam mùa 4 và giải đặc biệt I-Star của TP.HCM.',
	},
	{
		year: '2024',
		title: 'Bằng độc quyền sáng chế tại Việt Nam',
		text: 'Cục Sở hữu trí tuệ Việt Nam cấp Bằng độc quyền sáng chế số 41304. Cùng năm, nhận bằng Tiến sĩ danh dự của International American University.',
	},
	{
		year: '2025',
		title: 'Ghi nhận cấp quốc gia',
		text: 'Giải thưởng Sao Khuê 2025, TOP Công nghiệp 4.0 Việt Nam 2025, Top 50 doanh nghiệp sáng tạo tiêu biểu Việt Nam lần thứ 8.',
	},
];

export const awards = [
	{ year: '2025', items: ['Giải thưởng Sao Khuê 2025', 'TOP Công nghiệp 4.0 Việt Nam 2025, gồm hạng mục lãnh đạo tiên phong đổi mới sáng tạo và chuyển đổi số', 'Top 50 doanh nghiệp sáng tạo tiêu biểu Việt Nam lần thứ 8', 'Cúp Đồng Giải pháp số Made in Vietnam 2025'] },
	{ year: '2024', items: ['Bằng độc quyền sáng chế số 41304 của Cục Sở hữu trí tuệ Việt Nam', 'Tiến sĩ danh dự, International American University', 'Chứng nhận ISO 9001:2015 và ISO 27001:2013', 'Bằng vinh danh IPSTAR 2024 - Ngôi sao sáng tạo'] },
	{ year: '2023', items: ['Giải thưởng Chuyển đổi số Việt Nam 2023', 'Khởi nghiệp sáng tạo TP.HCM 2023'] },
	{ year: '2021', items: ['Bằng sáng chế Hoa Kỳ US 10,922,881 B2 do USPTO cấp', 'Giải đặc biệt I-Star, Giải thưởng Đổi mới sáng tạo và Khởi nghiệp TP.HCM', 'Cam kết đầu tư tại Shark Tank Việt Nam mùa 4'] },
	{ year: '2019', items: ['Chứng nhận Doanh nghiệp Khoa học và Công nghệ số 80', 'Chứng nhận bản quyền hệ thống phần mềm tương tác thông minh 3D/360'] },
];

export const press = [
	{
		outlet: 'VnExpress',
		date: '23/07/2021',
		title: 'Bản đồ 3D của người Việt được Mỹ cấp bằng sáng chế',
		quote:
			'Mỗi dự án được số hóa 3D sẽ được lưu trữ trên không gian số và tồn tại mãi mãi, không bị tàn phai hoặc xuống cấp theo thời gian. Đó là di sản số cho nhiều thế hệ mai sau.',
		url: 'https://vnexpress.net/ban-do-3d-cua-nguoi-viet-duoc-my-cap-bang-sang-che-4328508.html',
	},
	{
		outlet: 'Tuổi Trẻ',
		date: '19/03/2023',
		title: 'Bằng sáng chế Mỹ cho bản đồ số 3D/360',
		quote:
			'Với bản đồ số 3D/360, mọi ngóc ngách ở bất cứ đâu cũng có thể rõ đến từng tiểu tiết chỉ với chiếc điện thoại.',
		url: 'https://tuoitre.vn/bang-sang-che-my-cho-ban-do-so-3d-360-2023031821401303.htm',
	},
];

export const links = {
	company: 'https://starglobal3d.com',
	companyAbout: 'https://starglobal3d.com/about-us',
	facebook: 'https://www.facebook.com/tduyhao',
};
