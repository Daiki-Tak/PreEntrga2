import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image, } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <Flex alignItems='center' bg='red.400'>
                <Box p='4'>
                    <Image src='src/assets/poke-ball.png' alt='Poke-ball' />
                </Box>
                <Box borderRadius='md' color='white' px={4} h={8}>
                    <Link to={'/'}>
                        PokéShop
                    </Link>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Menu>
                        <MenuButton>
                            Categories
                        </MenuButton>
                        <MenuList>
                            <Link to={`/category/${'Items'}`}>
                                <MenuItem>Items</MenuItem>
                            </Link>
                            <Link to={`/Category/${'Medicine'}`}>
                                <MenuItem>Medicine</MenuItem>
                            </Link>
                            <Link to={`/Category/${'TMs & HMs'}`}>
                                <MenuItem>TMs & HMs</MenuItem>
                            </Link>
                            <Link to={`/Category/${'Berries'}`}>
                                <MenuItem>Berries</MenuItem>
                            </Link>
                            <Link to={`/Category/${'Key Items'}`}>
                                <MenuItem>Key Items</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Link to={'/cart'}>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex>

        </>
    )
}

export default NavBar