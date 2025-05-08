import profile from "@/assets/profile.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@bonblogv2/ui/components";
import { cn } from "@bonblogv2/ui/lib/utils";

type Props = {
  className?: string;
  src?: string;
  alt?: string;
};

export const CircleAvatar = ({ className, src = profile, alt = "プロフィール画像" }: Props) => {
  return (
    <Avatar className={cn("size-32 shadow-lg transition-shadow", className)}>
      <AvatarImage className="rounded-full" src={src} alt={alt} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
