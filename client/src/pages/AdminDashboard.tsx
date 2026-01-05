import { useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import DashboardLayout from "@/components/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminMenuPage from "./admin/AdminMenuPage";
import AdminOrdersPage from "./admin/AdminOrdersPage";
import AdminReservationsPage from "./admin/AdminReservationsPage";

export default function AdminDashboard() {
  const { user, setUser } = useAuth();

  useEffect(() => {
    if (!user) {
      setUser({ id: "demo-admin", name: "Ege Odun Köfte", role: "admin" });
    }
  }, [setUser, user]);

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
