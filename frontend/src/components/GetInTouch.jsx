import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import styles from './GetInTouch.module.css';

export function GetInTouch() {
  return (
    <Paper shadow="md" radius="lg" style={{ margin:'auto', background:'var(--bg-color)'}}>
      <div className={styles.wrapper}>
        <div
          className={styles.contacts}
          style={{ backgroundImage: 'url(/TradeSense/bg.svg)' , width: '150vw', backgroundSize: 'cover'}}  
        >
          <Text fz="lg" fw={700} className={styles.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="lg" fw={700} className={styles.title}>
            Get in touch
          </Text>

          <div className={styles.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'none'
              }}} />
              <TextInput label="Your email" placeholder="hello@TradeSense.dev" required styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'none'
              }}}/>
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'none'
              }}}/>

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
              styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'none'
              }}}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={styles.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
