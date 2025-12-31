import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Trash2, Edit2 } from "lucide-react";

const CATEGORIES = ["Ana Yemekler", "Çorbalar", "İçecekler", "Tatlılar"];

export default function AdminMenuPage() {
  const { data: menuItems, isLoading, refetch } = trpc.admin.menu.list.useQuery();
  const createMutation = trpc.admin.menu.create.useMutation();
  const updateMutation = trpc.admin.menu.update.useMutation();
  const deleteMutation = trpc.admin.menu.delete.useMutation();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Ana Yemekler",
    price: "",
  });

  const handleAddItem = async () => {
    if (!formData.name || !formData.price || !formData.category) {
      toast.error("Lütfen tüm zorunlu alanları doldurunuz");
      return;
    }

    try {
      await createMutation.mutateAsync({
        name: formData.name,
        description: formData.description,
        category: formData.category,
        price: parseInt(formData.price),
      });
      toast.success("Menü öğesi başarıyla eklendi");
      setFormData({ name: "", description: "", category: "Ana Yemekler", price: "" });
      refetch();
    } catch (error) {
      toast.error("Menü öğesi eklenirken hata oluştu");
    }
  };

  const handleDeleteItem = async (id: number) => {
    try {
      await deleteMutation.mutateAsync({ id });
      toast.success("Menü öğesi başarıyla silindi");
      refetch();
    } catch (error) {
      toast.error("Menü öğesi silinirken hata oluştu");
    }
  };

  return (
    <div className="space-y-6">
      {/* Add New Item Form */}
      <Card>
        <CardHeader>
          <CardTitle>Yeni Menü Öğesi Ekle</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Ürün Adı *</Label>
              <Input
                id="name"
                placeholder="Örn: Odun Köfte"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="category">Kategori *</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger id="category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="description">Açıklama</Label>
            <Input
              id="description"
              placeholder="Ürün açıklaması"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="price">Fiyat (TL) *</Label>
            <Input
              id="price"
              type="number"
              placeholder="0"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>
          <Button onClick={handleAddItem} disabled={createMutation.isPending}>
            {createMutation.isPending ? <Loader2 className="animate-spin mr-2" size={16} /> : null}
            Ekle
          </Button>
        </CardContent>
      </Card>

      {/* Menu Items List */}
      <Card>
        <CardHeader>
          <CardTitle>Menü Öğeleri</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="animate-spin" size={32} />
            </div>
          ) : !menuItems || menuItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Henüz menü öğesi eklenmemiş</p>
          ) : (
            <div className="space-y-3">
              {menuItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex gap-4 mt-2 text-sm">
                      <span className="text-primary font-semibold">₺{item.price}</span>
                      <span className="text-muted-foreground">{item.category}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit2 size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteItem(item.id)}
                      disabled={deleteMutation.isPending}
                    >
                      <Trash2 size={16} className="text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
