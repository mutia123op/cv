import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function Header() {
    return (
        <Navbar fluid className="dark:bg-white">
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold">Muthe</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Muthe</span>
                        <span className="block truncate text-sm font-medium"> muthaharata@gmail.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="https://youtube.com/@muthaharatannisya6251?si=qzu87ojRtUi2WFCK">Youtube</Navbar.Link>
                <Navbar.Link href="https://www.instagram.com/muthe730?igsh=MWJlZWtwZmZlYzRnOQ==https://www.instagram.com/muthe730?igsh=MWJlZWtwZmZlYzRnOQ==">Instagram</Navbar.Link>
                <Navbar.Link href="https://www.linkedin.com/in/muthaharat-annisya-746695339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkendln</Navbar.Link>
                <Navbar.Link href="https://github.com/mutia123op">Github</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
