import { createContextScope } from "@/utils/create-context";

type ImageLoadingStatus = "loading" | "loaded" | "error" | "idle";

type AvatarContext = {
  imageLoadingStatus: ImageLoadingStatus;
  onImageLoadingStatusChange: (status: ImageLoadingStatus) => void;
};

const createAvatarContext = createContextScope("Avatar");

const [AvatarProvider, useAvatarContext] = createAvatarContext<AvatarContext>();

export {
  AvatarProvider,
  useAvatarContext,
  type ImageLoadingStatus,
  type AvatarContext,
};
