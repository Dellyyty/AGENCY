import { motion, useInView } from "motion/react";
import { useMemo, useRef } from "react";

type Direction = "top" | "bottom";

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: "words" | "letters";
  direction?: Direction;
  startDelay?: number;
};

export function BlurText({
  text,
  className = "",
  delay = 200,
  splitBy = "words",
  direction = "bottom",
  startDelay = 0,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const tokens = useMemo(() => {
    if (splitBy === "letters") return Array.from(text);
    return text.split(/(\s+)/);
  }, [text, splitBy]);

  const yFrom = direction === "bottom" ? 50 : -50;
  const yMid = direction === "bottom" ? -5 : 5;

  return (
    <span ref={ref} className={className}>
      {tokens.map((token, i) => {
        if (/^\s+$/.test(token)) {
          return <span key={i}>{token}</span>;
        }
        return (
          <motion.span
            key={i}
            className="inline-block will-change-transform"
            initial={{ filter: "blur(10px)", opacity: 0, y: yFrom }}
            animate={
              inView
                ? {
                    filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                    opacity: [0, 0.5, 1],
                    y: [yFrom, yMid, 0],
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              ease: "easeOut",
              times: [0, 0.5, 1],
              delay: startDelay + (i * delay) / 1000,
            }}
          >
            {token}
          </motion.span>
        );
      })}
    </span>
  );
}
