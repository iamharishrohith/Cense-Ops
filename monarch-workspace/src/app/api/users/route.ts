import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    // In a real Identity Provider, we would validate the Authorization: Bearer token here.
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer auth_mnrch_')) {
        return NextResponse.json({ error: 'Unauthorized Access. Invalid OAuth 2.0 Bearer Token.' }, { status: 401 });
    }

    // Return the Monarchs User Directory Payload
    const directory = [
        {
            id: "usr_mnrch_001",
            name: "Arya Stark",
            email: "arya.s@monarchs.io",
            department: "Engineering",
            role: "Senior Full Stack Developer",
            lastActive: new Date().toISOString()
        },
        {
            id: "usr_mnrch_002",
            name: "John Snow",
            email: "j.snow@monarchs.io",
            department: "Product",
            role: "Product Manager",
            lastActive: new Date().toISOString()
        },
        {
            id: "usr_mnrch_003",
            name: "Daenerys T",
            email: "daenerys@monarchs.io",
            department: "Executive",
            role: "Chief Executive Officer",
            lastActive: new Date(Date.now() - 86400000 * 2).toISOString()
        },
        {
            id: "usr_mnrch_004",
            name: "Tyrion L",
            email: "tyrion@monarchs.io",
            department: "Finance",
            role: "VP of Finance",
            lastActive: new Date().toISOString()
        },
        {
            id: "usr_mnrch_005",
            name: "Cersei L",
            email: "cersei.l@monarchs.io",
            department: "HR",
            role: "HR Director",
            lastActive: new Date().toISOString()
        },
        {
            id: "usr_mnrch_006",
            name: "Sansa Stark",
            email: "sansa@monarchs.io",
            department: "Marketing",
            role: "Marketing Manager",
            lastActive: new Date(Date.now() - 86400000 * 5).toISOString()
        },
        {
            id: "usr_mnrch_007",
            name: "Bran Stark",
            email: "bran.backend@monarchs.io",
            department: "Engineering",
            role: "Backend Architect",
            lastActive: new Date().toISOString()
        },
        {
            id: "usr_mnrch_008",
            name: "Jaime L",
            email: "jaime.sales@monarchs.io",
            department: "Sales",
            role: "Account Executive",
            lastActive: new Date().toISOString()
        }
    ];

    return NextResponse.json(directory, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}

export async function OPTIONS() {
    return NextResponse.json({}, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}
