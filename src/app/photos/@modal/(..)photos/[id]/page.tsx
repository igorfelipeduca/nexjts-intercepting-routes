import photos, { Photo } from "@/lib/photos"
import Modal from "@/components/modal"
import PhotoCard from "@/components/photoCard"


export default function PhotoModal({
  params: { id }
}: {
  params: { id: string }
}) {
  const photo: Photo = photos.find(p => p.id === id)!

  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  )
}
