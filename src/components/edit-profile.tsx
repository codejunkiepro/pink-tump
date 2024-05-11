import { useState } from "react";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
} from "./ui/credenza";
import Image from "next/image";

import Avatar from "@/assets/avatar.png";

interface IEditProfile {
  open: boolean;
  setOpen: (op: boolean) => void;
}
function EditProfile({ open, setOpen }: IEditProfile) {
  //   const [open, setOpen] = useState(true);
  return (
    <Credenza open={open} onOpenChange={(op) => setOpen(op)}>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Edit Profile</CredenzaTitle>
        </CredenzaHeader>
        <CredenzaBody>
          <div className="flex mb-4">
            <div className="mr-3">Profile Photo</div>
            <Image src={Avatar} alt="avatar" width={50} height={50} />
          </div>
          <div className="flex mb-4">
            <div className="w-[30%]">Username</div>
            <input
              className="w-full border border-white text-white rounded-sm focus:border-blue-500"
              type="text"
            />
          </div>
          <div className="flex mb-1">
            <div className="w-[30%]">Bio</div>
            <input
              className="w-full border border-white text-white rounded-sm focus:border-blue-500"
              type="text"
            />
          </div>
          <div className="flex justify-end mb-4">
            <span className="text-xs text-orange-500 ">
              You can change your username once every day
            </span>
          </div>
          <div className="flex gap-2 justify-end">
            <button className="py-1 px-2 ml-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
              Close
            </button>
            <button className="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
              Save
            </button>
          </div>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
}

export default EditProfile;
