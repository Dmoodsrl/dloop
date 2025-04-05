'use client';

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/ui/sidebar";
import { Header } from "@/components/ui/header";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { ResizeProvider, useResize } from "@/lib/context/resize-context";

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { setPanelSize, currentSize } = useResize();

  const COLLAPSE_THRESHOLD = 15; // Percentage threshold for collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleResize = (sizes: number[]) => {
    setPanelSize(sizes[0]);
    setIsCollapsed(sizes[0] < COLLAPSE_THRESHOLD);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="fixed bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full text-sm z-50">
        Size: {currentSize.toFixed(2)}% (Collapses at {COLLAPSE_THRESHOLD}%)
      </div>
      <ResizablePanelGroup 
        direction="horizontal" 
        onLayout={handleResize}
        className="w-full"
      >
        <ResizablePanel 
          defaultSize={20} 
          minSize={5} 
          maxSize={30} 
          className={cn(
            "transition-width duration-300 ease-in-out",
            isCollapsed ? "min-w-[50px] max-w-[50px]" : "min-w-[15%] max-w-[240px]"
          )}
        >
          <Sidebar isCollapsed={isCollapsed} onCollapsedChange={setIsCollapsed} />
        </ResizablePanel>
        <ResizableHandle withHandle className="transition-opacity duration-300 ease-in-out" />
        <ResizablePanel>
          <div className="flex-1">
            <Header />
            <main className="p-4">
              {children}
            </main>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ResizeProvider>
      <DashboardContent>{children}</DashboardContent>
    </ResizeProvider>
  );
}