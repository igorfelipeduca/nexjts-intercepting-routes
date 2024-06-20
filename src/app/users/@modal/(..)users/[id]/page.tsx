import photos, { Photo } from "@/lib/photos";
import Modal from "@/components/modal";
import PhotoCard from "@/components/photoCard";
import { users } from "@/lib/users";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = users.find((u) => u.id === Number(id))!;

  return <Modal className={"dark"}>Intercepted user: {user.name}</Modal>;
}
