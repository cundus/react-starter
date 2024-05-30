export const NAV_ITEM = [
   {
      name: "Dashboard",
      path: "/admin/dashboard",
   },
   {
      name: "Product",
      path: "/admin/product",
   },
   {
      name: "Pesanan",
      path: "/admin/order",
   },
   {
      name: "Setting",
      path: "#",
      children: [
         {
            name: "Atur Toko",
            path: "/admin/setting/store",
         },
         {
            name: "Pengiriman",
            path: "/admin/setting/delivery",
         },
         {
            name: "Metode Pembayaran",
            path: "/admin/setting/payment",
         },
      ],
   },
];
