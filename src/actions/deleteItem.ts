"use server";

import { prisma } from '@/utils/connect';

export const deleteItem = async (id: string) => {
    prisma.message.delete({
        where: {
            id
        }
    });
}