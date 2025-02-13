import { useState } from 'react';
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
} from '@tabler/icons-react';
import { Stack, Tooltip, UnstyledButton } from '@mantine/core';
import classes from './NavBarMinimal.module.css';
import { NavLink } from 'react-router-dom';

// ✅ NavbarLink को सही किया गया है
function NavbarLink({ icon: Icon, label, to }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <NavLink to={to} className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}>
        <UnstyledButton>
          <Icon size={20} stroke={1.5} />
        </UnstyledButton>
      </NavLink>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home', to: '/' },
  { icon: IconGauge, label: 'Dashboard', to: '/notfound' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics', to: '/analytics' },
  { icon: IconCalendarStats, label: 'Faq', to: '/faq' },
  { icon: IconUser, label: 'Account', to: '/login' },
  { icon: IconFingerprint, label: 'Subscription', to: '/subscription' },
  { icon: IconSettings, label: 'Settings', to: '/notfound' },
];

import { useNavigate } from "react-router-dom";

const handleExit = () => {
  localStorage.clear(); 
  window.location.href = "/login"; 
};


export function NavbarMinimal() {
  const links = mockdata.map((link) => (
    <NavbarLink {...link} key={link.label} />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" to="/login" />
        <NavbarLink icon={IconLogout} label="Logout" to="/login" onClick={handleExit}/>
      </Stack>
    </nav>
  );
}
