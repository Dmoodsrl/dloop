"use client"

import Link from 'next/link';
import { Home, Users, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Users', href: '/dashboard/users' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

interface SidebarProps {
  isCollapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}

export function Sidebar({ isCollapsed, onCollapsedChange }: SidebarProps) {
  const pathname = usePathname();

  const handleCollapse = () => {
    onCollapsedChange(!isCollapsed);
  };

  return (
    <div className={cn(
      "h-screen bg-background px-2 transition-all duration-200",
      isCollapsed ? "" : ""
    )}>
      <div className="flex h-16 items-center justify-between px-2">
        {!isCollapsed && (
          <h2 className="text-sm font-medium">Dashboard</h2>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={handleCollapse}>
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm font-medium leading-none transition-all hover:bg-accent",
              pathname === item.href ? "bg-accent" : "transparent",
              isCollapsed ? "justify-center" : "justify-start"
            )}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}