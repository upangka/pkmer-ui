"use client";
import { useState } from "react";
import { AvatarProvider, type ImageLoadingStatus } from "./use-avatar-context";

interface AvatarRootProps {
  children: React.ReactNode;
}

export const AvatarRoot: React.FC<AvatarRootProps> = ({ children }) => {
  const [imageStatus, setImageStatus] = useState<ImageLoadingStatus>("idle");
  return (
    <AvatarProvider
      imageLoadingStatus={imageStatus}
      onImageLoadingStatusChange={setImageStatus}
    >
      {children}
    </AvatarProvider>
  );
};
