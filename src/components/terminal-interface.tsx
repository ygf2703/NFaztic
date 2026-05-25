"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { Circle, CornerDownLeft, Terminal } from "lucide-react";

type TerminalLine = {
  id: string;
  text: string;
};

const bootLines = [
  "NFAZTIC shell initialized.",
  "Signal: psy / goa / tribal circuit online.",
  "Commands: help, play, bio, visuals, video, contact, clear.",
];

const helpLines = [
  "help     print command map",
  "play     jump to music hub",
  "bio      artist signal",
  "visuals  open visual archive",
  "video    tune YouTube player",
  "contact  open social channels",
  "clear    reset terminal buffer",
];

function scrollToSection(target: string) {
  document.getElementById(target)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function TerminalInterface() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [command, setCommand] = useState("");
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const displayToTerminal = useCallback(function displayToTerminal(
    text: string,
  ) {
    setLines((current) => [
      ...current.slice(-80),
      {
        id: `${Date.now()}-${current.length}-${text}`,
        text,
      },
    ]);
  }, []);

  useEffect(() => {
    const timers = bootLines.map((line, index) =>
      window.setTimeout(() => displayToTerminal(line), 140 * index),
    );

    return () => timers.forEach(window.clearTimeout);
  }, [displayToTerminal]);

  useEffect(() => {
    terminalBodyRef.current?.scrollTo({
      top: terminalBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [lines]);

  function runCommand(rawCommand: string) {
    const normalizedCommand = rawCommand.trim().toLowerCase();

    if (!normalizedCommand) {
      return;
    }

    displayToTerminal(`> ${rawCommand}`);

    if (normalizedCommand === "clear") {
      setLines([]);
      window.setTimeout(
        () => displayToTerminal("Terminal buffer reset."),
        20,
      );
      return;
    }

    if (normalizedCommand === "help") {
      helpLines.forEach(displayToTerminal);
      return;
    }

    if (normalizedCommand === "play") {
      displayToTerminal("Routing to music hub.");
      scrollToSection("music");
      return;
    }

    if (normalizedCommand === "bio") {
      displayToTerminal(
        "NFAZTIC builds psy/goa trance around ritual percussion, synthetic pressure, and neon visual mythology.",
      );
      return;
    }

    if (normalizedCommand === "visuals") {
      displayToTerminal("Opening visual archive.");
      scrollToSection("visuals");
      return;
    }

    if (normalizedCommand === "video") {
      displayToTerminal("Tuning YouTube uploads player.");
      scrollToSection("youtube");
      return;
    }

    if (normalizedCommand === "contact") {
      displayToTerminal("Opening contact channels.");
      scrollToSection("contact");
      return;
    }

    displayToTerminal(`Unknown command: ${normalizedCommand}`);
    displayToTerminal("Run help for the command map.");
  }

  function submitCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runCommand(command);
    setCommand("");
  }

  return (
    <section id="terminal" className="bg-[#050506] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#ffbe2e]">
              Easter egg
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
              Terminal navigation.
            </h2>
          </div>
          <div className="flex gap-2">
            {["help", "play", "visuals", "contact"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => runCommand(item)}
                className="h-9 rounded-lg border border-white/10 px-3 font-mono text-xs uppercase tracking-[0.18em] text-zinc-300 transition hover:border-[#ffbe2e]/60 hover:text-[#ffbe2e]"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#08090d] shadow-2xl shadow-[#ff2bd6]/10">
          <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
            <div className="flex items-center gap-2">
              <Circle className="h-3 w-3 fill-[#ff4d4d] text-[#ff4d4d]" />
              <Circle className="h-3 w-3 fill-[#ffbe2e] text-[#ffbe2e]" />
              <Circle className="h-3 w-3 fill-[#1bf7d1] text-[#1bf7d1]" />
            </div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              <Terminal className="h-4 w-4" />
              nfaztic://root
            </div>
          </div>

          <div
            ref={terminalBodyRef}
            className="h-[360px] overflow-y-auto px-4 py-5 font-mono text-sm leading-7 text-zinc-300 sm:px-6"
            aria-live="polite"
          >
            {lines.map((line) => (
              <div key={line.id} className="break-words">
                <span className="mr-3 text-[#1bf7d1]">$</span>
                {line.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={submitCommand}
            className="flex items-center gap-3 border-t border-white/10 bg-black/30 px-4 py-4 sm:px-6"
          >
            <span className="font-mono text-[#1bf7d1]">$</span>
            <input
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              className="min-w-0 flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-zinc-600"
              placeholder="enter command"
              autoComplete="off"
              spellCheck={false}
            />
            <button
              type="submit"
              aria-label="Run command"
              className="grid h-10 w-10 place-items-center rounded-lg bg-white text-black transition hover:bg-[#ffbe2e]"
            >
              <CornerDownLeft className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
