import { useEffect, useState } from "react";

export default function usePortal(): HTMLDivElement {
  const [container] = useState<HTMLDivElement>(() =>
    document.createElement("div")
  );

  useEffect(() => {
    const parent: HTMLElement =
      document.getElementById("portal-root") || document.body;
    parent.appendChild(container);

    return () => {
      parent.removeChild(container);
    };
  }, [container]);

  return container;
}
