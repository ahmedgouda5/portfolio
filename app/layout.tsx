import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClientOnly from "@/components/ClientOnly"; // 🆕
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Ahmed Gouda | software developer",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
