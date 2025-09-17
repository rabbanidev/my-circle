import type { ReactNode } from "react";
import React from "react";
import { createPortal } from "react-dom";
import { usePortal } from "./hooks";

export default function Portal({
  children,
}: {
  children: ReactNode;
}): React.ReactPortal {
  const container = usePortal();
  return createPortal(children, container);
}
