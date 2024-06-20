import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-y-4">
      <Link href={"/users"} className="font-medium hover:underline">
        Go to users
      </Link>

      <Link href={"/photos"} className="font-medium hover:underline">
        Go to photos
      </Link>
    </div>
  );
}
