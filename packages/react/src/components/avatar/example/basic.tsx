import {Avatar} from "@pkmer-ui/react/index"

export default function Basic() {
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