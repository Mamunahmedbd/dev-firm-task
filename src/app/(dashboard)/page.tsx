import IconAddCircleOutline from "@/assets/icon/add-circle";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div>
      <HeroSection
        buttonText="Add invoice"
        heading="Invoices"
        subHeading="Invoices"
        icon={<IconAddCircleOutline fontSize={"26"} />}
      />
    </div>
  );
}
