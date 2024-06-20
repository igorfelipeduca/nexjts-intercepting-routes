import Link from "next/link";
import { users } from "../lib/users";
import OpenLink from "@/components/icons/openLink";

export default function Users() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="group flex w-32 justify-between items-center">
            <Link
              href={`/user/${user.id}`}
              className="font-medium hover:underline"
            >
              {user.name}
            </Link>

            <OpenLink className="size-4 transition-all duration-150 ease-linear hidden group-hover:block" />
          </li>
        ))}
      </ul>
    </div>
  );
}
