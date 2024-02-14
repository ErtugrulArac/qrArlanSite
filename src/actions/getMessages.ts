"use server";

import { prisma } from '@/utils/connect';

export const getMessage = async () => {
    const data = prisma.message.findMany();
    return data;
}