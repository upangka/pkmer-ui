import { useAvatarContext } from "./use-avatar-context";
interface AvatarFallbackProps extends React.ComponentPropsWithRef<"span"> {}

const AvatarFallback: React.FC<AvatarFallbackProps> = (props) => {
  const { imageLoadingStatus } = useAvatarContext();
  const { children, ref, ...rest } = props;

  if (imageLoadingStatus === "loaded") {
    return null;
  }
  return (
    <span ref={ref} {...rest}>
      {children}
    </span>
  );
};

export { AvatarFallback, type AvatarFallbackProps };
