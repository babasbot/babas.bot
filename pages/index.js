import Head from "next/head";

export default function Home() {
  const poem = `
#!/usr/bin/env perl

BEFOREHAND: close door, each window & exit; wait until time.
    open spellbook, study, read (scan, select, tell us);
write it, print the hex while each watches,
    reverse its length, write again;
    kill spiders, pop them, chop, split, kill them.
        unlink arms, shift, wait & listen (listening, wait),
sort the flock (then, warn the "goats" & kill the "sheep");
    kill them, dump qualms, shift moralities,
    values aside, each one;
        die sheep! die to reverse the system
        you accept (reject, respect);
next step,
    kill the next sacrifice, each sacrifice,
    wait, redo ritual until "all the spirits are pleased";
    do it ("as they say").
do it(*everyone***must***participate***in***forbidden**s*e*x*).
return last victim; package body;
    exit crypt (time, times & "half a time") & close it,
    select (quickly) & warn your next victim;
AFTERWORDS: tell nobody.
    wait, wait until time;
    wait until next year, next decade;
        sleep, sleep, die yourself,
        die at last`;

  return (
    <div>
      <Head>
        <title>babas.bot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen">
        <div className="my-auto mx-auto">
          <pre>
            <code className="font-mono">{poem}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
