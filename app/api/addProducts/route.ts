import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, quantity, price } = await request.json();
  try {
    const product = await prisma.product.create({
      data: {
        name,
        quantity,
        price,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "erreur lors de la creation du produit" },
      { status: 500 }
    );
  }
}
