interface AvatarImageProps {
    src: string,
    alt: string,
}

export const AvatarImage:React.FC<AvatarImageProps> = props => {
    return <img {...props}/>
}