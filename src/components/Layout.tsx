
import React from 'react';
import Navbar from './Navbar';
import { AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { ScrollArea } from "@/components/ui/scroll-area";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <ScrollArea className="flex-1">
        <main className="relative">
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </main>
      </ScrollArea>
    </div>
  );
};

export default Layout;
