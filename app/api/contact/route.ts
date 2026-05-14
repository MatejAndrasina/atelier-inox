import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { jmeno, email, telefon, zprava, typ } = body;

    if (!jmeno || !email) {
      return NextResponse.json({ error: 'Chybí povinné pole' }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Atelier Inox <noreply@atelier-inox.cz>',
        to: ['info@atelier-inox.cz'],
        replyTo: email,
        subject: `Nová poptávka od ${jmeno}`,
        html: `
          <h2>Nová poptávka z webu</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:6px 12px;font-weight:bold">Typ:</td><td style="padding:6px 12px">${typ}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">Jméno:</td><td style="padding:6px 12px">${jmeno}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">E-mail:</td><td style="padding:6px 12px">${email}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">Telefon:</td><td style="padding:6px 12px">${telefon || '—'}</td></tr>
          </table>
          <h3 style="margin-top:24px">Zpráva:</h3>
          <p style="white-space:pre-wrap">${zprava || '—'}</p>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Chyba serveru' }, { status: 500 });
  }
}
