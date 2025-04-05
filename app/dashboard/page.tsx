import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium leading-none tracking-tight">Welcome to your Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This is your main dashboard page. Select an option from the sidebar to navigate.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}