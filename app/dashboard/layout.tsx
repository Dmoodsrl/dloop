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

  const [debugSizes, setDebugSizes] = useState<number[]>([]);


  const handleResize = (sizes: number[]) => {
    const newSize = sizes[0];
   // setPanelSize(newSize);
    setIsCollapsed(newSize <= COLLAPSE_THRESHOLD);
    setDebugSizes(sizes);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm z-50 space-y-2">
        <button
          className="text-left w-full hover:text-blue-300 transition-colors"
        >
          Panel Size: {currentSize.toFixed(2)}%
        </button>
        <div>Sizes[0]: {debugSizes[0]?.toFixed(2)}%</div>
        <div>Is Collapsed: {isCollapsed.toString()}</div>
        <div>Collapse Threshold: {COLLAPSE_THRESHOLD}%</div>
      </div>
      <ResizablePanelGroup 
        direction="horizontal" 
        onLayout={handleResize}
        className="w-full"
      >
        <ResizablePanel 
          defaultSize={30} 
          minSize={5} 
          maxSize={30}
          className={cn(
            "transition-width duration-300 ease-in-out",
            isCollapsed ? "min-w-[50px] max-w-[50px]" : "min-w-[5] max-w-[240px]"
          )}
        >
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} handleResize={handleResize} onCollapsedChange={setIsCollapsed} />
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