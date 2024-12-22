interface AvatarFallbackProps {
  children: React.ReactNode;
}

export const AvatarFallback:React.FC<AvatarFallbackProps> = ({children}) => {
    return <span>{children}</span>
}