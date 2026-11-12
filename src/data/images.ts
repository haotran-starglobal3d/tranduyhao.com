import type { ImageMetadata } from 'astro';

const mods = import.meta.glob<{ default: ImageMetadata }>('../assets/profile/*.{jpg,png}', {
	eager: true,
});

// Lấy ảnh trong src/assets/profile/ theo tên file, báo lỗi ngay lúc build nếu thiếu.
export function img(name: string): ImageMetadata {
	const m = mods[`../assets/profile/${name}`];
	if (!m) throw new Error(`Thiếu ảnh: src/assets/profile/${name}`);
	return m.default;
}
