import "./globals.css";
import React from "react";
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Analytics } from "@vercel/analytics/next"
import ClientLayout from "./clientLayout";

export const metadata: Metadata = {
  title: 'VBA Decoded',
  description: 'A modern and in-depth resource for VBA and MS Access Development.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Analytics />
          <ClientLayout>
            {children}
          </ClientLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
