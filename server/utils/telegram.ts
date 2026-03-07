/**
 * Telegram Bot Notification Utility
 */

const BOT_TOKEN = "8687000340:AAEFcJ32Vg7pv--rtQt6pK5LPM3LARuD97c";
const CHAT_ID = "120677728"; // Your Telegram user ID from the getUpdates response

interface OrderData {
  id: string;
  clientName: string;
  email: string;
  whatsapp: string;
  systemType: string;
  description?: string;
  totalPrice: number;
  modules: Array<{ name: string; price: number }>;
}

/**
 * Send a notification to Telegram when a new order is received
 */
export async function sendNewOrderNotification(
  order: OrderData
): Promise<void> {
  try {
    const systemTypeAr: Record<string, string> = {
      medical: "النظام الطبي",
      restaurant: "نظام المطاعم",
      school: "نظام المدارس",
      custom: "نظام مخصص",
      internet_users: "إدارة مستخدمي الإنترنت",
    };

    const modulesList = order.modules.map((m) => `• ${m.name}`).join("\n");

    const message = `
🎉 *طلب جديد واصل!*

👤 *العميل:* ${order.clientName}
📧 *البريد:* ${order.email}
📱 *واتساب:* ${order.whatsapp}

🏗️ *نوع النظام:* ${systemTypeAr[order.systemType] || order.systemType}

📦 *الموديولات المختارة:*
${modulesList || "لا يوجد"}

💰 *السعر التقريبي:* $${order.totalPrice.toLocaleString()}

📝 *الوصف:*
${order.description || "لا يوجد وصف"}

🔗 *رقم الطلب:* ${order.id}
    `.trim();

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      console.error(
        "Failed to send Telegram notification:",
        await response.text()
      );
    }
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
  }
}
