import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Atom, AudioLines, Cpu, Globe, Mic, Paperclip, SearchCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ChatInputBox = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full gap-6">
      {/* Logo */}
      <Image src="/logo.png" alt="Logo" width={200} height={200} />

      {/* Input with Tabs */}
      <div className="p-2 w-full max-w-2xl border rounded-2xl flex justify-between items-end">
        <Tabs defaultValue="Search" className="w-full">
          {/* Input area (changes based on active tab) */}
          <TabsContent value="Search">
            <input
              type="text"
              placeholder="Ask anything"
              className="w-full p-4 outline-none"
            />
          </TabsContent>
          <TabsContent value="Research">
            <input
              type="text"
              placeholder="Reaserch Anything"
              className="w-full p-4 outline-none"
            />
          </TabsContent>

          {/* Tab buttons (moved under input) */}
          <TabsList className="flex justify-center">
            <TabsTrigger value="Search" className={'text-primary'}><SearchCheck />Search</TabsTrigger>
            <TabsTrigger value="Research" className={'text-primary'}><Atom/>Research</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex gap-4">
            

<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant='ghost'>
            <Cpu className="text-gray-500 h5 w-5"/>
            </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


            <Button variant='ghost'>
            <Globe  className="text-gray-500 h5 w-5"/>
            </Button>
            <Button variant='ghost'>
            <Paperclip  className="text-gray-500 h5 w-5"/>
            </Button>
            <Button variant='ghost'>
            <Mic className="text-gray-500 h5 w-5"/>
            </Button>

            <Button>
                <AudioLines className="text-white h-5 w-5"/>

            </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInputBox;
