"use client";

type Props = {
  type: string;
  setType: (type: string) => void;
};

export default function ChartToggle({ type, setType }: Props) {
  const styles =
    "px-4 py-2 rounded-lg text-sm font-medium transition";

  return (
    <div className="flex gap-2 bg-white/70 p-2 rounded-xl w-fit">
      {["line", "bar", "pie"].map((t) => (
        <button
          key={t}
          onClick={() => setType(t)}
          className={`${styles} ${
            type === t
              ? "bg-blue-600 text-white"
              : "bg-white text-slate-600 hover:bg-slate-100"
          }`}
        >
          {t.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
