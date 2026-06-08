/// <reference types="@cloudflare/workers-types" />

export interface Env {
    WEB3FORMS_ACCESS_KEY: string;
    TEAM_MEMBERS: string; // JSON array of team member objects
    ASSETS: Fetcher;
}

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

function json(body: object, status = 200): Response {
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
}

async function handleContact(request: Request, env: Env): Promise<Response> {
    const contentType = request.headers.get('Content-Type') ?? '';
    if (!contentType.includes('application/json')) {
        return json({ success: false, message: 'Invalid content type.' }, 400);
    }

    let body: { name?: string; email?: string; project?: string; message?: string };
    try {
        body = await request.json();
    } catch {
        return json({ success: false, message: 'Invalid JSON body.' }, 400);
    }

    const { name, email, project, message } = body;
    if (!name || !email || !message) {
        return json({ success: false, message: 'Name, email, and message are required.' }, 422);
    }

    if (!env.WEB3FORMS_ACCESS_KEY) {
        console.error('WEB3FORMS_ACCESS_KEY binding is not configured.');
        return json({ success: false, message: 'Server configuration error.' }, 500);
    }

    try {
        const resp = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
                access_key: env.WEB3FORMS_ACCESS_KEY,
                name,
                email,
                subject: `New SchriftFlow Inquiry from ${name}`,
                project_type: project ?? 'General Inquiry',
                message,
                from_name: 'SchriftFlow Contact Form',
            }),
        });

        const result = await resp.json<{ success: boolean; message?: string }>();
        if (result.success) {
            return json({ success: true });
        }
        return json({ success: false, message: result.message ?? 'Submission failed.' }, 502);
    } catch (err) {
        console.error('Web3Forms fetch error:', err);
        return json({ success: false, message: 'Network error. Please try again.' }, 500);
    }
}

function handleTeam(env: Env): Response {
    try {
        const members = JSON.parse(env.TEAM_MEMBERS || '[]');
        return new Response(JSON.stringify(members), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        });
    } catch {
        return new Response(JSON.stringify([]), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        });
    }
}

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        const { pathname } = new URL(request.url);
        const { method } = request;

        // Handle contact API route
        if (pathname === '/api/contact') {
            if (method === 'OPTIONS') {
                return new Response(null, { status: 204, headers: CORS_HEADERS });
            }
            if (method === 'POST') {
                return handleContact(request, env);
            }
            return new Response('Method Not Allowed', { status: 405 });
        }

        // Handle team API route
        if (pathname === '/api/team') {
            if (method === 'OPTIONS') {
                return new Response(null, { status: 204, headers: CORS_HEADERS });
            }
            return handleTeam(env);
        }

        // All other requests → serve static assets from dist/
        return env.ASSETS.fetch(request);
    },
} satisfies ExportedHandler<Env>;
