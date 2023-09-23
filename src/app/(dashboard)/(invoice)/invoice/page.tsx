import IconAddCircleOutline from "@/assets/icon/add-circle";
import HeroSection from "@/components/hero-section";
import { DataTable } from "./data-table";
import { IPaymentType, invoiceColumns } from "./columns";

async function getData(): Promise<IPaymentType[]> {
  // Fetch data from your API here.
  return [
    {
      id: "34543",
      trip: 3422423,
      invoice_date: "2023-20-09",
      invoice_amount: "23323",
      invoice_due: "2334",
      payment_method: "Bkash",
      due_date: "2023-20-09",
      status: "paid",
    },
    {
      id: "234324",
      trip: 344323,
      invoice_date: "2023-20-09",
      invoice_amount: "233323",
      invoice_due: "2334",
      payment_method: "Bkash",
      due_date: "2023-20-09",
      status: "paid",
    },
    {
      id: "232323",
      trip: 3423443,
      invoice_date: "2023-20-09",
      invoice_amount: "2323",
      invoice_due: "2234",
      payment_method: "Bkash",
      due_date: "2023-20-09",
      status: "unpaid",
    },
    {
      id: "345345435",
      trip: 354423,
      invoice_date: "2023-20-09",
      invoice_amount: "23323",
      invoice_due: "2344",
      payment_method: "Bkash",
      due_date: "2023-20-09",
      status: "cancelled",
    },
  ];
}
export default async function Invoice() {
  const data = await getData();

  return (
    <div>
      <HeroSection
        buttonText="Add invoice"
        heading="Invoices"
        subHeading="Invoices"
        icon={<IconAddCircleOutline fontSize={"26"} />}
        link="/create-invoice"
      />
      <div className="p-3 container ">
        <DataTable columns={invoiceColumns} data={data} />
      </div>
    </div>
  );
}
