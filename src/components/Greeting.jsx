import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <p class="text-capitalize" onClick={() => setGreeting(randomMessage())}>
      {greeting}
    </p>
  );
}
