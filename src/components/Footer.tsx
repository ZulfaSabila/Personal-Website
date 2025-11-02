export default function Footer() {
	return (
		<footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16 py-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
			<p>
				&copy; {new Date().getFullYear()} <span className="font-medium text-pink-500">Zulfa Sabila</span>. All rights reserved.
			</p>
		</footer>
	);
}
