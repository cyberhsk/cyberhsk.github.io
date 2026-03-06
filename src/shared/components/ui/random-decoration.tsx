import { useMemo } from "react";

export const RandomDecorations = ({ count = 12 }: { count?: number }) => {
  const items = useMemo(() => {
    const list = [];

    for (let i = 0; i < count; i++) {
      let top = 0;
      let left = 0;

      // tránh vùng content ở giữa
      do {
        top = Math.random() * 100;
        left = Math.random() * 100;
      } while (top > 30 && top < 70 && left > 35 && left < 65);

      const type = Math.floor(Math.random() * 5);
      const size = 20 + Math.random() * 80;

      // ring
      if (type === 0) {
        list.push(
          <div
            key={i}
            className="absolute rounded-full border-4 border-purple-400/20"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
            }}
          />,
        );
        continue;
      }

      // small dot
      if (type === 1) {
        list.push(
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-500/30 rounded-full"
            style={{ top: `${top}%`, left: `${left}%` }}
          />,
        );
        continue;
      }

      // circle border
      if (type === 2) {
        list.push(
          <div
            key={i}
            className="absolute rounded-full border border-purple-300/20"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size / 2,
              height: size / 2,
            }}
          />,
        );
        continue;
      }

      // grid dots
      if (type === 3) {
        list.push(
          <div
            key={i}
            className="absolute"
            style={{ top: `${top}%`, left: `${left}%` }}
          >
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, j) => (
                <div
                  key={j}
                  className="w-1.5 h-1.5 bg-amber-500/30 rounded-full"
                />
              ))}
            </div>
          </div>,
        );
        continue;
      }

      // dashed svg
      list.push(
        <div
          key={i}
          className="absolute opacity-20"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: 60,
            height: 60,
          }}
        >
          <svg viewBox="0 0 100 100" className="text-amber-500">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        </div>,
      );
    }

    return list;
  }, [count]);

  return <div className="pointer-events-none absolute inset-0">{items}</div>;
};
