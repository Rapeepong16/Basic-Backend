// JavaScript
// Utilities
function json(res, status, data) {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}
function noContent(res) {
    res.writeHead(204);
    res.end();
}
function notFound(res, message = 'Not Found') {
    json(res, 404, { error: message });
}
function badRequest(res, message = 'Bad Request') {
    json(res, 400, { error: message });
}
function conflict(res, message = 'Conflict') {
    json(res, 409, { error: message });
}
function methodNotAllowed(res, message = 'Method Not Allowed') {
    json(res, 405, { error: message });
}
function unsupportedMediaType(res, message = 'Unsupported Media Type') {
    json(res, 415, { error: message });
}
function readBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.setEncoding('utf8');
        req.on('data', chunk => {
            body += chunk;
            if (body.length > 1e6) { // 1MB guard
                reject(new Error('Payload too large'));
                req.destroy();
            }
        });
        req.on('end', () => resolve(body));
        req.on('error', reject);
    });
}
async function parseBody(req) {
    const ct = (req.headers['content-type'] || '').toLowerCase();
    if (ct.includes('application/json')) {
        const raw = await readBody(req);
        try {
            return { type: 'json', data: raw ? JSON.parse(raw) : {} };
        } catch {
            throw new Error('Invalid JSON');
        }
    }
    if (ct.includes('application/x-www-form-urlencoded')) {
        const raw = await readBody(req);
        const params = new URLSearchParams(raw || '');
        const obj = {};
        for (const [k, v] of params) {
            if (k in obj) obj[k] = Array.isArray(obj[k]) ? [...obj[k], v] : [obj[k], v];
            else obj[k] = v;
        }
        return { type: 'form', data: obj };
    }
    if (!ct) {
        // ไม่มีบอดี้/ไม่มี content-type
        return { type: 'none', data: null };
    }
    throw new Error('UNSUPPORTED_CT');
}

module.exports = {
    json,
    noContent,
    notFound,
    badRequest,
    conflict,
    methodNotAllowed,
    unsupportedMediaType,
    readBody,
    parseBody
};