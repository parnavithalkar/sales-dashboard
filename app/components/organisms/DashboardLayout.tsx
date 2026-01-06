export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-sky-100 to-green-100 p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <h1 className="text-2xl font-semibold text-slate-800">
          Sales Dashboard
        </h1>
        {children}
      </div>
    </div>
  );
}
