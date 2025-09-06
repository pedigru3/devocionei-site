import { NextResponse } from 'next/server';

export async function GET() {
  const aasaContent = {
    applinks: {
      apps: [],
      details: [
        {
          appID: "4Z7BL76UDA.com.sementedigital.devocioneiplus",
          paths: ["/joinGroup/*"]
        }
      ]
    }
  };

  return new NextResponse(JSON.stringify(aasaContent), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
} 