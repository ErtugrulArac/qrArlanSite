"use client";

import { useForm } from 'react-hook-form';
import { useTransition, useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormLabel,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';

import { LoginSchema } from '@/schemas';
import { sendForm } from '@/actions/formSend';
import { Button } from '@/components/ui/button';

const page = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const localStorageKey = 'formSubmissionSuccess';

    useEffect(() => {
        // Sayfa yüklendiğinde localStorage'tan başarı durumunu kontrol edin
        const storedSuccess = localStorage.getItem(localStorageKey);
        if (storedSuccess) {
            setSuccess(storedSuccess);
            // localStorage'ta saklanan değeri sıfırlayın
        }
    }, []);

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            name: '',
            text: '',
        },
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            sendForm(values)
                .then((response) => {
                    if (response.error) {
                        setError(response.error);
                    } else {
                        setSuccess(response.success);
                        localStorage.setItem(localStorageKey, "true");
                    }
                })
        });
    }

    
    return (
        <>
            {success ? <div className='bg-green-500 w-[50%] m-auto font-semibold max-md:text-sm max-md:w-[70%] text-white p-3 rounded-lg text-center'>Mesajınız başarıyla gönderildi! Ekibimiz dönüş yapacaktır.</div> :
            <div className=' rounded-lg  gap-7 flex flex-col text-white px-20 max-md:px-2 max-md:py-3  max-md:mb-3'>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4'
                    >
                        <div className='space-y-4'>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>İsim</FormLabel>
                                        <FormControl>
                                            <Input
                                                className='py-5 placeholder:text-white placeholder:opacity-85'
                                                {...field}
                                                disabled={isPending}
                                                placeholder='ahmet teke'
                                                type='text'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                className='py-5 placeholder:text-white placeholder:opacity-85 bg-transparent'
                                                {...field}
                                                disabled={isPending}
                                                placeholder='ahmet.teke@example.com'
                                                type='email'
                                                autoComplete='email'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                control={form.control}
                                name='text'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mesajınız</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                className='py-5 placeholder:text-white placeholder:opacity-85'
                                                disabled={isPending}
                                                placeholder='Mesajınızı buraya yazınız..'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                        </div>
                        {error && <div className='bg-red-500 w-full p-3 rounded-lg text-center'>{error}</div>}
                        <Button className='w-full bg-white hover:bg-gray-300  text-black flex gap-3' disabled={isPending}>
                            Gönder <img className='size-6' src="send.svg" alt="mail qr menü" />
                        </Button>
                    </form>
                </Form>
            </div>
            }
        </>
    )
}

export default page