import Header from "../components/header";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const inter = { className: "your-class-name" }; // Define the 'inter' variable
    return (
      <html lang="en">
        <body className={inter.className}>
          <Header/>
          {children}
          </body>
      </html>
    );
  }
  