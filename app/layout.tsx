import "./globals.css";
import { aeonik, generateMetadata, inter } from "@/utils";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers/providers";
import { Toaster } from "sonner";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden",
          aeonik.variable,
          inter.variable,
        )}
      >
        <Providers>
          <Toaster position="bottom-center" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
