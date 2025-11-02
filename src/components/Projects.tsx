import Image from 'next/image';

export default function Projects() {
	return (
		<section id="projects" className="py-12 space-y-10">
			{/* === Judul Section === */}
			<div className="text-center space-y-2">
				<h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
					Proyek Saya
				</h2>
				<p className="text-sm text-zinc-600 dark:text-zinc-400">
					Beberapa proyek yang telah saya kembangkan selama perkuliahan di STITEK Bontang
				</p>
			</div>

			{/* === Grid Proyek === */}
			<div className="grid md:grid-cols-2 gap-10">
				{/* === PROJEK 1: TOKO PARFUM === */}
				<div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
					{/* Wrapper gambar agar tidak terpotong */}
					<div className="min-h-[250px] flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 p-3">
						<Image
							alt="Toko Parfum"
							src="/Parfum.png"
							className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
							width={800}
							height={500}
						/>
					</div>

					<div className="p-5 space-y-3">
						<h4 className="font-semibold text-zinc-800 dark:text-zinc-100">
							Toko Parfum 💐 – Aplikasi Pemesanan & Manajemen Penjualan
						</h4>

						<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
							Aplikasi berbasis <strong>HTML, PHP Native, JavaScript</strong>, dan{' '}
							<strong>MySQL</strong> untuk mengelola data produk, pesanan, dan transaksi
							parfum secara online. Proyek ini dibuat sebagai tugas UAS{' '}
							<em>Pemrograman Web</em>.
						</p>

						{/* Tech stack */}
						<div className="flex flex-wrap gap-2 pt-2">
							<span className="px-3 py-1 bg-pink-100 dark:bg-zinc-800 text-pink-700 dark:text-pink-400 rounded-full text-xs font-medium">
								PHP Native
							</span>
							<span className="px-3 py-1 bg-violet-100 dark:bg-zinc-800 text-violet-700 dark:text-violet-400 rounded-full text-xs font-medium">
								MySQL
							</span>
							<span className="px-3 py-1 bg-purple-100 dark:bg-zinc-800 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium">
								HTML / CSS / Bootstrap
							</span>
						</div>

						{/* Link */}
						<div className="flex flex-col gap-1 pt-2 text-sm">
							<a
								href="https://youtu.be/NAieXu3PV7k?si=kqAAhH5INh2Y4F9Z"
								target="_blank"
								className="text-blue-500 hover:underline"
							>
								📽️ Video Demo (YouTube)
							</a>
							<a
								href="http://luveparfum.web.id/"
								target="_blank"
								className="text-blue-500 hover:underline"
							>
								🌐 Lihat Website
							</a>
						</div>
					</div>
				</div>

				{/* === PROJEK 2: KOLAM RENANG CERIA === */}
				<div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
					{/* Wrapper gambar agar tidak terpotong */}
					<div className="min-h-[250px] flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 p-3">
						<Image
							alt="Kolam Renang Ceria"
							src="/kolam renang.png"
							className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
							width={800}
							height={500}
						/>
					</div>

					<div className="p-5 space-y-3">
						<h4 className="font-semibold text-zinc-800 dark:text-zinc-100">
							Kolam Renang Ceria 🏊 – Dashboard Manajemen Pengunjung & Tiket
						</h4>

						<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
							Aplikasi dashboard berbasis <strong>PHP & Bootstrap</strong> untuk memantau
							pengunjung, tiket, dan pendapatan secara interaktif. Proyek ini dibuat
							sebagai tugas UAS <em>Interaksi Manusia dan Komputer (IMK)</em>.
						</p>

						{/* Tech stack */}
						<div className="flex flex-wrap gap-2 pt-2">
							<span className="px-3 py-1 bg-pink-100 dark:bg-zinc-800 text-pink-700 dark:text-pink-400 rounded-full text-xs font-medium">
								PHP
							</span>
							<span className="px-3 py-1 bg-violet-100 dark:bg-zinc-800 text-violet-700 dark:text-violet-400 rounded-full text-xs font-medium">
								Bootstrap
							</span>
							<span className="px-3 py-1 bg-purple-100 dark:bg-zinc-800 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium">
								MySQL
							</span>
							<span className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full text-xs font-medium">
								HTML / CSS
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
