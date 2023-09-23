"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    product: "INV001",
    description: "This is invoice description.",
    totalAmount: "$250.00",
    trip: "T342384",
    reservation: "Credit Card",
  },
  {
    product: "INV002",
    description: "This is invoice description.",
    totalAmount: "$150.00",
    trip: "T3422384",
    reservation: "PayPal",
  },
  {
    product: "INV003",
    description: "This is invoice description.",
    totalAmount: "$350.00",
    trip: "T34232484",
    reservation: "Bank Transfer",
  },
  {
    product: "INV004",
    description: "This is invoice description.",
    totalAmount: "$450.00",
    trip: "T34238433",
    reservation: "Credit Card",
  },
];
// React.FC<{ refProp: React.RefObject<HTMLSelectElement> }>
function InvoiceTemplate({ componentRef }: any) {
  return (
    <div ref={componentRef} className="max-w-5xl mx-auto py-8 bg-white">
      <div className="overflow-hidden py-2 px-5">
        <div className="flex justify-between pb-8 items-center  ">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Invoice</h1>
            <div className="flex ">
              <strong>Date: </strong>01/01/2023
            </div>
          </div>
          <div className="flex items-center">
            <h2>Logo</h2>
          </div>
          <div className="flex flex-col text-right text-muted-foreground">
            <p>1474 Street Name</p>
            <p> City Name , State </p>
            <p> Zip Code , Country </p>
            <p> mamunahmedusa@gmail.com </p>
            <p> +8801623-456789 </p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between py-8 items-center  ">
          <div className="flex flex-col">
            <h2 className="font-bold">Invoice To:</h2>
            <div className="flex flex-col ">
              <p>John Doe</p>
              <p>Lize Tranport organization</p>
              <p>+8801623-456789</p>
            </div>
          </div>
          <div className="flex flex-col text-right text-muted-foreground">
            <p>1474 Street Name</p>
            <p> City Name , State </p>
            <p> Zip Code , Country </p>
            <p> mamunahmedusa@gmail.com </p>
            <p> +8801623-456789 </p>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Product</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Reservation</TableHead>
              <TableHead>Trip</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.product}>
                <TableCell className="font-medium">{invoice.product}</TableCell>
                <TableCell>{invoice.description}</TableCell>
                <TableCell>{invoice.reservation}</TableCell>
                <TableCell>{invoice.trip}</TableCell>
                <TableCell>{invoice.product}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Separator />
        <div className="flex justify-end py-6 pr-10 space-x-4">
          <div className="flex justify-between w-[12rem]">
            <div className="flex flex-col space-y-2">
              <strong className="text-right">Subtotal: </strong>
              <strong className="text-right">TVA: </strong>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="flex justify-between">$9,000</span>
              <span className="flex justify-between">$1,000</span>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex justify-end py-6 pr-10 space-x-4">
          <div className="flex justify-between w-[10rem]">
            <div className="flex flex-col space-y-2">
              <strong className="text-right text-primary">Total: </strong>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="flex justify-between text-primary">$9,000</span>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex justify-center pt-3 items-center">
          <h6 className="text-muted-foreground text-center">Name of company</h6>
        </div>
      </div>
    </div>
  );
}

export default InvoiceTemplate;
