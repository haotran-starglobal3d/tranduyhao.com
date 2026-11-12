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
		date: '05/09/2024',
		title:
			'Smart management system by 3D/360 Digital Map integrating real-time information and the process of creating this system',
		titleVi:
			'Hệ thống quản lý thông minh bằng bản đồ số hóa ba chiều/360 độ (3D/360°) tích hợp đầy đủ thông tin theo thời gian thực và phương pháp tạo ra hệ thống này',
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
	linkedin: 'https://www.linkedin.com/in/tduyhao/',
};

// ---------------------------------------------------------------------------
// Phần bổ sung từ Professional Profile (03/2026) và CV Rev.12 (08/2026).
// Tên file ảnh nằm trong src/assets/profile/, lấy bằng hàm img() ở src/data/images.ts.
// ---------------------------------------------------------------------------

export const headline = {
	name: 'Dr. (Hon.) Trần Duy Hào',
	roles: ['Founder & CEO', 'Deep-Tech Innovator', 'Kỹ sư đa ngành'],
};

// Các con số về cá nhân, dùng ở phần đầu trang chủ.
export const personalStats = [
	{ value: '22+', label: 'năm làm việc quốc tế' },
	{ value: '20+', label: 'quốc gia đã làm việc' },
	{ value: '5', label: 'châu lục' },
	{ value: '2', label: 'bằng sáng chế độc quyền' },
];

export const education = [
	{
		year: '2024',
		degree: 'Tiến sĩ danh dự (PhD Hon.) ngành Khoa học và Công nghệ',
		school: 'International American University (IAU), Hoa Kỳ',
	},
	{
		year: '2008',
		degree: 'Chương trình Kỹ sư Khoan và Dầu khí',
		school: 'Hiệp hội các nhà thầu khoan quốc tế (IADC)',
	},
	{
		year: '2003',
		degree: 'Kỹ sư Kỹ thuật Hàng không',
		school: 'Trường Đại học Bách khoa TP.HCM',
	},
];

export const career = [
	{
		period: '09/2016 - nay',
		field: 'Số hóa 3D',
		company: 'Star Global Expert Solutions JSC (StarGlobal 3D)',
		role: 'Founder & CEO',
		text: 'Sáng chế, phát triển và thương mại hóa nền tảng web-app tương tác thông minh 3D/360 được cấp bằng sáng chế tại Hoa Kỳ, dẫn dắt chuyển đổi số cho các dự án du lịch, di sản, giáo dục, bất động sản và công nghiệp.',
		highlights: ['Bằng sáng chế USPTO và NOIP', 'Xây dựng nền tảng bản đồ số 3D/360', 'Triển khai giải pháp quét laser 3D'],
	},
	{
		period: '05/2014 - 12/2015',
		field: 'Dầu khí',
		company: 'Thang Long JOC / UMW Oil & Gas',
		role: 'Senior Drilling Engineer / Deputy Rig Manager',
		text: 'Thiết kế giếng, lập chương trình khoan, dự toán chi phí giếng (AFE), kiểm soát chi phí hằng ngày và điều phối vận hành giàn khoan.',
		highlights: ['Chuẩn hóa AFE chi tiết', 'Kiểm soát chi phí hơn 1.000 hạng mục', 'Hoàn thành phạm vi công việc của 50+ gói dịch vụ trong 3 tháng'],
	},
	{
		period: '07/2011 - 04/2014',
		field: 'Dầu khí - Hàng hải',
		company: 'Star Ocean Technical Services / Floating Vehicle Services JSC',
		role: 'Business Development Manager / Technical Sales Manager',
		text: 'Khởi sự doanh nghiệp dịch vụ kỹ thuật, phát triển khách hàng cấp quản lý và mở rộng ra thị trường nước ngoài.',
		highlights: ['Giá trị hợp đồng tới 3 triệu USD', 'Phát triển thị trường nước ngoài', 'Giảng dạy nhiều khóa đào tạo nội bộ'],
	},
	{
		period: '07/2005 - 06/2011',
		field: 'Dầu khí',
		company: 'Transocean Inc. / PV Drilling',
		role: 'Drilling Operations Engineer / Senior Project Engineer',
		text: 'Giám sát thiết kế kỹ thuật và quản lý dự án đóng mới giàn khoan, nghiệm thu thiết bị khoan tại nhà máy (FAT), khởi động vận hành giàn.',
		highlights: ['Không sự cố, tai nạn', 'Bàn giao giàn đúng tiến độ và ngân sách', 'Khởi động vận hành giàn tại châu Phi và Đông Nam Á', 'Mức hài lòng của khách hàng trên 98%'],
	},
	{
		period: '03/2003 - 06/2005',
		field: 'Hàng không',
		company: 'Vietnam Airlines Engineering Company',
		role: 'Aircraft Engineer',
		text: 'Bảo dưỡng ngoại trường và nội trường, xử lý hỏng hóc đội bay Boeing 777. Học khóa type-rating Boeing 777 tại Lufthansa Technical Training Center (Frankfurt, Đức) và nhận học bổng thực tập tại SNECMA Group (Pháp) về động cơ CFM-56.',
		highlights: ['Không sự cố bay', 'Tối ưu kế hoạch bảo dưỡng', 'Viết phần mềm cho soi kiểm tra động cơ (borescope)'],
	},
];

export const expertise = [
	{
		field: 'Số hóa 3D/360 và VR/AR',
		items: [
			'Hệ thống bản đồ tích hợp quản lý thông minh 3D/360 thời gian thực (sáng chế USPTO)',
			'Nền tảng web-app tương tác thông minh 3D/360 (sáng chế NOIP)',
			'Bản quyền phần mềm Smart Tourism, Museum, Heritage, Factory, Zone, Real Estate, City 3D/360',
			'Quét laser 3D - FARO Technologies',
		],
	},
	{
		field: 'Dầu khí',
		items: [
			'IWCF Well Control và IADC Well Control (cấp Supervisor, Surface & Subsea)',
			'Advanced Casing Design, Advanced Drilling Fluids, Well Construction, Drilling Practices',
			'Major Emergency Management (trên bờ và ngoài khơi)',
			'BOP Equipment (Surface & Subsea stack), ổn định giàn Jack-up, Semi-sub, Drillship',
			'Certified Training Professional, đào tạo thực địa đủ các vị trí trên giàn',
		],
	},
	{
		field: 'Hàng không',
		items: [
			'Boeing 777-200/300 type-rating theo EASA Part 66 B1',
			'Động cơ CFM-56 5A/5B/5C/7B: bảo dưỡng và soi kiểm tra borescope',
			'Động cơ trực thăng Ariel-2B: bảo dưỡng cấp 1',
			'Hệ thống giải trí trên chuyến bay Boeing 777, phục vụ mặt đất Boeing 777/767',
		],
	},
];

export const copyrights = [
	{ year: '2024', items: ['Smart Asset Management 3D/360', 'Smart Heritage 3D/360 V2', 'Smart Museum 3D/360 V2', 'Smart Tourism 3D/360 V2'] },
	{ year: '2019', items: ['Smart Tourism 3D/360', 'Smart Museum 3D/360', 'Smart Heritage 3D/360', 'Smart Factory 3D/360', 'Smart Zone 3D/360', 'Smart Facility 3D/360', 'Smart Farm 3D/360'] },
];

// Giải thưởng theo Professional Profile, mới nhất xếp trước.
export const honors = [
	{ year: '2025', name: 'Top Industrie 4.0 Awards', body: 'Liên hiệp các Hội Khoa học và Kỹ thuật Việt Nam (VUSTA)', note: 'Ba hạng mục: tổ chức, doanh nghiệp khoa học công nghệ và đổi mới sáng tạo; doanh nghiệp có sản phẩm số thông minh, giải pháp công nghệ 4.0; doanh nhân tiên phong đổi mới sáng tạo và chuyển đổi số.', image: 'giai-industrie-40-a.jpg' },
	{ year: '2025', name: 'Giải thưởng Sao Khuê 2025', body: 'Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam (VINASA)', note: 'Lĩnh vực A-IoT, cho Hệ sinh thái Bản đồ Số hóa Tương tác Thông minh 3D/360.', image: 'giai-sao-khue-2025.jpg' },
	{ year: '2024', name: 'Ngôi sao sáng chế IP Star 2024', body: 'Hội Sáng chế Việt Nam (VIA)', note: 'Top 5 sản phẩm công nghệ tiêu biểu từ sáng chế 2024.', image: 'giai-ip-stars-2024.jpg' },
	{ year: '2024', name: 'Vietnam Smart City Awards 2024', body: 'Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam (VINASA)', note: 'Nền tảng Thành phố Tương tác Thông minh 3D/360.', image: 'giai-smart-city-2024.jpg' },
	{ year: '2024', name: 'Top 10 Nhãn hiệu nổi tiếng về số hóa 3D', body: 'Hội Sở hữu trí tuệ Việt Nam (VIPA)', note: '', image: 'giai-well-known-brand-2024.jpg' },
	{ year: '2024', name: 'Top 50 Doanh nghiệp sáng tạo tiêu biểu', body: 'Hiệp hội Doanh nghiệp Khoa học và Công nghệ Việt Nam (VST)', note: '', image: 'giai-top-50-2024.jpg' },
	{ year: '2023', name: 'Giải thưởng Chuyển đổi số Việt Nam', body: 'Hội Truyền thông số Việt Nam (VDCA)', note: '', image: 'giai-chuyen-doi-so-2023.jpg' },
	{ year: '2023', name: 'Giải thưởng Sáng kiến Giáo dục thông minh', body: 'Liên hiệp các Hội Khoa học và Kỹ thuật Việt Nam (VUSTA)', note: '', image: 'giai-smart-education-2023.jpg' },
	{ year: '2023', name: 'Giải nhì Giải thưởng Sáng tạo TP.HCM', body: 'Ủy ban nhân dân TP.HCM', note: '', image: 'giai-sang-tao-tphcm-2023.jpg' },
	{ year: '2023', name: 'Tuổi Trẻ Start-Up Award', body: 'Báo Tuổi Trẻ', note: '', image: 'giai-tuoi-tre-startup-2023.jpg' },
	{ year: '2022', name: 'Top 100 Doanh nghiệp sáng tạo tiêu biểu', body: 'Hiệp hội Doanh nghiệp Khoa học và Công nghệ Việt Nam (VST)', note: '', image: 'giai-top-100-2022.jpg' },
	{ year: '2021', name: 'Giải đặc biệt I-Star', body: 'Ủy ban nhân dân TP.HCM', note: 'Giải thưởng Đổi mới sáng tạo và Khởi nghiệp TP.HCM.', image: 'giai-i-star-2021.jpg' },
	{ year: '2018', name: 'Giải Dự án triển vọng HIST', body: 'Sở Khoa học và Công nghệ TP.HCM', note: 'Cuộc thi Khởi nghiệp đổi mới sáng tạo du lịch TP.HCM, cho Nền tảng du lịch tương tác thông minh 3D/360.', image: 'giai-hist-2018.jpg' },
];

// 12 dự án tiêu biểu, có thể mở xem trực tiếp.
export const showcase = [
	{ tag: 'Du lịch', title: 'Bản đồ du lịch tương tác thông minh 3D/360 TP.HCM', text: 'Kết nối TP.HCM với các điểm đến tại 34 tỉnh, thành.', image: 'du-an-ban-do-du-lich-tphcm.jpg', url: 'https://map3d.visithcmc.vn' },
	{ tag: 'Bảo tàng', title: 'Bảo tàng Phụ nữ Nam Bộ', text: 'Bảo tàng số 3D tiên phong tại TP.HCM.', image: 'du-an-bao-tang-phu-nu-nam-bo.jpg', url: 'https://sanpham.starglobal3d.com/smart-museum-3d/bao-tang-phu-nu-nam-bo' },
	{ tag: 'Di sản', title: 'Di tích quốc gia đặc biệt Dinh Độc Lập', text: 'Tham quan số kết hợp hệ thống quản lý tài sản thông minh 3D/360.', image: 'du-an-dinh-doc-lap.jpg', url: 'https://sanpham.starglobal3d.vn/smart-heritage-3d/dinh-doc-lap/' },
	{ tag: 'Di sản', title: 'Làng Văn hóa - Du lịch các dân tộc Việt Nam', text: 'Di sản tương tác thông minh cho không gian văn hóa các dân tộc.', image: 'du-an-lang-van-hoa.jpg', url: 'https://sanpham.starglobal3d.vn/smart-heritage-3d/LVH' },
	{ tag: 'Di sản', title: 'Khu di tích Kim Liên', text: 'Số hóa khu di tích tại quê hương Chủ tịch Hồ Chí Minh.', image: 'du-an-kim-lien.jpg', url: 'https://sanpham.starglobal3d.com/smart-heritage-3d/kdt-kim-lien' },
	{ tag: 'Di sản', title: 'Mộc bản triều Nguyễn', text: 'Di sản tư liệu đầu tiên của Việt Nam được UNESCO công nhận.', image: 'du-an-moc-ban.jpg', url: 'https://sanpham.starglobal3d.vn/smart-heritage-3d/moc-ban/' },
	{ tag: 'Nhà máy', title: 'Nhà máy Ajinomoto Việt Nam', text: 'Nhà máy tương tác thông minh, tham quan nhà máy trực tuyến.', image: 'du-an-ajinomoto.jpg', url: 'https://thamquannhamay.ajinomoto.com.vn' },
	{ tag: 'Khu công nghiệp', title: 'Khu công nghiệp Sonadezi', text: 'Khu công nghiệp tương tác thông minh 3D/360.', image: 'du-an-sonadezi.jpg', url: 'https://sanpham.starglobal3d.com/smart-zone-3d/sonadezi/' },
	{ tag: 'Trường học', title: 'Đại học Quốc gia Hà Nội', text: 'Trường học tương tác thông minh cho khuôn viên đại học.', image: 'du-an-dhqg-ha-noi.jpg', url: 'https://sanpham.starglobal3d.com/smartschool3d/dhqg-ha-noi/' },
	{ tag: 'Tòa nhà', title: 'Saigon Skydeck - Bitexco', text: 'Tòa nhà tương tác thông minh cho đài quan sát Saigon Skydeck.', image: 'du-an-bitexco.jpg', url: 'https://sanpham.starglobal3d.com/smart-tourism-3d/bitexco/' },
	{ tag: 'Bất động sản', title: 'Khang Điền - Verosa Park', text: 'Bất động sản tương tác thông minh 3D/360.', image: 'du-an-verosa-park.jpg', url: 'https://sanpham.starglobal3d.com/smart-real-estate-3d/verosa-park/' },
	{ tag: 'Showroom', title: 'Showroom Đồng Tâm', text: 'Showroom tương tác thông minh cho Đồng Tâm Group.', image: 'du-an-dong-tam.jpg', url: 'https://sanpham.starglobal3d.vn/smart-showroom-3d/dong-tam/' },
];

export const memberships = [
	{ name: 'AVSE Global', full: 'Tổ chức Khoa học và Chuyên gia Việt Nam toàn cầu, Paris', year: '2024' },
	{ name: 'VIA', full: 'Hội Sáng chế Việt Nam, dành cho nhà sáng chế đã được cấp bằng', year: '2023' },
	{ name: 'VIPA', full: 'Hội Sở hữu trí tuệ Việt Nam', year: '2024' },
	{ name: 'VST', full: 'Hiệp hội Doanh nghiệp Khoa học và Công nghệ Việt Nam', year: '2022' },
	{ name: 'VINASA', full: 'Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam', year: '2024' },
	{ name: 'HCA', full: 'Hội Tin học TP.HCM', year: '2023' },
	{ name: 'HAUA', full: 'Hội Tự động hóa TP.HCM, Ủy viên Ban chấp hành', year: '2021' },
	{ name: 'SPE', full: 'Hiệp hội Kỹ sư Dầu khí quốc tế', year: '2015' },
	{ name: 'BNI', full: 'Chủ tịch BNI Miracle Chapter', year: '2020' },
];

export const regions = [
	{ name: 'Châu Á', countries: ['Singapore', 'Thái Lan', 'Đài Loan', 'Indonesia', 'Malaysia', 'Hàn Quốc', 'Ấn Độ', 'Brunei', 'Nhật Bản'] },
	{ name: 'Châu Âu', countries: ['Pháp', 'Đức', 'Nga', 'Bỉ', 'Hà Lan', 'Tây Ban Nha', 'Luxembourg'] },
	{ name: 'Châu Phi', countries: ['Gabon', 'Bờ Biển Ngà'] },
	{ name: 'Châu Mỹ', countries: ['Hoa Kỳ', 'Canada'] },
	{ name: 'Châu Đại Dương', countries: ['Úc'] },
];

export const languages = [
	{ name: 'Tiếng Việt', level: 'Bản ngữ', pct: 100 },
	{ name: 'Tiếng Anh', level: 'Thành thạo', pct: 92 },
	{ name: 'Tiếng Pháp', level: 'Nâng cao', pct: 75 },
	{ name: 'Tiếng Đức', level: 'Cơ bản', pct: 30 },
];

// Đơn vị, tổ chức đã tham gia đào tạo và giảng dạy.
export const training = [
	'PQPOC', 'Myanmar', 'Qatar', 'PTSC M&C', 'L&T (Ấn Độ)', 'Technip FMC', 'AlphaECC', 'COMILOG (Gabon)',
	'Đại học Dầu khí Việt Nam (PVU)', 'UBND TP.HCM (Scan-to-BIM)', 'BSI', 'Hyundai & Hyosung (LPG cavern)',
	'Thang Long JOC', 'Cuu Long JOC', 'PVD Training', 'PVD-BJ', 'PV Drilling', 'Transocean / Vantage / UMW',
];

export const pressLinks = [
	{ outlet: 'VnExpress', title: 'Bản đồ 3D của người Việt được Mỹ cấp bằng sáng chế', url: 'https://vnexpress.net/ban-do-3d-cua-nguoi-viet-duoc-my-cap-bang-sang-che-4328508.html' },
	{ outlet: 'Tuổi Trẻ', title: 'Bằng sáng chế Mỹ cho bản đồ số 3D/360', url: 'https://tuoitre.vn/bang-sang-che-my-cho-ban-do-so-3d-360-2023031821401303.htm' },
	{ outlet: 'Tuổi Trẻ', title: 'Bảo tàng thông minh tại TP.HCM hứa hẹn thu hút du khách', url: 'https://congnghe.tuoitre.vn/bao-tang-thong-minh-tai-tp-hcm-hua-hen-thu-hut-du-khach-2020100716274052.htm' },
	{ outlet: 'CafeBiz', title: 'Hành trình cấp bằng sáng chế tại Mỹ của founder người Việt', url: 'https://cafebiz.vn/hanh-trinh-cap-bang-sang-che-tai-my-cua-founder-nguoi-viet-20210720113922258.chn' },
	{ outlet: 'VnEconomy', title: 'Từ ý tưởng đến doanh nghiệp tiên phong trong lĩnh vực số hóa 3D', url: 'https://vneconomy.vn/tu-y-tuong-den-doanh-nghiep-tien-phong-trong-linh-vuc-so-hoa-3d.htm' },
	{ outlet: 'VietnamNet', title: 'Việt Nam có startup số hóa 3D hay không kém Street View của Google', url: 'https://vietnamnet.vn/viet-nam-co-startup-so-hoa-3d-hay-khong-kem-street-view-cua-google-757545.html' },
	{ outlet: 'VietnamNet (English)', title: 'StarGlobal 3D: digital solution as good as Google\'s Street View', url: 'https://vietnamnet.vn/en/starglobal-3d-digital-solution-as-good-as-googles-street-view-758185.html' },
	{ outlet: 'Dân Trí', title: 'StarGlobal 3D mang đến trải nghiệm chân thực bằng công nghệ số hóa 3D', url: 'https://dantri.com.vn/suc-manh-so/starglobal-3d-mang-den-trai-nghiem-chan-thuc-bang-cong-nghe-so-hoa-3d-20210716104315506.htm' },
	{ outlet: 'Thanh Niên', title: 'Nhà thờ Tân Định, nhà thờ Đức Bà được scan 3D sống động', url: 'https://thanhnien.vn/nha-tho-tan-dinh-nha-tho-duc-ba-duoc-scan-3d-song-dong-post1233095.html' },
	{ outlet: 'Dân Việt', title: 'Founder Trần Duy Hào: phải đạt và giữ vững danh hiệu ngôi sao tin cậy', url: 'https://danviet.vn/founder-tran-duy-hao-phai-dat-va-giu-vung-danh-hieu-ngoi-sao-tin-cay-5020211671602172.htm' },
	{ outlet: 'CafeF', title: 'Startup số hóa nền tảng 3D định giá công ty 100 tỷ tại Shark Tank', url: 'https://cafef.vn/startup-so-hoa-nen-tang-3d-dinh-gia-cong-ty-100-ty-shark-hung-hao-phong-nang-gia-mua-du-cho-rang-giai-phap-nay-giong-google-street-view-20210720105738407.chn' },
	{ outlet: 'VTV', title: 'Shark Tank Việt Nam: startup số hóa 3D định giá 100 tỷ đồng', url: 'https://vtv.vn/truyen-hinh/shark-tank-viet-nam-bi-shark-cho-rang-giong-google-street-view-startup-van-dinh-gia-100-ty-dong-20210719103031213.htm' },
	{ outlet: 'ICTnews', title: 'Thời đại ảo 3D chuẩn bị bùng nổ, startup Việt có bằng sáng chế', url: 'https://ictnews.vietnamnet.vn/khoi-nghiep/thoi-dai-ao-3d-chuan-bi-bung-no-startup-viet-co-bang-sang-290607.html' },
	{ outlet: 'Vietnambiz', title: 'Startup đem giải pháp số hóa 3D lên Shark Tank, chốt deal với Shark Hưng', url: 'https://vietnambiz.vn/startup-dem-giai-phap-so-hoa-3d-len-shark-tank-tu-tin-toi-uu-hon-google-street-view-chot-deal-thanh-cong-voi-shark-hung-20210718235656447.htm' },
	{ outlet: 'The Leader', title: 'Shark Hưng chiêu mộ startup cung cấp giải pháp số hóa 3D', url: 'https://theleader.vn/shark-hung-chieu-mo-startup-cung-cap-giai-phap-so-hoa-3d-1626842527041.htm' },
	{ outlet: 'Diễn đàn Doanh nghiệp', title: 'Startup StarGlobal 3D nhận đầu tư của Shark Hưng', url: 'https://diendandoanhnghiep.vn/startup-starglobal-3d-nhan-dau-tu-cua-shark-hung-201925.html' },
	{ outlet: 'Vietnam Business Insider', title: 'Shark Tank Việt Nam tập 12: mảng 3D sẽ bùng nổ trong tương lai', url: 'https://vietnambusinessinsider.vn/shark-tank-vietnam-tap-12-du-tin-rang-mang-3d-se-bung-no-trong-tuong-lai-song-shark-hung-van-tra-re-gap-3-lan-so-voi-de-nghi-cua-starglobal-3d-a23293.html' },
	{ outlet: '24h', title: 'Shark Hưng dùng 10 tỷ để mua tương lai khi có mạng 5G và internet vệ tinh', url: 'https://www.24h.com.vn/cong-nghe-thong-tin/shark-tank-shark-hung-dung-10-ty-de-mua-tuong-lai-khi-co-mang-5g-va-internet-ve-tinh-c55a1271785.html' },
	{ outlet: 'Cafeland', title: 'Shark Tank: Shark Hưng dùng 10 tỷ để mua tương lai', url: 'https://cafeland.vn/doanh-nhan/khoi-nghiep/shark-tank-shark-hung-dung-10-ty-de-mua-tuong-lai-khi-co-mang-5g-va-internet-ve-tinh-27923.html' },
	{ outlet: 'Đổi mới sáng tạo TP.HCM', title: 'Hồ sơ giải thưởng I-Star 2021: Star Global 3D', url: 'https://doimoisangtao.vn/giai-thuong-dmst/2021/5/13/ma-so-n1019-star-global-3d' },
	{ outlet: 'Kỷ lục Việt Nam', title: 'VietMaster đề xuất kỷ lục: phần mềm bản đồ du lịch tương tác thông minh 3D/360 TP.HCM đầu tiên tại Việt Nam', url: 'http://kyluc.vn/tin-tuc/de-xuat-ky-luc/vietmaster-de-xuat-ky-luc-p-506-phan-mem-ban-do-du-lich-tuong-tac-thong-minh-3d-360-tphcm-dau-tien-tai-viet-nam' },
	{ outlet: 'Báo Đồng Nai', title: 'Ông Trần Duy Hào: tham quan nhà máy, bảo tàng trên không gian thực tế ảo 3D', url: 'http://www.baodongnai.com.vn/dong-nai-cuoi-tuan/202108/ong-tran-duy-hao-giam-doc-dieu-hanh-cong-ty-cp-giai-phap-chuyen-gia-star-global-tham-quan-nha-may-bao-tang-tren-khong-gian-thuc-te-ao-3d-3075895/index.htm' },
	{ outlet: 'VOH', title: 'Radio: ứng dụng công nghệ cấp nước thông minh', url: 'https://voh.com.vn/radio-episode-ung-dung-cong-nghe-cap-nuoc-thong-minh-NjM4MzEwODIwOTk2.html' },
];

export const tv = [
	{ show: 'Shark Tank Việt Nam', detail: 'Mùa 4, tập 12', url: 'https://youtu.be/9jEz80uRb1s', yt: '9jEz80uRb1s' },
	{ show: 'Dấu ấn Techfest & WHISE 2023', detail: 'Trình bày trước Thủ tướng và lãnh đạo Chính phủ', url: 'https://youtu.be/kHz6uq2ki3w', yt: 'kHz6uq2ki3w' },
	{ show: 'Thời sự 19h VTV1', detail: 'Bản tin ngày 20/6/2020', url: 'https://vtv.vn/video/thoi-su-19h-vtv1-20-6-2020-444533.htm', yt: '' },
	{ show: 'Công nghệ 360', detail: 'Số 17/2021, VTV', url: 'https://vtv.vn/video/cong-nghe-360-so-17-2021-521987.htm', yt: '' },
	{ show: 'Cà phê Khởi nghiệp', detail: 'Startup Nation', url: 'https://www.youtube.com/watch?v=lCEAvSt6zo4', yt: 'lCEAvSt6zo4' },
	{ show: 'Chuyển động số', detail: 'Phóng sự truyền hình', url: 'https://youtu.be/JpPoUeaxm44', yt: 'JpPoUeaxm44' },
	{ show: 'Bí mật thành công', detail: 'Phóng sự truyền hình', url: 'https://youtu.be/qBGJR2DVI3c', yt: 'qBGJR2DVI3c' },
	{ show: 'Việt Nam hội nhập', detail: 'Phóng sự truyền hình', url: 'https://www.youtube.com/watch?v=A4Zss5Jyp0Q', yt: 'A4Zss5Jyp0Q' },
	{ show: 'Chuyển đổi số', detail: 'Phóng sự truyền hình', url: 'https://www.youtube.com/watch?v=60U7S3L6MXg', yt: '60U7S3L6MXg' },
	{ show: 'Giải thưởng Sáng tạo TP.HCM 2023', detail: 'Phóng sự về giải thưởng', url: 'https://www.youtube.com/watch?v=gscp7_S3YQE', yt: 'gscp7_S3YQE' },
	{ show: 'ANTV', detail: 'Ứng dụng bản đồ du lịch tương tác thông minh 3D/360 TP.HCM', url: 'https://antv.gov.vn/kinh-te-5/ung-dung-ban-do-du-lich-tuong-tac-thong-minh-3d-360-tphcm-08DE7C52D.html', yt: '' },
];

export const outlets = ['VnExpress', 'Tuổi Trẻ', 'VTV', 'VietnamNet', 'Dân Trí', 'Thanh Niên', 'VnEconomy', 'CafeF', 'CafeBiz', 'ICTnews', 'Dân Việt', 'The Leader', 'ANTV', 'VOH', 'Shark Tank Việt Nam'];
