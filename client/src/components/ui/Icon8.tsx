import { icon8Url } from "@/lib/icons8";
import { classNames } from "@/lib/utils";

interface Icon8Props {
  slug: string;
  alt: string;
  size?: 48 | 64 | 96;
  className?: string;
}

export function Icon8({ slug, alt, size = 96, className = "h-8 w-8" }: Icon8Props) {
  return <img src={icon8Url(slug, size)} alt={alt} className={classNames("object-contain", className)} loading="lazy" />;
}
