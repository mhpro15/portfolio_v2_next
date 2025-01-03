import Image from "next/image";

import avatar from "../../../data/avatar.jpg";

export const ProfilePicture = () => {
  return (
    <div className="w-full text-text-white max-w-full flex items-center justify-center bg-glass-box rounded-xl overflow-hidden mx-auto">
      <Image
        className="w-[60%] h-[auto] max-w-[200px] min-w-[150px] rounded-full object-fill"
        src={avatar}
        alt="profile avatar"
      />
    </div>
  );
};
