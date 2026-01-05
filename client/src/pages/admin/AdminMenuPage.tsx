import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Trash2, Edit2 } from "lucide-react";

const CATEGORIES = ["Ana Yemekler", "Çorbalar", "İçecekler", "Tatlılar"] as const;

type Category = (typeof CATEGORIES)[number];

type MenuItem = {
  id: number;
  name: string;
  description: string;
  category: Category;
  price: number;
};

const DEFAULT_MENU: MenuItem[] = [
  {
    id: 1,
    name: "Odun Köfte",
    description: "Özel baharatlarla hazırlanan ızgara köfte",
    category: "Ana Yemekler",
    price: 280,
  },
  {
    id: 2,
    name: "Közlenmiş Biber",
    description: "Izgarada közlenmiş taze biber",
    category: "Tatlılar",
    price: 65,
  },
  {
    id: 3,
    name: "Ayran",
    description: "Geleneksel ev yapımı ayran",
    category: "İçecekler",
    price: 35,
  },
];

export default function AdminMenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(DEFAULT_MENU);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Ana Yemekler" as Category,
    price: "",
  });

  const handleAddItem = () => {
    if (!formData.name || !formData.price || !formData.category) {
      toast.error("Lütfen tüm zorunlu alanları doldurunuz");
      return;
    }

    const newItem: MenuItem = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      category: formData.category,
      price: parseInt(formData.price, 10),
    };

    setMenuItems((prev) => [...prev, newItem]);
    toast.success("Menü öğesi başarıyla eklendi");
    setFormData({ name: "", description: "", category: "Ana Yemekler", price: "" });
  };

  const handleDeleteItem = (id: number) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("Menü öğesi başarıyla silindi");
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
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value as Category })}>
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
          <Button onClick={handleAddItem}>Ekle</Button>
        </CardContent>
      </Card>

      {/* Menu Items List */}
      <Card>
        <CardHeader>
          <CardTitle>Menü Öğeleri</CardTitle>
        </CardHeader>
        <CardContent>
          {menuItems.length === 0 ? (
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
                    <Button variant="ghost" size="sm" onClick={() => handleDeleteItem(item.id)}>
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
