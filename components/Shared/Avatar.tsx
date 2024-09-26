import {
  AvatarFallback,
  AvatarImage,
  Avatar as UIAvatar,
} from "@/components/ui/avatar";

export function Avatar() {
  return (
    <UIAvatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </UIAvatar>
  );
}
