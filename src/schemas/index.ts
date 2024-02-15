import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({ message: "Email hatalı." }
    ),
    name: z.string().min(1, { message: "İsim boş olamaz." }),
    text: z.string().min(1, { message: "Mesaj boş olamaz." })
});