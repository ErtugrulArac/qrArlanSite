import { NextResponse } from "next/server";
import { prisma } from "../../../utils/connect";


export const dynamic = 'force-dynamic';

export const GET = async () => {
    try {
        const products = await prisma.message.findMany();
        return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (err) {
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }),
            { status: 500 }
        );
    }
}