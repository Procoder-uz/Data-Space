import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const courses = [
  "Frontend",
  "Backend (Python)",
  "Computer Science",
  "Office Pro",
  "IT Kids",
];

// =================================================================================
// !!! MUHIM: TELEGRAM BOT SOZLAMALARI !!!
// Quyidagi o'zgaruvchini o'zingizning bot ma'lumotlaringiz bilan almashtiring.
// Aks holda, arizalar sizga yetib kelmaydi.
// =================================================================================

/**
 * Bot otasi (@BotFather) tomonidan sizga berilgan unikal token.
 * Token to'g'ri ko'rsatilgan.
 */
const TELEGRAM_BOT_TOKEN = '8346687313:AAGmclNo3ZnMNq4fys_6hIMIE9ItgG0H3VE';

/**
 * Arizalar yuborilishi kerak bo'lgan chat ID'si.
 * @userinfobot orqali olingan shaxsiy ID yoki guruh ID'sini kiriting.
 *
 * QANDAY OLISH MUMKIN:
 * 1. Telegramda @userinfobot ga /start deb yozing -> u sizga SHAXSIY ID raqamingizni beradi.
 * 2. Yoki botni guruhga qo'shib, guruhda /my_id deb yozing -> u sizga GURUH ID'sini beradi (oldida '-' bo'ladi).
 */
const TELEGRAM_CHAT_ID = '5771317537'; // <-- BU YERNI O'ZGARTIRING

// =================================================================================
// SOZLAMALAR TUGADI
// =================================================================================


// --- Phone Number Formatting Utility ---
const formatPhoneNumber = (digits: string) => {
  let formatted = '+998';
  if (digits.length === 0) return formatted;
  
  formatted += ` (${digits.substring(0, 2)}`;
  
  if (digits.length > 2) {
    formatted += `) ${digits.substring(2, 5)}`;
  }
  if (digits.length > 5) {
    formatted += `-${digits.substring(5, 7)}`;
  }
  if (digits.length > 7) {
    formatted += `-${digits.substring(7, 9)}`;
  }
  return formatted;
};


const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '', // Will store raw digits only, e.g., "914977444"
    course: courses[0],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phoneNumber') {
        // Allow only digits and limit length
        const digits = value.replace(/\D/g, '');
        // Remove 998 prefix if it exists
        const phoneNumberWithoutCountryCode = digits.startsWith('998') ? digits.substring(3) : digits;
        setFormData(prev => ({ ...prev, phoneNumber: phoneNumberWithoutCountryCode.substring(0, 9) }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phoneNumber.length !== 9) {
        setError("Telefon raqamini to'liq kiriting.");
        return;
    }
    // FIX: Removed redundant check for Telegram chat ID configuration.
    // This check was causing a TypeScript error because the constant value was already set,
    // making the comparison with the placeholder always false.
    
    setIsLoading(true);
    setError(null);

    const messageText = `
*✨ Yangi Ariza - DATA SPACE!*

*👤 Ism, Familiya:* ${formData.fullName}
*📞 Telefon raqam:* +998${formData.phoneNumber}
*📚 Tanlangan kurs:* ${formData.course}
*💬 Qo'shimcha izoh:*
${formData.message || "Izoh qoldirilmagan"}
    `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: messageText,
                parse_mode: 'Markdown',
            }),
        });
        
        const result = await response.json();

        if (!response.ok || !result.ok) {
            throw new Error(result.description || "Telegramga yuborishda xatolik yuz berdi.");
        }

        setSubmitted(true);

    } catch (err: any) {
        console.error('Submission Error:', err);
        setError("Xatolik yuz berdi. Iltimos, ma'lumotlaringizni tekshiring yoki birozdan so'ng qayta urinib ko'ring.");
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">Kursga yozilish</h1>
          <p className="text-lg text-gray-300">
            O'zingizga mos kursni tanlang va kelajak kasbini biz bilan egallang!
          </p>
        </div>

        {submitted ? (
          <div className="mt-12 text-center bg-gray-800 p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-primary mb-4">So'rovingiz qabul qilindi!</h2>
            <p className="text-gray-200 text-lg mb-6">
              Kursga yozilish so'rovingiz yuborildi. Tez orada menejerlarimiz siz bilan bog'lanishadi.
            </p>
            <Link
              to="/"
              className="inline-block bg-primary text-dark font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors duration-300"
            >
              Bosh sahifaga qaytish
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-8 bg-gray-900 p-8 rounded-xl shadow-2xl">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                Ism, Familiya
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Abdulla Abdullayev"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-2">
                Telefon raqam
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                required
                autoComplete="tel"
                value={formatPhoneNumber(formData.phoneNumber)}
                onChange={handleChange}
                className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="+998 (XX) XXX-XX-XX"
              />
            </div>
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-2">
                Kursni tanlang
              </label>
              <select
                name="course"
                id="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors"
              >
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Qo'shimcha izoh (ixtiyoriy)
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Bu yerga xabaringizni yozishingiz mumkin..."
              />
            </div>
            
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-dark font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-wait"
              >
                {isLoading ? "Yuborilmoqda..." : "Ariza yuborish"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;