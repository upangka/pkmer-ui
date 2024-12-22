"use client";
import { Avatar } from "@pkmer-ui/react/avatar";

export default function Page() {
  return (
    <>
      <Avatar.Root>
        <Avatar.Fallback>
          PK
        </Avatar.Fallback>
        <Avatar.Image
          src="https://i.pravatarx.cc/300"
        />
      </Avatar.Root>
    </>
  );
}
