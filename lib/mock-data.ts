export type ShopIntegration = {
  shopName: string;
  region: string;
  status: "Connected" | "Disconnected";
  lastSyncTime: string;
};

export type DashboardStat = {
  title: string;
  value: string;
  helper: string;
  trend: string;
  tone: "success" | "info" | "neutral";
};

export type ProductRow = {
  productName: string;
  sku: string;
  stock: number;
  price: string;
  syncStatus: "Synced" | "Pending";
};

export type OrderRow = {
  orderId: string;
  customer: string;
  total: string;
  status: "Completed" | "Processing" | "Shipped" | "Pending";
  source: "Shopee";
};

export const dashboardStats: DashboardStat[] = [
  {
    title: "Connected Shops",
    value: "3",
    helper: "2 Shopee, 1 TikTok Shop",
    trend: "+1 this month",
    tone: "success",
  },
  {
    title: "Products Synced",
    value: "2,348",
    helper: "Updated 12 minutes ago",
    trend: "98.7% sync coverage",
    tone: "info",
  },
  {
    title: "Orders Synced",
    value: "426",
    helper: "Today",
    trend: "+14.2% vs yesterday",
    tone: "success",
  },
  {
    title: "Last Sync Status",
    value: "Success",
    helper: "All queues healthy",
    trend: "Avg latency 1.6s",
    tone: "neutral",
  },
];

export const shopeeIntegration: ShopIntegration = {
  shopName: "An Phuc Official Store",
  region: "Vietnam",
  status: "Connected",
  lastSyncTime: "2026-04-02 11:58 AM (GMT+7)",
};

export const mockProducts: ProductRow[] = [
  { productName: "Wireless Bluetooth Earbuds Pro", sku: "CF-EB-1001", stock: 124, price: "$39.90", syncStatus: "Synced" },
  { productName: "Portable Fast Charging Power Bank 20000mAh", sku: "CF-PB-2040", stock: 62, price: "$49.50", syncStatus: "Synced" },
  { productName: "Smart Home Wi-Fi LED Strip 5m", sku: "CF-LED-0512", stock: 87, price: "$24.99", syncStatus: "Pending" },
  { productName: "Mechanical Keyboard K87 RGB", sku: "CF-KB-8707", stock: 41, price: "$69.00", syncStatus: "Synced" },
  { productName: "Ergonomic Office Mouse M5", sku: "CF-MS-5019", stock: 153, price: "$21.90", syncStatus: "Synced" },
  { productName: "Laptop Stand Adjustable Aluminum", sku: "CF-LS-3302", stock: 96, price: "$32.50", syncStatus: "Synced" },
  { productName: "USB-C Hub 8-in-1", sku: "CF-HB-8108", stock: 58, price: "$44.00", syncStatus: "Pending" },
  { productName: "1080p Full HD Webcam", sku: "CF-WC-1099", stock: 73, price: "$36.75", syncStatus: "Synced" },
  { productName: "Noise Cancelling Headset H10", sku: "CF-HS-1010", stock: 39, price: "$79.90", syncStatus: "Synced" },
  { productName: "Desktop Cable Organizer Set", sku: "CF-CO-2201", stock: 210, price: "$12.40", syncStatus: "Synced" },
];

export const mockOrders: OrderRow[] = [
  { orderId: "SP-20260402-1001", customer: "Nguyen Minh Anh", total: "$88.40", status: "Completed", source: "Shopee" },
  { orderId: "SP-20260402-1002", customer: "Tran Bao Chau", total: "$24.99", status: "Processing", source: "Shopee" },
  { orderId: "SP-20260402-1003", customer: "Pham Duc Long", total: "$69.00", status: "Shipped", source: "Shopee" },
  { orderId: "SP-20260402-1004", customer: "Le Hoang Nam", total: "$44.00", status: "Pending", source: "Shopee" },
  { orderId: "SP-20260402-1005", customer: "Vo Thu Trang", total: "$119.80", status: "Completed", source: "Shopee" },
  { orderId: "SP-20260402-1006", customer: "Bui Gia Han", total: "$32.50", status: "Processing", source: "Shopee" },
  { orderId: "SP-20260402-1007", customer: "Doan Quang Huy", total: "$39.90", status: "Shipped", source: "Shopee" },
  { orderId: "SP-20260402-1008", customer: "Ngo Kim Ngan", total: "$71.49", status: "Completed", source: "Shopee" },
  { orderId: "SP-20260402-1009", customer: "Hoang Gia Bao", total: "$12.40", status: "Pending", source: "Shopee" },
  { orderId: "SP-20260402-1010", customer: "Mai Thanh Truc", total: "$53.89", status: "Processing", source: "Shopee" },
];
