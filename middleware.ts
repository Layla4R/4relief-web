import { NextRequest, NextResponse } from 'next/server';
import { isSupported, defaultLocale } from './i18n/routing';

// Middleware: determines locale from the first path segment.
// If no locale segment is present, redirect to the same URL prefixed with the default locale.
export function middleware(req: NextRequest) {
	const pathname = req.nextUrl.pathname; // e.g. /en/about or /about
	const parts = pathname.split('/');
	const maybeLocale = parts[1];

	if (isSupported(maybeLocale)) {
		// Let request continue — set a response header to communicate locale to downstream code if needed
		const res = NextResponse.next();
		res.headers.set('x-next-locale', maybeLocale);
		return res;
	}

	// No locale in URL — redirect to default locale
	const url = req.nextUrl.clone();
	url.pathname = `/${defaultLocale}${pathname}`;
	return NextResponse.redirect(url);
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

