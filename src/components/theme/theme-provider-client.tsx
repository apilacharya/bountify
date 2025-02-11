// src/components/theme/ThemeProviderClient.tsx
"use client";
import dynamic from "next/dynamic";
const ThemeProviderWrapper = dynamic(
  () => import("@/components/theme/theme-provider-wrapper"),
  { ssr: false }
);

const ThemeProviderClient = ({ children }: { children: React.ReactNode }) => {
  console.log("2. ThemeProviderWrapper rendering");

  return <ThemeProviderWrapper>{children}</ThemeProviderWrapper>;
};
export default ThemeProviderClient;
