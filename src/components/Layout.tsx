
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { ScrollArea } from "@/components/ui/scroll-area";

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <ScrollArea className="flex-1">
        <main className="relative">
          <Outlet />
        </main>
      </ScrollArea>
    </div>
  );
};

export default Layout;
