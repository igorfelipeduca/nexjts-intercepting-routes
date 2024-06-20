import Link from "next/link"

export default function User({ params }: { params: { id: string } }) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-y-4">
      <Link href={"/users"}>&larr; Go back</Link>

      <div>User {params.id}</div>
    </div>
  );
}
