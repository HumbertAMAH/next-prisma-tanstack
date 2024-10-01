import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createAt: "desc",
      },
    });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "erreur lors de la récupération des produits" },
      { status: 500 }
    );
  }
}
