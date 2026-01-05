import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

type Reservation = {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  status: "beklemede" | "onaylandi" | "iptal";
};

const DEFAULT_RESERVATIONS: Reservation[] = [
  {
    id: 501,
    name: "Elif Arslan",
    phone: "0500 111 22 33",
    date: "2024-12-01",
    time: "19:30",
    guests: 4,
    status: "onaylandi",
  },
  {
    id: 502,
    name: "Kerem Baş",
    phone: "0500 444 55 66",
    date: "2024-12-02",
    time: "20:00",
    guests: 2,
    status: "beklemede",
  },
];

export default function AdminReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[]>(DEFAULT_RESERVATIONS);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const handleStatusChange = (id: number, status: Reservation["status"]) => {
    setUpdatingId(id);
    setReservations((prev) => prev.map((res) => (res.id === id ? { ...res, status } : res)));
    toast.success("Rezervasyon durumu güncellendi");
    setUpdatingId(null);
  };

  if (!reservations?.length) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          Henüz rezervasyon bulunmuyor
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {reservations.map((reservation) => (
        <Card key={reservation.id}>
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle>{reservation.name}</CardTitle>
              <p className="text-muted-foreground">{reservation.phone}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">
                {reservation.date} - {reservation.time}
              </p>
              <p className="text-muted-foreground text-sm">{reservation.guests} kişilik</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Durum</p>
              <Select
                value={reservation.status}
                onValueChange={(value) => handleStatusChange(reservation.id, value as Reservation["status"])}
                disabled={updatingId === reservation.id}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beklemede">Beklemede</SelectItem>
                  <SelectItem value="onaylandi">Onaylandı</SelectItem>
                  <SelectItem value="iptal">İptal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="secondary" className="w-full" disabled={updatingId === reservation.id}>
              {updatingId === reservation.id ? (
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
