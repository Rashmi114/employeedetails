import Link from "next/link"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
        <html lang="en">
            <body>
                <Link href="/">Home</Link>&nbsp;&nbsp;&nbsp;
                <Link href="/users">Users</Link>
               <hr></hr>
                {children}
            </body>
        </html>
    )
  }