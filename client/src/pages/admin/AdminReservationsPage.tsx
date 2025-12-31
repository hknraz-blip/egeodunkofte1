import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { Loader2, Check, X } from "lucide-react";
import { toast } from "sonner";

const STATUS_LABELS: Record<string, string> = {
  pending: "Beklemede",
  confirmed: "Onaylandı",
  cancelled: "İptal Edildi",
  completed: "Tamamlandı",
};

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
  completed: "bg-blue-100 text-blue-800",
};

export default function AdminReservationsPage() {
  const { data: reservations, isLoading, refetch } = trpc.admin.reservations.list.useQuery();
  const updateStatusMutation = trpc.admin.reservations.updateStatus.useMutation();

  const handleStatusChange = async (reservationId: number, newStatus: string) => {
    try {
      await updateStatusMutation.mutateAsync({
        id: reservationId,
        status: newStatus as any,
      });
      toast.success("Rezervasyon durumu güncellendi");
      refetch();
    } catch (error) {
      toast.error("Rezervasyon durumu güncellenirken hata oluştu");
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Rezervasyonlar</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="animate-spin" size={32} />
            </div>
          ) : !reservations || reservations.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Henüz rezervasyon yok</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Müşteri</th>
                    <th className="text-left py-3 px-4">Telefon</th>
                    <th className="text-left py-3 px-4">Kişi Sayısı</th>
                    <th className="text-left py-3 px-4">Tarih/Saat</th>
                    <th className="text-left py-3 px-4">Durum</th>
                    <th className="text-left py-3 px-4">İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation) => (
                    <tr key={reservation.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">{reservation.customerName}</td>
                      <td className="py-3 px-4">{reservation.customerPhone}</td>
                      <td className="py-3 px-4">{reservation.guestCount} kişi</td>
                      <td className="py-3 px-4 text-xs">
                        {new Date(reservation.reservationDate).toLocaleDateString("tr-TR")} 
                        {" "}
                        {new Date(reservation.reservationDate).toLocaleTimeString("tr-TR", { 
                          hour: "2-digit", 
                          minute: "2-digit" 
                        })}
                      </td>
                      <td className="py-3 px-4">
                        <Select value={reservation.status} onValueChange={(value) => handleStatusChange(reservation.id, value)}>
                          <SelectTrigger className={`w-32 ${STATUS_COLORS[reservation.status]}`}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Beklemede</SelectItem>
                            <SelectItem value="confirmed">Onaylandı</SelectItem>
                            <SelectItem value="cancelled">İptal Edildi</SelectItem>
                            <SelectItem value="completed">Tamamlandı</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          {reservation.status === "pending" && (
                            <>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleStatusChange(reservation.id, "confirmed")}
                              >
                                <Check size={16} className="text-green-600" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleStatusChange(reservation.id, "cancelled")}
                              >
                                <X size={16} className="text-red-600" />
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
