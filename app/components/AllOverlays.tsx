"use client"

import { useGeneralStore } from "../stores/general";
import AuthOverlay from "./AuthOverlay";
import ClientOnly from "./ClientOnly";
import EditProfileOverlay from "./profile/EditProfileOverlay";


export default function AllOverlays() {

  const { isLoginOpen, isEditProfileOpen } = useGeneralStore();
    
  return (
    <>
        <ClientOnly>
            {isLoginOpen ? <AuthOverlay/> : null}
            {isEditProfileOpen ? <EditProfileOverlay /> : null}
        </ClientOnly>
    </>
  )
}
