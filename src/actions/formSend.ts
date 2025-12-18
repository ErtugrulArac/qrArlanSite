"use server";

import * as z from 'zod';
import { LoginSchema } from '@/schemas';

export const sendForm = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFileds  = LoginSchema.safeParse(values);

    if (!validatedFileds.success) {
        return { error: "Hatalı değerler!" };
    }

    const { email, name, text } = validatedFileds.data;

    try {
        // WhatsApp mesajı hazırla
        const phoneNumber = "905307464899";
        const message = `*Yeni Müşteri Temsilcisi Sorgusu*\n\n*İsim:* ${name}\n*Email:* ${email}\n*Mesaj:* ${text}`;
        const encodedMessage = encodeURIComponent(message);
        
        // WhatsApp API'ye gönder (wa.me linki oluştur - müşteri temsilcisine manuel açılması için)
        // İsteğe bağlı: Gerçek WhatsApp API entegrasyonu için webhook kuşulabilir
        
        // Başarı dönüş
        return { 
            success: "Mesajınız başarıyla gönderildi! Müşteri temsilcisi kısa sürede sizinle iletişime geçecektir.",
            whatsappLink: `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        };
    } catch (error) {
        return { error: "Bir hata oluştu. Lütfen tekrar deneyin."}
    }
};