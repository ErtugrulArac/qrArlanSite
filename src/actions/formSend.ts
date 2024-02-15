"use server";

import * as z from 'zod';
import { LoginSchema } from '@/schemas';
import { prisma } from '@/utils/connect';

export const sendForm = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFileds  = LoginSchema.safeParse(values);

    if (!validatedFileds.success) {
        return { error: "Hatalı değerler!" };
    }

    const { email, name, text } = validatedFileds.data;

    const emailExits = await prisma.message.findFirst({
        where: {
            email
        }
    });

    if (emailExits) {
        return { error: "Bu email adresi ile daha önce mesaj gönderilmiş." };
    }

    try {
        await prisma.message.create({
            data: {
                email,
                name,
                text
            }
        });
        return { success: "Mesajınız başarıyla gönderildi." };
    } catch (error) {
        return { error: "Bir hata oluştu. Lütfen tekrar deneyin."}
    }
};