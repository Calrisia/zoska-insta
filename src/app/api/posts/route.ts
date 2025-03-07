import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query"); // Extract the query parameter for searching posts

  try {
    const posts = await prisma.post.findMany({
      where: query
        ? {
            OR: [
              { caption: { contains: query, mode: "insensitive" } },
              { user: { name: { contains: query, mode: "insensitive" } } },
            ],
          }
        : undefined, // Fetch all posts if no query is provided
      select: {
        id: true,
        imageUrl: true,
        caption: true,
        user: {
          select: { name: true },
        },
      },
    });
    return NextResponse.json(posts); // Return the fetched posts as JSON
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

