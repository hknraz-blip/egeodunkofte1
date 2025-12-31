import { useAuth } from "@/_core/hooks/useAuth";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { Loader2, AlertCircle } from "lucide-react";
import AdminMenuPage from "./admin/AdminMenuPage";
import AdminOrdersPage from "./admin/AdminOrdersPage";
import AdminReservationsPage from "./admin/AdminReservationsPage";

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const [, setLocation] = useLocation();

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="animate-spin" size={40} />
        </div>
      </DashboardLayout>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
                <div>
                  <h2 className="font-bold mb-2">Erişim Reddedildi</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Bu sayfaya erişmek için admin yetkisine sahip olmanız gerekir.
                  </p>
                  <Button onClick={() => setLocation("/")} variant="outline">
                    Ana Sayfaya Dön
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Paneli</h1>
          <p className="text-muted-foreground">Restoran yönetim paneline hoş geldiniz</p>
        </div>

        <Tabs defaultValue="menu" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="menu">Menü Yönetimi</TabsTrigger>
            <TabsTrigger value="orders">Siparişler</TabsTrigger>
            <TabsTrigger value="reservations">Rezervasyonlar</TabsTrigger>
          </TabsList>

          <TabsContent value="menu" className="space-y-4">
            <AdminMenuPage />
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <AdminOrdersPage />
          </TabsContent>

          <TabsContent value="reservations" className="space-y-4">
            <AdminReservationsPage />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
