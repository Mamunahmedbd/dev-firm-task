"use client";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, useFieldArray } from "react-hook-form";
import Hydration from "@/components/utils/hydration";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import IconDelete from "@/assets/icon/delete-icon";
import IconPlus from "@/assets/icon/plus-icon";
import { Separator } from "@/components/ui/separator";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
const formSchema = z.object({
  image: z.string({
    required_error: "An image is required.",
  }),
  client: z.string({
    required_error: "Please select a client.",
  }),
  trip: z.string({
    required_error: "Please select a trip.",
  }),
  date: z.date({
    required_error: "A date of birth is required.",
  }),
  products: z
    .array(
      z.object({
        type: z.string().optional(),
        product: z.string().optional(),
        description: z.string().optional(),
        total: z.string().optional(),
      })
    )
    .optional(),
});

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;
export default function EditPage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   username: "",
    // },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const { fields, append, remove } = useFieldArray({
    name: "products",
    control: form.control,
  });

  return (
    <Hydration>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="space-y-4 p-5 m-4">
            <div className="flex space-x-6 pt-4 ">
              <div className="w-2/4">
                <FormField
                  control={form.control}
                  name="client"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Select</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-full rounded-full justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? languages.find(
                                    (language) => language.value === field.value
                                  )?.label
                                : "Select client..."}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[20rem] p-0">
                          <Command className="w-full">
                            <CommandInput placeholder="Search clients..." />
                            <CommandEmpty>No client found.</CommandEmpty>
                            <CommandGroup>
                              {languages.map((language) => (
                                <CommandItem
                                  value={language.label}
                                  key={language.value}
                                  onSelect={() => {
                                    form.setValue("client", language.value);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      language.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {language.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Invoice date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "rounded-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Select a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/4">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Plane Image</FormLabel>
                      <FormControl>
                        <Input
                          id="picture"
                          type="file"
                          className="file:bg-blue-50 file:text-[#E1B238] hover:file:bg-blue-100 file:border file:border-solid file:border-[#E1B238] file:rounded-md border-[#E1B238] rounded-full"
                          placeholder="Choose a file"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex space-x-6 pt-4 ">
              <div className="w-1/5">
                <FormField
                  control={form.control}
                  name="trip"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Trip.</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-full rounded-full justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? languages.find(
                                    (language) => language.value === field.value
                                  )?.label
                                : "Select trip..."}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[15rem] p-0">
                          <Command className="w-full">
                            <CommandInput placeholder="Search trips..." />
                            <CommandEmpty>No trip found.</CommandEmpty>
                            <CommandGroup>
                              {languages.map((language) => (
                                <CommandItem
                                  value={language.label}
                                  key={language.value}
                                  onSelect={() => {
                                    form.setValue("trip", language.value);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      language.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {language.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </Card>
          <Card className="space-y-4 p-5 m-4">
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="w-2/12">Product Type:</TableHead>
                  <TableHead className="w-3/12">Product:</TableHead>
                  <TableHead className="w-4/12">Description:</TableHead>
                  <TableHead className="text-right w-3/12">Total:</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fields.map((field, index) => (
                  <TableRow key={field.id}>
                    <TableCell className="font-medium">
                      <FormField
                        control={form.control}
                        key={field.id}
                        name={`products.${index}.type`}
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                      "w-full rounded-full justify-between",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value
                                      ? languages.find(
                                          (language) =>
                                            language.value === field.value
                                        )?.label
                                      : "Plane"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-[10rem] p-0">
                                <Command className="w-full">
                                  <CommandInput placeholder="Search plane" />
                                  <CommandEmpty>No plane found.</CommandEmpty>
                                  <CommandGroup>
                                    {languages.map((language) => (
                                      <CommandItem
                                        value={language.label}
                                        key={language.value}
                                        onSelect={() => {
                                          form.setValue(
                                            `products.${index}.type`,
                                            language.value
                                          );
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            language.value === field.value
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                        {language.label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </Command>
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        key={field.id}
                        name={`products.${index}.product`}
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                      "w-full rounded-full justify-between",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value
                                      ? languages.find(
                                          (language) =>
                                            language.value === field.value
                                        )?.label
                                      : "FalconBX TBA/LTI"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-[15rem] p-0">
                                <Command className="w-full">
                                  <CommandInput placeholder="Search product" />
                                  <CommandEmpty>No product found.</CommandEmpty>
                                  <CommandGroup>
                                    {languages.map((language) => (
                                      <CommandItem
                                        value={language.label}
                                        key={language.value}
                                        onSelect={() => {
                                          form.setValue(
                                            `products.${index}.product`,
                                            language.value
                                          );
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            language.value === field.value
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                        {language.label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </Command>
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        key={field.id}
                        name={`products.${index}.description`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Product for trip t2493432"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell className="text-right flex justify-end items-center space-x-2">
                      <FormField
                        control={form.control}
                        key={field.id}
                        name={`products.${index}.total`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input {...field} placeholder="$10,000.00" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <span
                        className="cursor-pointer"
                        onClick={() => remove(index)}
                      >
                        <IconDelete
                          fontSize={"30"}
                          className="bg-red-100 text-red-600 rounded-lg p-1 cursor-pointer"
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="mt-2 flex items-center cursor-pointer text-primary hover:text-primary-hover"
                onClick={() =>
                  append({ type: "", product: "", description: "", total: "" })
                }
              >
                <IconPlus className="mr-2" />
                Add product
              </button>
            </div>
            <Separator />
            <div className="flex justify-end py-4 pr-10 space-x-4">
              <div className="flex justify-between w-[10rem]">
                <div className="flex flex-col space-y-2">
                  <strong className="text-right text-muted-foreground">
                    Subtotal:{" "}
                  </strong>
                  <strong className="text-right text-muted-foreground">
                    TVA:{" "}
                  </strong>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="flex justify-between">$9,000</span>
                  <span className="flex justify-between">$1,000</span>
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between py-4 pr-10 space-x-4">
              <div className="flex space-x-8">
                <Button type="submit" className="rounded-full p-5">
                  Save
                </Button>
                <Button className="rounded-full p-5" variant={"outline"}>
                  Cancel
                </Button>
              </div>
              <div className="flex justify-between space-y-5 w-[8rem]">
                <strong className="text-left text-muted-foreground">
                  Total:{" "}
                </strong>{" "}
                $10,000
              </div>
            </div>
          </Card>
        </form>
      </Form>
    </Hydration>
  );
}
