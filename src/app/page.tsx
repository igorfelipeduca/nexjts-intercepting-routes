import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Link href={"/users"} className="font-medium hover:underline">
        Go to users
      </Link>
    </div>
  );
}
