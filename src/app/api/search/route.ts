import { getFilteredPosts } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") || "all";
    const sortBy = searchParams.get("sortBy") || "desc";
    const search = searchParams.get("search") || "";

    const posts = await getFilteredPosts(category, sortBy, search);

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching posts", error },
      { status: 500 }
    );
  }
}
