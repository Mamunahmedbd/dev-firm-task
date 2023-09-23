"use client";

import IconDelete from "@/assets/icon/delete-icon";
import IconBxsEditAlt from "@/assets/icon/edit-pencil";
import StatusBadge from "@/components/utils/status-badge";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type IPaymentType = {
  id: string;
  trip: number;
  invoice_date: string;
  invoice_amount: string;
  invoice_due: string;
  payment_method: string;
  due_date: string;
  status: "paid" | "unpaid" | "cancelled";
};

export const invoiceColumns: ColumnDef<IPaymentType>[] = [
  {
    accessorKey: "id",
    header: "Invoice No.",
  },
  {
    accessorKey: "trip",
    header: "trip",
  },
  {
    accessorKey: "invoice_date",
    header: "Inv. Date",
  },
  {
    accessorKey: "invoice_amount",
    header: "Inv. Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("invoice_amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "invoice_due",
    header: "Inv. Due",
  },
  {
    accessorKey: "invoice_due",
    header: "Inv. Due",
  },
  {
    accessorKey: "payment_method",
    header: "Payment method",
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium flex space-x-2">
          <Link href={`/invoice/edit`}>
            <IconBxsEditAlt
              fontSize={"30"}
              className="bg-yellow-100 text-yellow-600 rounded-lg p-1 cursor-pointer"
            />
          </Link>
          <IconDelete
            fontSize={"30"}
            className="bg-red-100 text-red-600 rounded-lg p-1 cursor-pointer"
          />
        </div>
      );
    },
  },
];
