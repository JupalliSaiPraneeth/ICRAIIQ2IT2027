import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

const REQUIRED_STATEMENT =
  'The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.';

function createStaticServer(distDir) {
  return http.createServer((req, res) => {
    let filePath = path.join(distDir, req.url.split('?')[0]);
    if (filePath.endsWith('/') || !path.extname(filePath)) {
      if (fs.existsSync(path.join(filePath, 'index.html'))) {
        filePath = path.join(filePath, 'index.html');
      } else if (fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      } else {
        filePath = path.join(distDir, 'index.html');
      }
    }

    if (!fs.existsSync(filePath)) {
      filePath = path.join(distDir, 'index.html');
    }

    try {
      const content = fs.readFileSync(filePath);
      const ext = path.extname(filePath).toLowerCase();
      const contentTypes = {
        '.html': 'text/html; charset=utf-8',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
      };
      res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
      res.end(content);
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });
}

async function fetchHttp(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
      res.on('error', reject);
    });
  });
}

async function runLocalVerification() {
  console.log('=====================================================');
  console.log(' MICROSOFT CMT ACKNOWLEDGMENT VERIFICATION (LOCAL)');
  console.log('=====================================================\n');

  // 1. Static file check
  const cmtFile = path.join(DIST_DIR, 'cmt.html');
  if (!fs.existsSync(cmtFile)) {
    console.error('❌ FAIL: dist/cmt.html does not exist! Please run npm run build first.');
    process.exit(1);
  }
  console.log('✅ File dist/cmt.html exists in build output.');

  // 2. Start local HTTP server
  const server = createStaticServer(DIST_DIR);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  console.log(`✅ Temporary HTTP verification server listening on port ${port}.`);

  let allPassed = true;

  try {
    // 3. Test /cmt.html HTTP GET
    const targetUrl = `http://127.0.0.1:${port}/cmt.html`;
    console.log(`\nTesting HTTP GET ${targetUrl}...`);
    const resp = await fetchHttp(targetUrl);

    console.log(`   Response Status: ${resp.status}`);
    console.log(`   Content-Type: ${resp.headers['content-type']}`);

    if (resp.status !== 200) {
      console.error(`❌ FAIL: Expected HTTP 200, received ${resp.status}`);
      allPassed = false;
    } else {
      console.log('✅ HTTP Status 200 OK');
    }

    // Check exact text
    if (!resp.body.includes(REQUIRED_STATEMENT)) {
      console.error('❌ FAIL: Exact required acknowledgment text was NOT found in the HTTP response HTML!');
      allPassed = false;
    } else {
      console.log('✅ PASS: Exact required acknowledgment text matches 100% character-for-character:');
      console.log(`   "${REQUIRED_STATEMENT}"`);
    }

    // Check HTML <p> element
    const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/i;
    const match = resp.body.match(pRegex);
    if (match && match[1].includes(REQUIRED_STATEMENT)) {
      console.log('✅ PASS: Acknowledgment is properly nested in a standard HTML <p> element.');
    } else if (resp.body.includes(REQUIRED_STATEMENT)) {
      console.log('ℹ️ Note: Text found directly in HTML body.');
    }

    // Check charset UTF-8
    if (resp.body.includes('charset="UTF-8"') || resp.body.includes('charset=UTF-8')) {
      console.log('✅ PASS: UTF-8 character encoding specified.');
    } else {
      console.warn('⚠️ Warning: UTF-8 charset tag not explicitly detected.');
    }

    // 4. Test root / index.html HTTP GET
    console.log(`\nTesting HTTP GET http://127.0.0.1:${port}/ (root page)...`);
    const rootResp = await fetchHttp(`http://127.0.0.1:${port}/`);
    if (rootResp.body.includes(REQUIRED_STATEMENT)) {
      console.log('✅ PASS: Root HTML (index.html) also includes server-rendered fallback text in <noscript> tag.');
    } else {
      console.log('ℹ️ Root HTML does not contain raw text (standard for client-side SPA).');
    }
  } finally {
    server.close();
  }

  console.log('\n=====================================================');
  if (allPassed) {
    console.log('🎉 ALL LOCAL VERIFICATION CHECKS PASSED SUCCESSFULLY!');
    console.log('=====================================================\n');
    process.exit(0);
  } else {
    console.error('❌ ONE OR MORE VERIFICATION CHECKS FAILED.');
    console.log('=====================================================\n');
    process.exit(1);
  }
}

runLocalVerification();
