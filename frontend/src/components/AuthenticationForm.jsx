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
import { createContext, useState, useEffect } from "react";

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
    <Paper radius="md" p="xl" withBorder {...props} style={{width: '700px', margin: 'auto', backgroundColor: 'var(--blur-bgcolor)', backdropFilter: 'blur(15px)'}}>
      <Text size="lg" fw={500}>
        Welcome to TradeSense, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl" style={{backgroundColor: 'var(--blur-bgcolor)', backdropFilter: 'blur(15px)'}}>Google</GoogleButton>
        <TwitterButton radius="xl" style={{backgroundColor: 'var(--blur-bgcolor)', backdropFilter: 'blur(15px)'}}>Twitter</TwitterButton>
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
                backgroundColor: 'var(--bgcolor)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
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
              backgroundColor: 'var(--bgcolor)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
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
              backgroundColor: 'var(--bgcolor)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
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
  );
}