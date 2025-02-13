import { Button, Grid, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './FeaturesTitle.module.css';

import { IconChartLine, IconHistory, IconWallet, IconRobot, IconUsers, IconCurrencyDollar, IconTrendingUp, IconUserPlus, IconCalculator, IconTrophy, IconBell, IconCube, IconLanguage, IconLock, IconDatabase, IconUser, IconSun, IconMessageCircle, IconGlobe } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { StyledGetStarted } from './StylesGetStarted';

const features = [
  {
    icon: IconChartLine,
    title: 'Real-Time Price Updates',
    description: 'Stay informed with live crypto prices fetched from reliable APIs, ensuring you never miss a market movement.',
  },
  {
    icon: IconHistory,
    title: 'Historical Data Visualization',
    description: 'Analyze market trends with interactive graphs and charts powered by Chart.js, offering insights into past performance.',
  },
  {
    icon: IconWallet,
    title: 'Portfolio Tracker',
    description: 'Manage and monitor your crypto investments seamlessly, keeping track of your assets in one place.',
  },
  {
    icon: IconRobot,
    title: 'Automated Trading Bot',
    description: 'Set predefined rules for automatic buying and selling, optimizing your trading strategy without manual intervention.',
  },
  {
    icon: IconUsers,
    title: 'Social Sentiment Analysis',
    description: 'Leverage AI to analyze market sentiment from platforms like Twitter, Reddit, and news outlets, aiding in informed decision-making.',
  },
  {
    icon: IconCurrencyDollar,
    title: 'Price Prediction',
    description: 'Utilize machine learning models to forecast future prices, enhancing your investment strategies.',
  },
  {
    icon: IconUsers,
    title: 'User-to-User Trading',
    description: 'Engage in peer-to-peer trading with secure escrow services, ensuring safe and efficient transactions.',
  },
  {
    icon: IconCalculator,
    title: 'Crypto Mining Calculator',
    description: 'Calculate mining profitability based on your hardware, assisting in evaluating investment viability.',
  },
  {
    icon: IconBell,
    title: 'Advanced Notifications',
    description: 'Receive real-time alerts for price changes, trades, and news, keeping you ahead in the market.',
  },
  {
    icon: IconCube,
    title: 'AR/VR-Based Visualization',
    description: 'Experience market trends in 3D, offering an immersive analytical experience.',
  },
  {
    icon: IconUserPlus,
    title: 'Custom Watchlist',
    description: 'Add your favorite cryptocurrencies with personalized price alerts, staying updated on your interests.',
  },
  {
    icon: IconLanguage,
    title: 'Learning Section',
    description: 'Access tutorials for beginners and certification options, enhancing your crypto knowledge.',
  },
  {
    icon: IconLock,
    title: 'Authentication & Security',
    description: 'Implement 2FA for account security and data encryption for portfolio details, ensuring user safety.',
  },
  {
    icon: IconTrendingUp,
    title: 'Market Overview',
    description: 'Display top gainers, losers, and trending coins, providing a snapshot of the market landscape.',
  },
  {
    icon: IconSun,
    title: 'Dark/Light Theme Toggle',
    description: 'Choose between user-friendly themes for better UI/UX, enhancing visual comfort.',
  },
  {
    icon: IconMessageCircle,
    title: 'Integrated Chat Support',
    description: 'Access AI-powered chatbot for user queries, providing instant assistance.',
  },
  {
    icon: IconGlobe,
    title: 'Global News Integration',
    description: 'Stay informed with real-time crypto news feed integrated into the dashboard, keeping you updated on market developments.',
  },
];




export function FeaturesTitle() {
  const items = features.map(({ icon: Icon, title, description }) => (
    <div key={title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <Icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {title}
      </Text>
      <Text c="dimmed" fz="sm">
        {description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
          A Fully-Featured Crypto Ecosystem Engineered for Modern Traders 🚀
          </Title>
          <Text c="dimmed">
          Build smarter crypto strategies faster than ever – TradeSense integrates 50+ AI-powered tools, real-time data streams, and institutional-grade security to dominate volatile markets.
          </Text>

         <Link to="/login">
         <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
           <StyledGetStarted></StyledGetStarted>
          </Button>
         </Link>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
