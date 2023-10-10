import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image, Button, ButtonGroup } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <Flex alignItems='center' bg='red.400'>
                <Box borderRadius='md' color='white' px={4} h={8}>
                    <ButtonGroup>
                        <Link to={'/'}>
                            <Button variant='ghost'>
                                <Image
                                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
                                    alt='Poke-ball' />
                                PokéShop
                            </Button>
                        </Link>
                        <Menu>
                            <MenuButton as={Button} variant='ghost'>Categories</MenuButton>
                            <MenuList style={{color:'black'}}>
                                <Link to={`/category/${'items'}`}>
                                    <MenuItem>Items</MenuItem>
                                </Link>
                                <Link to={`/category/${'medicine'}`}>
                                    <MenuItem>Medicine</MenuItem>
                                </Link>
                                <Link to={`/category/${'tms & hms'}`}>
                                    <MenuItem>TMs & HMs</MenuItem>
                                </Link>
                                <Link to={`/category/${'berries'}`}>
                                    <MenuItem>Berries</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </ButtonGroup>
                </Box>
                <Spacer />
                <Spacer />
                <Box p='4'>
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex >

        </>
    )
}

export default NavBar