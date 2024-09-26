"use client";

import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModeToggle from "../ModeToggle";

export default function Footer() {
  const [theme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <footer className="w-full border-t  py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="/documentation"
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Documentation
            </Link>
            <Link
              href="/guides"
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Guides
            </Link>
            <Link
              href="/help"
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Help
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/vercel"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/vercel"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <ModeToggle />
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Vercel, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/trademark"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Trademark Policy
            </Link>
            <Link
              href="/inprint"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Inprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
