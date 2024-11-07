import Link from "next/link";
import { Box } from "@mui/material";
import { Link as MUILink } from "@mui/material";

export const Navbar = () => {
    const links = [
        { name: 'Blog', href: '/blog' },
        { name: 'Takehomes', href: '/takehome' },
        { name: 'Projects', href: '/projects' }
    ];

    return (
        <Box sx={{
            maxWidth: '75vw',
            border: 'black 1px solid',
            margin: 'auto',
            marginTop: '1rem',
            padding: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
                <MUILink
                    sx={{
                        fontWeight: '500',
                        fontSize: 'xx-large',
                        color: 'var(--white-color)',
                        textDecoration: 'none',
                    }}
                >
                    Joshua Maduri
                </MUILink>
            </Link>

            <ul style={{
                display: 'flex',
                listStyle: 'none',
                gap: '3rem'
            }}>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} style={{ textDecoration: 'none' }}>
                            <MUILink
                                sx={{
                                    color: 'var(--white-color)',
                                    '&:hover': { color: 'var(--blue-color)' },
                                    textDecoration: 'none'
                                }}
                            >
                                {link.name}
                            </MUILink>
                        </Link>
                    </li>
                ))}
            </ul>
        </Box>
    );
}
