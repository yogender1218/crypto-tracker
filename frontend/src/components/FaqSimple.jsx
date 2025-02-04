import { Accordion, Container, Title } from '@mantine/core';
import classes from './FaqSimple.module.css';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function FaqSimple() {
  return (
    <Container size="sm" style={{ maxWidth: 1000, marginTop:'80px', marginBottom:'80px' }}>
      <Title align="center" style={{marginBottom:'50px'}}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item value="reset-password" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
          <Accordion.Control style={{color:'var(--ftext-color)'}}>How can I reset my password?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="another-account" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Can I create more than one account?</Accordion.Control>
          <Accordion.Panel  style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="newsletter" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
          <Accordion.Control style={{color:'var(--ftext-color)'}}>How can I subscribe to the monthly newsletter?</Accordion.Control>
          <Accordion.Panel  style={{color:'var(--fcontent-color)',fontSize:'14px'}} >{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="credit-card" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Do you store credit card information securely?</Accordion.Control>
          <Accordion.Panel  style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="payment" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
          <Accordion.Control style={{color:'var(--ftext-color)'}}>What payment systems do you work with?</Accordion.Control>
          <Accordion.Panel  style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
