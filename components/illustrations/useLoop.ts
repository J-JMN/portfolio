"use client";

import {
  useReducedMotion,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";

type Ease = "easeInOut" | "linear" | "easeOut";

export function useLoop() {
  const reduce = useReducedMotion();

  return (
    animate: TargetAndTransition,
    duration: number,
    delay = 0,
    ease: Ease = "easeInOut",
    extra: Transition = {},
  ): { animate?: TargetAndTransition; transition?: Transition } =>
    reduce
      ? {}
      : {
          animate,
          transition: { duration, delay, repeat: Infinity, ease, ...extra },
        };
}
