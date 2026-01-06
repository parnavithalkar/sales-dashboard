type Props = {
  year: string;
  value: number;
};

export default function SalesCard({ year, value }: Props) {
  return (
    <div className="rounded-xl bg-white/80 backdrop-blur p-5 shadow-sm border border-white/40">
      <h4 className="text-sm text-slate-500">{year}</h4>
      <p className="mt-2 text-2xl font-bold text-slate-900">
        ₹ {value.toLocaleString("en-IN")}
      </p>
    </div>
  );
}
