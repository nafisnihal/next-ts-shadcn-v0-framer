"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Set mounted to true when the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until the component is mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-background rounded-md p-1 flex border">
      <Button
        variant="ghost"
        size="icon"
        className={`w-8 h-8 mr-1 ${theme === "system" ? "bg-muted" : ""}`}
        onClick={() => setTheme("system")}
      >
        <Monitor className="h-4 w-4" />
        <span className="sr-only">System theme</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`w-8 h-8 mr-1 ${theme === "light" ? "bg-muted" : ""}`}
        onClick={() => setTheme("light")}
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Light theme</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`w-8 h-8 ${theme === "dark" ? "bg-muted" : ""}`}
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-4 w-4" />
        <span className="sr-only">Dark theme</span>
      </Button>
    </div>
  );
}
