import React from "react"

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>
                <h1>About navbar</h1>
                <main>
                    {children}
                </main>
            </nav>
        </>
    )
}