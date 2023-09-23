import IconAddCircleOutline from "@/assets/icon/add-circle";
import HeroSection from "@/components/hero-section";
import { InvoiceCreate } from "./invoice-create";

export default async function CreateInvoice() {
  return (
    <div>
      <HeroSection
        buttonText="Add invoice"
        heading="Invoices"
        subHeading="Invoices / New invoice"
        icon={<IconAddCircleOutline fontSize={"26"} />}
      />
      <InvoiceCreate />
    </div>
  );
}
