import { ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-white/30 z-30 backdrop-blur-md text-white">
      <div className="flex flex-col items-center gap-12 bg-black/70 p-24 rounded-lg">
        <ShieldAlert size={96} />
        <p>Burada henüz bir içerik yok</p>
        <Link className="bg-white text-black px-4 py-2 rounded-lg shadow-lg shadow-white hover:shadow-white/30" href="/">Return Home</Link>
      </div>
    </div>
  );
}
