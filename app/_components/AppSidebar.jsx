"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Compass, GalleryHorizontalEnd, LogIn, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuOptions = [
  {
    title: "Home",
    icon: Search,
    path: "/",
  },
  {
    title: "Discover",
    icon: Compass,
    path: "/discover",
  },
  {
    title: "Library",
    icon: GalleryHorizontalEnd,
    path: "/library",
  },
  {
    title: "Sign In",
    icon: LogIn,
    path: "/sign-in",
  },
];

export function AppSidebar() {
  const path = usePathname();
  const { user } = useUser();
  console.log(user);
  return (
    <Sidebar>
      <SidebarHeader className="bg-accent flex items-center py-5">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
      </SidebarHeader>
      <SidebarContent className="bg-accent">
        <SidebarGroup />
        <SidebarContent>
          <SidebarMenu>
            {MenuOptions.map((menu, index) => {
              return (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className={`p-5 hover:font-bold ${
                      path?.includes(menu.path) && "font-bold"
                    }`}
                  >
                    <Link href={menu.path} className="flex items-center gap-2">
                      <menu.icon size={18} />
                      <span>{menu.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
          {!user ? (
            <SignUpButton mode="modal">
              <Button className="rounded-full mx-4 mt-4">Sign Up</Button>
            </SignUpButton>
          ) : (
            <SignOutButton mode="modal">
              <Button className="rounded-full mx-4 mt-4">Logout</Button>
            </SignOutButton>
          )}
        </SidebarContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="bg-accent">
        <div className="p-3">
          <UserButton />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
