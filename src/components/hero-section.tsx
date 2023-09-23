import { Button } from "@/components/ui/button";
import Link from "next/link";

type IProps = {
  heading: string;
  subHeading: string;
  icon?: React.ReactNode;
  buttonText?: string;
  link?: string;
};

const HeroSection = ({
  heading,
  subHeading,
  icon,
  buttonText,
  link,
}: IProps) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <h2 className="text-[24px] font-bold ">{heading}</h2>
        <h4 className=" text-muted-foreground ">{subHeading}</h4>
      </div>
      {link && (
        <Link href={link}>
          <Button className="text-white">
            <span className="mr-2">{icon}</span>
            {buttonText}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default HeroSection;
