import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

type Order = {
  id: number;
  customerName: string;
  total: number;
  status: "hazirlaniyor" | "teslim-edildi" | "iptal";
  items: string[];
};

const DEFAULT_ORDERS: Order[] = [
  {
    id: 101,
    customerName: "Ahmet Yılmaz",
    total: 420,
    status: "hazirlaniyor",
    items: ["Odun Köfte", "Ayran"],
  },
  {
    id: 102,
    customerName: "Deniz Kaya",
    total: 310,
    status: "teslim-edildi",
    items: ["Köfte Dürüm", "Şalgam"],
  },
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>(DEFAULT_ORDERS);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const handleStatusChange = (orderId: number, status: Order["status"]) => {
    setUpdatingId(orderId);
    setOrders((prev) => prev.map((order) => (order.id === orderId ? { ...order, status } : order)));
    toast.success("Sipariş durumu güncellendi");
    setUpdatingId(null);
  };

  if (!orders?.length) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          Henüz sipariş bulunmuyor
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {orders.map((order) => (
        <Card key={order.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Sipariş #{order.id}</CardTitle>
                <p className="text-muted-foreground">{order.customerName}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Toplam</p>
                <p className="text-lg font-semibold">₺{order.total}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Ürünler</p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                {order.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Durum</p>
              <Select
                value={order.status}
                onValueChange={(value) => handleStatusChange(order.id, value as Order["status"])}
                disabled={updatingId === order.id}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hazirlaniyor">Hazırlanıyor</SelectItem>
                  <SelectItem value="teslim-edildi">Teslim Edildi</SelectItem>
                  <SelectItem value="iptal">İptal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="secondary" className="w-full" disabled={updatingId === order.id}>
              {updatingId === order.id ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="animate-spin" size={16} /> Kaydediliyor
                </span>
              ) : (
                "Durumu Güncelle"
              )}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
