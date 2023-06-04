import "./globals.css";

export const metadata = { title: "beomtalk" };

export interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko">
      <body className="flex h-screen w-screen flex-1">{children}</body>
    </html>
  );
};

export default RootLayout;
