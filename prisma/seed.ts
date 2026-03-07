import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const defaultPricingModules = [
  // Medical System Modules - النظام الطبي
  { name: "تسجيل الدخول والصلاحيات", price: 500, systemType: "medical" },
  { name: "لوحة التحكم الرئيسية", price: 400, systemType: "medical" },
  { name: "التقارير والإحصائيات", price: 350, systemType: "medical" },
  { name: "الإشعارات والتنبيهات", price: 250, systemType: "medical" },
  { name: "إدارة المرضى", price: 600, systemType: "medical" },
  { name: "حجز المواعيد", price: 450, systemType: "medical" },
  { name: "السجلات الطبية", price: 550, systemType: "medical" },
  { name: "الفواتير والمحاسبة", price: 400, systemType: "medical" },

  // Restaurant System Modules - نظام المطاعم
  { name: "تسجيل الدخول والصلاحيات", price: 500, systemType: "restaurant" },
  { name: "لوحة التحكم الرئيسية", price: 400, systemType: "restaurant" },
  { name: "التقارير والإحصائيات", price: 350, systemType: "restaurant" },
  { name: "الإشعارات والتنبيهات", price: 250, systemType: "restaurant" },
  { name: "إدارة الطلبات", price: 500, systemType: "restaurant" },
  { name: "إدارة قائمة الطعام", price: 400, systemType: "restaurant" },
  { name: "حجز الطاولات", price: 350, systemType: "restaurant" },
  { name: "شاشة المطبخ", price: 450, systemType: "restaurant" },

  // School System Modules - نظام المدارس
  { name: "تسجيل الدخول والصلاحيات", price: 500, systemType: "school" },
  { name: "لوحة التحكم الرئيسية", price: 400, systemType: "school" },
  { name: "التقارير والإحصائيات", price: 350, systemType: "school" },
  { name: "الإشعارات والتنبيهات", price: 250, systemType: "school" },
  { name: "إدارة الطلاب", price: 550, systemType: "school" },
  { name: "تتبع الحضور والغياب", price: 400, systemType: "school" },
  { name: "سجل الدرجات", price: 450, systemType: "school" },
  { name: "إدارة الرسوم الدراسية", price: 400, systemType: "school" },

  // Internet Users Management - إدارة مستخدمي الإنترنت
  { name: "تسجيل الدخول والصلاحيات", price: 500, systemType: "internet_users" },
  { name: "لوحة التحكم الرئيسية", price: 400, systemType: "internet_users" },
  { name: "التقارير والإحصائيات", price: 350, systemType: "internet_users" },
  { name: "الإشعارات والتنبيهات", price: 250, systemType: "internet_users" },
  { name: "إدارة الاشتراكات", price: 500, systemType: "internet_users" },
  { name: "إدارة الباقات", price: 400, systemType: "internet_users" },
  { name: "الفواتير والدفع", price: 350, systemType: "internet_users" },
  { name: "تتبع الاستخدام", price: 450, systemType: "internet_users" },

  // Custom System Modules - نظام مخصص
  { name: "تسجيل الدخول والصلاحيات", price: 500, systemType: "custom" },
  { name: "لوحة التحكم الرئيسية", price: 400, systemType: "custom" },
  { name: "التقارير والإحصائيات", price: 350, systemType: "custom" },
  { name: "الإشعارات والتنبيهات", price: 250, systemType: "custom" },
  { name: "موديول مخصص 1", price: 500, systemType: "custom" },
  { name: "موديول مخصص 2", price: 500, systemType: "custom" },
  { name: "موديول مخصص 3", price: 500, systemType: "custom" },
  { name: "ربط مع أنظمة خارجية", price: 600, systemType: "custom" },
];

async function main() {
  console.log("Starting seed...");

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || "admin@Mohammed Qassim.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "Admin@123456";
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: "Admin",
        role: "admin",
      },
    });
    console.log("Admin user created:", adminEmail);
  } else {
    console.log("Admin user already exists");
  }

  // create additional admin account if requested
  const extraEmail = process.env.EXTRA_ADMIN_EMAIL || "atfsucy.com@gmail.com";
  const extraPassword = process.env.EXTRA_ADMIN_PASSWORD || "8mk82001";
  if (extraEmail) {
    const existingExtra = await prisma.user.findUnique({
      where: { email: extraEmail },
    });
    if (!existingExtra) {
      const extraHashed = await bcrypt.hash(extraPassword, 12);
      await prisma.user.create({
        data: {
          email: extraEmail,
          password: extraHashed,
          name: "Admin",
          role: "admin",
        },
      });
      console.log("Additional admin user created:", extraEmail);
    } else {
      console.log("Additional admin user already exists:", extraEmail);
    }
  }

  // Create pricing modules
  for (const module of defaultPricingModules) {
    const existing = await prisma.pricingModule.findFirst({
      where: {
        name: module.name,
        systemType: module.systemType,
      },
    });

    if (!existing) {
      await prisma.pricingModule.create({
        data: {
          name: module.name,
          price: module.price,
          systemType: module.systemType,
          isActive: true,
        },
      });
      console.log(
        `Created pricing module: ${module.name} (${module.systemType})`
      );
    }
  }

  console.log("Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
