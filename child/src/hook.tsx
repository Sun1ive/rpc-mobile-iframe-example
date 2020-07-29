import { useState, useEffect } from "react";
import { AxiosInstance } from "axios";
import { RPC } from "@mixer/postmessage-rpc";

function isMobile() {
  return false;
}

export const useClient = () => {
  const [client, setClient] = useState<AxiosInstance>();

  useEffect(() => {
    const fn = async () => {
      const http = ((await import("axios")) as any) as AxiosInstance;
      if (isMobile()) {
        const rpc = new RPC({
          target: (window as any).parent,
          serviceId: "test",
        });

        http.interceptors.request.use(async (req) => {
          const data = await rpc.call("request", {
            method: "token",
            params: {},
          });
          alert(JSON.stringify(data));

          return req;
        });
      }

      setClient(http);
    };

    fn();
  }, []);

  return client;
};
