import { NextRequest, NextResponse } from "next/server";

export const config = { runtime: "edge", regions: ['fra1'] };

export default async function ArticleFunction(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if(request.method === "GET") return NextResponse.json('Ez egy cikk');
  return NextResponse.json('Method not allowed.');
}