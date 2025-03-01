import "./globals.css";

export const metadata = {
  title: "Tik Tak Toe",
  description: "Tik Tak Toe with DaisyUI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="garden">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
