import type { ImageMetadata } from 'astro';

const mods = import.meta.glob<{ default: ImageMetadata }>('../assets/life/*.jpg', { eager: true });

// Lấy ảnh trong src/assets/life/ theo tên file, báo lỗi ngay lúc build nếu thiếu.
export function lifeImg(name: string): ImageMetadata {
	const m = mods[`../assets/life/${name}.jpg`];
	if (!m) throw new Error(`Thiếu ảnh: src/assets/life/${name}.jpg`);
	return m.default;
}

export interface LifePhoto {
	image: string;
	caption: string;
	when: string; // thời điểm đăng trên Facebook cá nhân
	quote?: boolean; // caption là nguyên văn lời anh viết
}

export interface LifeGroup {
	id: string;
	eyebrow: string;
	title: string;
	lead: string;
	photos: LifePhoto[];
}

export const lifeGroups: LifeGroup[] = [
	{
		id: 'chan-dung',
		eyebrow: 'Đời thường',
		title: 'Vài dòng tự ghi',
		lead: 'Những tấm ảnh tự chụp kèm đôi câu viết vội trên trang cá nhân.',
		photos: [
			{ image: 'tu-ay', caption: 'Từ ấy trong tôi bừng nắng hạ, Mặt trời chân lý chói qua tim...', when: '05/2026', quote: true },
			{ image: 'mai-vang', caption: 'Hết Tết rồi, làm việc thôi...', when: '02/2025', quote: true },
			{ image: 'tai-sinh', caption: 'Tái sinh...', when: '03/2025', quote: true },
		],
	},
	{
		id: 'nhung-chuyen-di',
		eyebrow: 'Những chuyến đi',
		title: 'Từ Km 0 Hà Giang đến điểm cuối Cà Mau',
		lead: 'Dọc chiều dài đất nước và nhiều thành phố trên thế giới, đi đến đâu cũng giữ lại một tấm hình.',
		photos: [
			{ image: 'ha-giang-km0', caption: 'Cột mốc Km 0 Hà Giang', when: '07/2025' },
			{ image: 'ca-mau-km2436', caption: 'Điểm cuối đường Hồ Chí Minh tại Cà Mau, Km 2436', when: '01/2021' },
			{ image: 'lang-bac', caption: 'Trước Lăng Chủ tịch Hồ Chí Minh, Hà Nội', when: '04/2022' },
			{ image: 'chua-dau-xuan', caption: 'Vãn cảnh chùa đầu xuân', when: '02/2025' },
			{ image: 'bang-gia', caption: 'Băng phủ trắng cành cây trên vùng núi cao', when: '01/2021' },
			{ image: 'ben-song', caption: 'Bên dòng sông giữa núi rừng', when: '08/2012' },
			{ image: 'notre-dame-2003', caption: 'Trước Nhà thờ Đức Bà Paris, năm 2003', when: 'đăng lại 04/2019' },
			{ image: 'eiffel', caption: 'Dưới chân tháp Eiffel, Paris', when: '09/2019' },
			{ image: 'berlin', caption: 'Tòa thị chính Đỏ, Berlin', when: '09/2019' },
			{ image: 'brussels', caption: 'Quảng trường Lớn, Brussels', when: '09/2019' },
			{ image: 'saturn-v', caption: 'Bên tên lửa Saturn V trong một chuyến đi Mỹ', when: '09/2017' },
			{ image: 'pho-cao-tang', caption: 'Giữa những tòa nhà chọc trời', when: '03/2026' },
		],
	},
	{
		id: 'co-vu',
		eyebrow: 'Hòa cùng đám đông',
		title: 'Cờ đỏ sao vàng trên khán đài',
		lead: 'Ngày hội lớn của đất nước hay một trận bóng của đội tuyển, đều có mặt để cổ vũ.',
		photos: [
			{ image: 'quoc-khanh-2025', caption: 'Dán cờ lên má, hòa vào dòng người ngày Quốc khánh', when: '09/2025' },
			{ image: 'truc-thang-30-4', caption: 'Trực thăng kéo cờ bay qua bầu trời dịp 30/4', when: '04/2025' },
			{ image: 'khan-dai-2026', caption: 'Trên khán đài AFC Women\'s Asian Cup 2026 tại Úc', when: '03/2026' },
			{ image: 'khan-dai-2019', caption: 'Áo cờ đỏ sao vàng trên khán đài', when: '11/2019' },
			{ image: 'phong-thu-voh', caption: 'Ngồi vào phòng thu của Đài VOH', when: '10/2025' },
			{ image: 'san-golf', caption: 'Một buổi ra sân golf', when: '05/2016' },
		],
	},
	{
		id: 'vuon-nha',
		eyebrow: 'Thú vui',
		title: 'Vườn rau, giàn lan',
		lead: 'Tự tay trồng rau thủy canh, chăm lan và hái rau mang vào bếp.',
		photos: [
			{ image: 'xa-lach', caption: 'Rổ xà lách vừa hái', when: '02/2016' },
			{ image: 'lan-tim', caption: 'Chùm lan tím vừa nở', when: '03/2016' },
			{ image: 'dua-leo', caption: 'Dưa leo trên khay trồng rau', when: '03/2016' },
			{ image: 'hoa-chanh-day', caption: 'Hoa chanh dây trên giàn', when: '04/2016' },
			{ image: 'rau-vao-bep', caption: 'Rau tự trồng mang vào bếp', when: '02/2016' },
			{ image: 'trang-trai-thuy-canh', caption: 'Thăm một trang trại rau thủy canh', when: '04/2016' },
		],
	},
];

export const lifeTeaser = ['ha-giang-km0', 'quoc-khanh-2025', 'xa-lach', 'pho-cao-tang'];
