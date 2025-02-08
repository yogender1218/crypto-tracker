import styles from './AuthenticationForm.module.css';
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import Lottie from "lottie-react";
import animationData from "../assets/sinup.json";
import { ConfettiSideCannons } from './ConfettiSideCannons';


export function AuthenticationForm(props) {
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <div className={styles.container}>
       <Lottie 
      animationData={animationData} 
      loop={true} 
      autoplay={true} 
      style={{ width: '55vw', height: '30%',paddingTop:'5vh',paddingBottom:'7vh',paddingLeft:'2%',paddingRight:'0%' }}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice",
      }}
    />
    <Paper radius="md" p="xl" withBorder {...props} style={{width: '55vw',border:'none', marginRight: '1%',marginTop:'1%',marginBottom:'0%', backgroundColor: 'var(--bg-color)'}}>
      <Text size="lg" fw={500}>
        Welcome to TradeSense, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl" style={{backgroundColor: 'var(--blur-bgcolor)', backdropFilter: 'blur(15px)', color:'var(--text-color)', borderColor:'var(--border-color)' }}>Google</GoogleButton>
        <TwitterButton radius="xl" style={{backgroundColor: 'var(--blur-bgcolor)', backdropFilter: 'blur(15px)', color:'var(--text-color)', borderColor:'var(--border-color)' }}>Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
              styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}}
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@TradeSense.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
            styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
            styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}}
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
        <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
    </div>
  );
}