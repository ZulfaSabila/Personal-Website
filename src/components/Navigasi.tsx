'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

function applyTheme(mode: ThemeMode) {
	const root = document.documentElement;
	if (mode === 'dark') {
		root.classList.add('dark');
	} else {
		root.classList.remove('dark');
	}
}

export default function Navigasi() {
	const [theme, setTheme] = useState<ThemeMode | null>(null);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const storedTheme = window.localStorage.getItem('theme') as ThemeMode | null;
		if (storedTheme === 'light' || storedTheme === 'dark') {
			applyTheme(storedTheme);
			setTheme(storedTheme);
			return;
		}

		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const initialTheme = prefersDark ? 'dark' : 'light';
		applyTheme(initialTheme);
		setTheme(initialTheme);
	}, []);

	const handleToggleTheme = () => {
		if (!theme) return;
		const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
		applyTheme(nextTheme);
		window.localStorage.setItem('theme', nextTheme);
		setTheme(nextTheme);
	};

	return (
		<>
			{/* Navbar utama */}
			<nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/60 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center px-6 py-3 z-50 shadow-sm transition-all duration-500">
				
				{/* Logo */}
				<div className="font-extrabold text-2xl bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text tracking-tight">
					ZS
				</div>

				{/* Menu Desktop */}
				<div className="hidden md:flex items-center gap-8 text-zinc-600 dark:text-zinc-300 font-medium">
					<a href="#about" className="hover:text-violet-500 hover:underline underline-offset-4 transition">About</a>
					<a href="#projects" className="hover:text-violet-500 hover:underline underline-offset-4 transition">Projects</a>
					<a href="#contact" className="hover:text-violet-500 hover:underline underline-offset-4 transition">Contact</a>
				</div>

				{/* Tombol kanan */}
				<div className="flex items-center gap-4">
					{/* Tombol Tema */}
					<button
						onClick={handleToggleTheme}
						aria-label="Toggle theme"
						className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:scale-110 transition-transform"
					>
						{theme === 'light' ? '🌙' : '☀️'}
					</button>

					{/* Tombol Mobile Menu */}
					<button
						className="md:hidden p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{menuOpen ? (
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M18 6L6 18M6 6l12 12" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M3 12h18M3 6h18M3 18h18" />
							</svg>
						)}
					</button>
				</div>
			</nav>

			{/* Sidebar Mobile Menu */}
			<div
				className={`fixed top-0 right-0 h-full w-2/3 bg-white dark:bg-zinc-900 shadow-lg p-8 flex flex-col items-start gap-6 transform ${
					menuOpen ? 'translate-x-0' : 'translate-x-full'
				} transition-transform duration-300 ease-in-out z-40 md:hidden`}
			>
				<a href="#about" className="text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-pink-500 transition" onClick={() => setMenuOpen(false)}>
					About
				</a>
				<a href="#projects" className="text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-pink-500 transition" onClick={() => setMenuOpen(false)}>
					Projects
				</a>
				<a href="#contact" className="text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-pink-500 transition" onClick={() => setMenuOpen(false)}>
					Contact
				</a>
			</div>
		</>
	);
}
