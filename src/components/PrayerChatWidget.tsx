'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    PrayerChat?: {
      init: (config: { embedCode: string; apiUrl: string }) => void;
    };
  }
}

const EMBED_CODE = 'prayer-chat-bot-qJrralsR6TvSB-zQhPBoXz5O';
const BASE_URL = 'https://chatbot-java-spring-ai.onrender.com';

function showWidgetMessage(text: string) {
  const el =
    document.getElementById('prayer-chat-chatbot-' + EMBED_CODE) ||
    document.querySelector(`[data-embed-code="${EMBED_CODE}"]`);
  if (el) {
    el.innerHTML = `<p style="padding:12px;background:#2a2a28;border:1px solid #555;color:#f5f4f0;border-radius:8px;font-family:sans-serif;font-size:14px;">${text}</p>`;
  }
}

export default function PrayerChatWidget() {
  useEffect(() => {
    let script: HTMLScriptElement | null = null;
    let loaded = false;

    // Defer the third-party widget until the user interacts (or an 8s idle
    // fallback) so it never competes with initial page rendering.
    const events: (keyof WindowEventMap)[] = ['scroll', 'pointerdown', 'keydown', 'touchstart'];

    const load = () => {
      if (loaded) return;
      loaded = true;
      window.clearTimeout(fallback);
      events.forEach((event) => window.removeEventListener(event, load));

      script = document.createElement('script');
      script.src = `${BASE_URL}/js/chatbot-widget.js`;
      script.async = true;

      script.onerror = () => {
        showWidgetMessage('Chat could not load. Check browser console (F12) or Content-Security-Policy.');
      };

      script.onload = () => {
        if (window.PrayerChat?.init) {
          window.PrayerChat.init({
            embedCode: EMBED_CODE,
            apiUrl: `${BASE_URL}/api`,
          });
        } else {
          showWidgetMessage('Chat failed to start. Open console (F12) for details.');
        }
      };

      document.head.appendChild(script);
    };

    const fallback = window.setTimeout(load, 8000);
    events.forEach((event) => window.addEventListener(event, load, { once: true, passive: true }));

    return () => {
      window.clearTimeout(fallback);
      events.forEach((event) => window.removeEventListener(event, load));
      if (script?.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div
      id={'prayer-chat-chatbot-' + EMBED_CODE}
      data-embed-code={EMBED_CODE}
      suppressHydrationWarning={true}
    />
  );
}
