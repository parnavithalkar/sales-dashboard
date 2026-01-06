type Props = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ value, onChange }: Props) {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder="Min sales"
      className="border p-2 rounded"
    />
  );
}
