import Link from "next/link"

export const Navbar = () => {
    const links = [
        {name: 'About', href: '#about'},
        {name: 'Experience', href: '#experience'},
        {name: 'Education', href: '#education'},
        {name: 'Blogs', href: '/blogs'},
        {name: 'Projects', href: '#projects'}
    ]
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Link
                href='/'
                style={{
                    fontWeight: '500',
                    fontSize: 'xx-large',
                    color: 'var(--lightblue-color)',
                    textDecoration: 'none'
                }}
            >
                Joshua Maduri
            </Link>
            <ul style={{
                display: 'flex',
                listStyle: 'none',
                gap: '3rem'
                }}>
                    {links.map((link) => {
                        return (
                        <li>
                            <Link href={link.href} style={{textDecoration: 'none', color: 'var(--white-color)'}}>
                                {link.name}
                            </Link>
                        </li>)
                    })}
            </ul>
        </nav>
    )
}