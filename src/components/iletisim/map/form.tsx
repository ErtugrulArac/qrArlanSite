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
            {success ? (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className='bg-gradient-to-br from-green-500 to-emerald-600 w-[90%] sm:w-[50%] font-semibold text-white p-6 rounded-xl text-center shadow-2xl border border-green-400/30 animate-in fade-in zoom-in duration-300'>
                        <div className='flex justify-center mb-3'>
                            <div className='bg-white/20 rounded-full p-3'>
                                <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'></path>
                                </svg>
                            </div>
                        </div>
                        <p className='text-lg font-semibold'>Mesajınız başarıyla gönderildi!</p>
                        <p className='text-sm text-white/90 mt-2'>Müşteri temsilcisi kısa sürede sizinle WhatsApp üzerinden iletişime geçecektir.</p>
                    </div>
                </div>
            ) : (
                <div className='rounded-2xl gap-8 flex flex-col text-white px-6 sm:px-12 lg:px-20 py-8 sm:py-10 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50'>
                    <div className='space-y-2'>
                        <h3 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent'>Müşteri Temsilcisi</h3>
                        <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>Formu doldurun, ekibimiz size WhatsApp üzerinden kısa sürede dönüş yapacaktır.</p>
                    </div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='space-y-5'
                        >
                            <div className='space-y-5'>
                                <FormField
                                    control={form.control}
                                    name='name'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-sm font-semibold text-gray-200'>İsim Soyisim</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className='py-3 px-4 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 focus:bg-slate-700/80 placeholder:text-gray-400 placeholder:opacity-70 transition-all duration-200'
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder='Ahmet Teke'
                                                    type='text'
                                                />
                                            </FormControl>
                                            <FormMessage className='text-red-400 text-sm' />
                                        </FormItem>
                                    )} />
                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-sm font-semibold text-gray-200'>Email Adresi</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className='py-3 px-4 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 focus:bg-slate-700/80 placeholder:text-gray-400 placeholder:opacity-70 transition-all duration-200'
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder='ahmet.teke@example.com'
                                                    type='email'
                                                    autoComplete='email'
                                                />
                                            </FormControl>
                                            <FormMessage className='text-red-400 text-sm' />
                                        </FormItem>
                                    )} />
                                <FormField
                                    control={form.control}
                                    name='text'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-sm font-semibold text-gray-200'>Mesajınız</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    className='py-3 px-4 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 focus:bg-slate-700/80 placeholder:text-gray-400 placeholder:opacity-70 transition-all duration-200 resize-none min-h-[120px]'
                                                    disabled={isPending}
                                                    placeholder='Detaylı mesajınızı buraya yazınız...'
                                                />
                                            </FormControl>
                                            <FormMessage className='text-red-400 text-sm' />
                                        </FormItem>
                                    )} />
                            </div>
                            {error && (
                                <div className='bg-red-500/15 border border-red-500/50 text-red-300 w-full p-3 sm:p-4 rounded-lg text-sm sm:text-base text-center'>
                                    {error}
                                </div>
                            )}
                            <button 
                                type='submit'
                                disabled={isPending}
                                className='w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-3 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20'
                            >
                                <span>{isPending ? 'Gönderiliyor...' : 'Mesajı Gönder'}</span>
                                {!isPending && (
                                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                                    </svg>
                                )}
                            </button>
                        </form>
                    </Form>
                </div>
            )}
        </>
    )
}

export default page