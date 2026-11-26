
import { Card, CardContent } from "@/components/ui/card";

export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
  color,
}) {
  return (
    <Card className="border-0 shadow-sm rounded-2xl">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">
              {title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {value}
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              {description}
            </p>
          </div>

          <div className={`p-3 rounded-xl ${color}`}>
            <Icon size={24} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
