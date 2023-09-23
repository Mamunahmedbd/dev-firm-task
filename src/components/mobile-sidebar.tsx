"use client";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";
import Hydration from "@/components/utils/hydration";
import { Avatar } from "./ui/avatar";

export const MobileSidebar = () => {
  return (
    <Hydration>
      <Sheet>
        <SheetTrigger>
          <Avatar className="md:hidden">
            <Menu />
          </Avatar>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </Hydration>
  );
};
