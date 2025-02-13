import { Button, Container, Text, Title } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./HeroText.module.css";
import { Link } from "react-router-dom";
import { StyledGetStarted } from "./StylesGetStarted";

const HeroText = () => {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Master Crypto Markets with{" "}
          <Text component="span" className={classes.highlight} inherit>
          AI-Powered Insights
          </Text>{" "}
          & Real-Time Tracking 🚀
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
          Step into a realm where ancient market wisdom dances with digital innovation. Here, live price pulses, AI-powered insights, and vivid historical charts converge to craft a narrative of both legacy and luminous future. Feel the rhythm, embrace the innovation, and let your crypto journey begin.
          </Text>
        </Container>

        <div className={classes.controls}>
         <Link to="/login">
         <Button className={classes.control} size="lg" variant="default" color="gray">
         <StyledGetStarted></StyledGetStarted>
          </Button>
         </Link>
          <Button className={classes.control} size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HeroText;
