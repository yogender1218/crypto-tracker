import { useState,useEffect } from 'react';
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
  IconSun,
  IconMoon
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';
import '@mantine/core/styles.css';
import { ConfettiSideCannons } from './ConfettiSideCannons';
import { StyledRegister } from './StyledRegister';
import { Link } from "react-router-dom";
import { StyledGetStarted } from './StylesGetStarted';

const mockdata = [
  { icon: IconCode, title: 'Real-Time Price Updates', description: 'Catch the heartbeat of the market as it flows live' },
  { icon: IconCoin, title: 'Historical Data Visualization', description: 'Revisit the stories of the past through interactive charts and graphs' },
  { icon: IconBook, title: 'Automated Trading Bot', description: 'Set your rules and algorithms, and watch smart trades unfold' },
  { icon: IconFingerprint, title: 'AR/VR Visualization', description: 'Immerse yourself in 3D market realities—where data meets art' },
  { icon: IconChartPie3, title: 'Price Prediction', description: 'Machine learning marvels forecasting your next crypto wave' },
  { icon: IconNotification, title: 'Notifications', description: 'Set notifications for price alerts, market trends, and more' },
];


export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme === "light" ? "dark" : "light");
  };
  

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title} style={{ padding:'2px'}}>
      <Group wrap="nowrap" align="flex-start" style={{backdropFilter: 'blur(15px)', backgroundColor: 'var(--blur-bgcolor)', padding:'10px 20px', borderRadius:'10px'}} >
        <ThemeIcon size={34} variant="default" radius="md" style={{marginTop:'2px',backgroundColor:'rgb(25, 113, 194)',border:'1px solid var(--border-color)'}}>
          <item.icon size={22}  />
        </ThemeIcon>
        <div >
          <Text size="sm" fw={500}>{item.title}</Text>
          <Text size="xs" c="dimmed">{item.description}</Text>
        </div>
      </Group>
    </UnstyledButton>
  ));


  return (
    <Box pb={120} >
      <header className={classes.header}>
        <Group h="100%" w="100%"  justify="space-between" >
          {/* Left Section - Logo & Brand Name */}
          <Group align="center" gap="xs"  style={{paddingLeft:'3.1vw'}} >
          <Link to="/"> <img src="/TradeSense/omi.png" alt="Logo" className={classes.logo} /></Link>
           <Link to="/">
           <Text fw={500}>TradeSense</Text>
           </Link>
          </Group>

          {/* Center Section - Navigation Links */}
          <Group h="100%" gap={0} visibleFrom="sm" justify="center" style={{ flexGrow: 1 }}>
          <Link to="/" className={classes.link}>Home</Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md"  withinPortal >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline >
                    <Box component="span" mr={5}>Features</Box>
                    <IconChevronDown size={16}/>
                  </Center>
                </a>
              </HoverCard.Target>
              <HoverCard.Dropdown style={{ overflow: 'hidden', backdropFilter: 'blur(15px)', backgroundColor: 'var(--blur-bgcolor)',boxShadow:"var(--box-shadow)", borderRadius:'10px', border:'1px solid var(--border-color)', }}>
                <Group justify="space-between" px="md"  >
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">View all</Anchor>
                </Group>
                <Divider my="sm" style={{color:'var(--border-color)'}}/>
                <SimpleGrid cols={2} spacing={2} >{links}</SimpleGrid>
                <div className={classes.dropdownFooter} >
                  <Group justify="space-between" style={{marginTop:'30px'}}>
                    <div>
                      <Text fw={500} fz="sm" >Get started</Text>
                      <Text size="xs" c="dimmed">For those ready to dive into real-time magic</Text>
                    </div>
                    <Link to="/login"> <Button variant="default" style={{backgroundColor:'rgb(25, 113, 194)'}}><StyledGetStarted></StyledGetStarted></Button></Link>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>Market Trends</a>
            <a href="#" className={classes.link}>Community</a>
            <Link to="/support" className={classes.link}>Support</Link>
          </Group>

          {/* Right Section - Auth Buttons & Theme Toggle */}
          <Group visibleFrom="sm" gap="sm">
          <Link to="/login"><Button variant="default"><ConfettiSideCannons></ConfettiSideCannons></Button></Link>
          <Link to="/login"> <Button><StyledRegister></StyledRegister></Button></Link>
            <button className={classes.themeToggle} onClick={toggleTheme}>
              {theme === "light" ? <IconMoon size={22} /> : <IconSun size={22} />}
            </button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" style={{ paddingRight:'3vw'}}/>
        </Group>
      </header>

      <Drawer opened={drawerOpened} onClose={closeDrawer} size="100%" padding="md" title="Navigation" hiddenFrom="sm">
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          <a href="#" className={classes.link}>Home</a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>Features</Box>
              <IconChevronDown size={16} color='blue'/>
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>Learn</a>
          <a href="#" className={classes.link}>Academy</a>
          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md" >
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
