"use client";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export default function FilterInput({ value, onChange }: Props) {
  return (
    <div className="rounded-xl bg-white/80 backdrop-blur p-4 shadow-sm border border-white/40 flex items-center gap-4">
      <span className="text-sm font-medium text-slate-700">
        Minimum Sales
      </span>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        placeholder="Enter amount"
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
