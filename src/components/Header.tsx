import Image from "next/image";

export default function Header() {
  return (
    <header className=" flex gap-x-8 flex-col md:flex-row">
      <Image
        className="size-[100px] rounded-full"
        src="/zulfa.jpg"
        alt="picture of author"
        width={100}
        height={100}
      />
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
          Zulfa Sabila
          </h1>

        <h2 className="text-lg font-light text-zinc-500 dark:text-zinc-300">
          Teknik Informatika
        </h2>
        <div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">
          <span className="text-zinc-500 dark:text-zinc-300">
            Sekolah Tinggi Teknologi Bontang
          </span>
        </div>
      </div>
    </header>
  );
}
