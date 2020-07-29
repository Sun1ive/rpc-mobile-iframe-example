import React, { useState, useEffect, useRef } from "react";
import { RPC } from "@mixer/postmessage-rpc";
import { Iframe } from "./iframe";

function App() {
  const [src, setSrc] = useState<string | null>(() => null);
  const [init, setInit] = useState<boolean>(() => false);
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (src && !init) {
      const rpc = new RPC({
        target: ref.current!.contentWindow as any,
        serviceId: "test",
      });

      rpc.expose("request", (method, ...args) => {
        // return window.$RPC.request(method, ...args)
        return Promise.resolve({ token: "12312312312" });
      });

      setInit(true);
    }
  }, [src]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Parent</h1>
        <button
          onClick={() => {
            setSrc("https://google.com");
          }}
        >
          Open google
        </button>
        <button
          onClick={() => {
            setSrc("https://learn.javascript.ru/iframes");
          }}
        >
          Open JS
        </button>

        <button
          onClick={() => {
            setSrc("http://localhost:3000");
          }}
        >
          Open child
        </button>

        <Iframe src={src} ref={ref} />
      </header>
    </div>
  );
}

export default App;
