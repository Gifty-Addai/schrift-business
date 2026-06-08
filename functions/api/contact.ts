interface Env {
    WEB3FORMS_ACCESS_KEY: string;
}

interface ContactPayload {
    name: string;
    email: string;
    project?: string;
    message: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const { request, env } = context;

    // CORS headers — tighten origin in production if needed
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Validate content type
    const contentType = request.headers.get('Content-Type') ?? '';
    if (!contentType.includes('application/json')) {
        return new Response(
            JSON.stringify({ success: false, message: 'Invalid content type.' }),
            { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
    }

    // Parse body
    let body: ContactPayload;
    try {
        body = await request.json<ContactPayload>();
    } catch {
        return new Response(
            JSON.stringify({ success: false, message: 'Invalid JSON body.' }),
            { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
    }

    const { name, email, project, message } = body;

    // Basic validation
    if (!name || !email || !message) {
        return new Response(
            JSON.stringify({ success: false, message: 'Name, email, and message are required.' }),
            { status: 422, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
    }

    // Retrieve secret from Cloudflare binding env
    const accessKey = env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
        console.error('WEB3FORMS_ACCESS_KEY binding is not set.');
        return new Response(
            JSON.stringify({ success: false, message: 'Server configuration error. Please try again later.' }),
            { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
    }

    // Forward to Web3Forms
    try {
        const w3fResponse = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
                access_key: accessKey,
                name,
                email,
                subject: `New SchriftFlow Inquiry from ${name}`,
                project_type: project || 'General Software Inquiry',
                message,
                from_name: 'SchriftFlow Contact Form',
            }),
        });

        const result = await w3fResponse.json<{ success: boolean; message?: string }>();

        if (result.success) {
            return new Response(
                JSON.stringify({ success: true }),
                { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
            );
        }

        console.error('Web3Forms returned failure:', result);
        return new Response(
            JSON.stringify({ success: false, message: result.message || 'Submission failed.' }),
            { status: 502, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
    } catch (err) {
        console.error('Network error contacting Web3Forms:', err);
        return new Response(
            JSON.stringify({ success: false, message: 'Network error. Please try again.' }),
            { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
    }
};

// Handle preflight OPTIONS requests
export const onRequestOptions: PagesFunction = async () => {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
};
