'use client';

import { useState } from 'react';
import { track } from '@/lib/analytics';

interface Item {
  id: string;
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="divide-y divide-line-900/60 overflow-hidden rounded-2xl border border-line-900/80 bg-gradient-to-b from-void-700/40 to-void-800/40 backdrop-blur-sm">
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} className="group">
            <button
              type="button"
              onClick={() => {
                const next = isOpen ? null : item.id;
                setOpen(next);
                if (next) track('faq_open', { question_id: item.id });
              }}
              aria-expanded={isOpen}
              aria-controls={`faq-${item.id}`}
              className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-void-700/40 md:px-8"
            >
              <span className="flex items-center gap-4 text-base font-medium text-ink-100 md:text-lg">
                <span
                  className={`h-1.5 w-1.5 flex-shrink-0 rounded-full transition-colors ${
                    isOpen ? 'bg-signal-500' : 'bg-line-500 group-hover:bg-signal-500'
                  }`}
                />
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={`relative flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? 'rotate-45 border-signal-500 bg-signal-500/10 text-signal-400'
                    : 'border-line-700 text-ink-500 group-hover:border-signal-500/50'
                }`}
              >
                <span className="text-sm leading-none">+</span>
              </span>
            </button>
            <div
              id={`faq-${item.id}`}
              hidden={!isOpen}
              className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-ink-300 md:px-8 md:pl-[4rem] md:text-base"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
