export default function Contact() {
	return (
		<section id="contact" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-300">
				Contact
			</h3>

			<p className="text-zinc-800 dark:text-zinc-200">
				Jika ingin berdiskusi, berkolaborasi atau sekadar terhubung 
				sebagai sesama mahasiswa Teknik Informatika, jangan ragu untuk menghubungi saya.
			</p>

			<div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">
				<span className="text-zinc-500 dark:text-zinc-300">
					zulfasabila467@gmail.com
				</span>

				<a
					href="https://github.com/ZulfaSabila"
					target="_blank"
					rel="noopener noreferrer"
					className="text-zinc-500 dark:text-zinc-300 flex items-center gap-x-2.5"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="text-zinc-500 dark:text-zinc-300"
					>
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.8 8.207 11.387.6.113.793-.262.793-.582v-2.25c-3.338.726-4.043-1.613-4.043-1.613-.547-1.387-1.332-1.757-1.332-1.757-1.09-.75.082-.731.082-.731 1.203.082 1.84 1.238 1.84 1.238 1.07 1.836 2.808 1.307 3.492.997.107-.789.418-1.307.762-1.606-2.664-.3-5.465-1.332-5.465-5.933 0-1.312.469-2.387 1.238-3.23-.124-.303-.537-1.523.117-3.176 0 0 1.008-.324 3.301 1.23a11.4 11.4 0 0 1 3.004-.406c1.02.004 2.047.137 3.004.406 2.293-1.555 3.297-1.23 3.297-1.23.656 1.653.244 2.873.12 3.176.773.843 1.238 1.918 1.238 3.23 0 4.613-2.805 5.629-5.477 5.922.43.371.82 1.102.82 2.222v3.293c0 .324.191.703.801.582C20.565 21.795 24 17.307 24 12 24 5.37 18.627 0 12 0z" />
					</svg>
					GitHub
				</a>

				<a
					href="https://instagram.com/zulfsbil"
					target="_blank"
					rel="noopener noreferrer"
					className="text-zinc-500 dark:text-zinc-300 flex items-center gap-x-2.5"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="text-zinc-500 dark:text-zinc-300"
					>
						<path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.75-.88a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24z" />
					</svg>
					Instagram
				</a>
			</div>
		</section>
	);
}
