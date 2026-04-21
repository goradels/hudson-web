import { Resend } from "resend";

const resend = new Resend("re_ajLp7bXq_CMnVUWtcytJemufYngfEYNX3");

const FROM_ADDRESS = "Hudson Web Group <hello@hudsonwebgroup.com>";
const OWNER_EMAIL = "gadelson1126@gmail.com";

function ownerEmailHtml(data: {
  name: string;
  businessName: string;
  email: string;
  message: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Lead</title>
</head>
<body style="margin:0;padding:0;background:#f2f0ec;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f0ec;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#b8903a 0%,#8a6820 100%);border-radius:12px 12px 0 0;padding:36px 40px;text-align:center;">
              <p style="margin:0 0 6px 0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.7);font-weight:600;">Hudson Web Group</p>
              <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.03em;line-height:1.2;">New Lead Inquiry</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px 40px 32px;border-left:1px solid rgba(0,0,0,0.07);border-right:1px solid rgba(0,0,0,0.07);">
              <p style="margin:0 0 28px;font-size:15px;color:rgba(17,17,17,0.55);line-height:1.6;">
                You've received a new inquiry. Here are the details:
              </p>

              <!-- Info rows -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 0 16px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafaf8;border:1px solid rgba(0,0,0,0.07);border-radius:8px;overflow:hidden;">
                      <tr>
                        <td style="padding:14px 20px;width:140px;vertical-align:top;">
                          <p style="margin:0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#b8903a;font-weight:700;">Name</p>
                        </td>
                        <td style="padding:14px 20px;border-left:1px solid rgba(0,0,0,0.06);vertical-align:top;">
                          <p style="margin:0;font-size:15px;color:#111111;font-weight:500;">${
                            data.name
                          }</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 16px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafaf8;border:1px solid rgba(0,0,0,0.07);border-radius:8px;overflow:hidden;">
                      <tr>
                        <td style="padding:14px 20px;width:140px;vertical-align:top;">
                          <p style="margin:0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#b8903a;font-weight:700;">Business</p>
                        </td>
                        <td style="padding:14px 20px;border-left:1px solid rgba(0,0,0,0.06);vertical-align:top;">
                          <p style="margin:0;font-size:15px;color:#111111;font-weight:500;">${
                            data.businessName
                          }</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 16px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafaf8;border:1px solid rgba(0,0,0,0.07);border-radius:8px;overflow:hidden;">
                      <tr>
                        <td style="padding:14px 20px;width:140px;vertical-align:top;">
                          <p style="margin:0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#b8903a;font-weight:700;">Email</p>
                        </td>
                        <td style="padding:14px 20px;border-left:1px solid rgba(0,0,0,0.06);vertical-align:top;">
                          <a href="mailto:${
                            data.email
                          }" style="margin:0;font-size:15px;color:#b8903a;font-weight:500;text-decoration:none;">${
    data.email
  }</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafaf8;border:1px solid rgba(0,0,0,0.07);border-radius:8px;overflow:hidden;">
                      <tr>
                        <td style="padding:14px 20px;width:140px;vertical-align:top;">
                          <p style="margin:0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#b8903a;font-weight:700;">Message</p>
                        </td>
                        <td style="padding:14px 20px;border-left:1px solid rgba(0,0,0,0.06);vertical-align:top;">
                          <p style="margin:0;font-size:15px;color:#111111;line-height:1.65;">${data.message.replace(
                            /\n/g,
                            "<br/>"
                          )}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background:#ffffff;padding:0 40px 40px;border-left:1px solid rgba(0,0,0,0.07);border-right:1px solid rgba(0,0,0,0.07);">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(135deg,#b8903a 0%,#8a6820 100%);border-radius:8px;">
                    <a href="mailto:${
                      data.email
                    }" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.01em;">
                      Reply to ${data.name} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f2f0ec;border:1px solid rgba(0,0,0,0.07);border-top:none;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:rgba(17,17,17,0.35);">
                &copy; ${new Date().getFullYear()} Hudson Web Group &bull; This notification was sent to ${OWNER_EMAIL}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function leadEmailHtml(data: { name: string; businessName: string }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Congrats on Starting Your Journey</title>
</head>
<body style="margin:0;padding:0;background:#f2f0ec;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f0ec;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Hero banner -->
          <tr>
            <td style="background:linear-gradient(135deg,#b8903a 0%,#8a6820 100%);border-radius:12px 12px 0 0;padding:56px 40px 48px;text-align:center;">
              <p style="margin:0 0 16px 0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.65);font-weight:600;">Hudson Web Group</p>
              <h1 style="margin:0 0 8px;font-size:13px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.75);font-weight:600;">Congratulations</h1>
              <h2 style="margin:0;font-size:36px;font-weight:900;color:#ffffff;letter-spacing:-0.04em;line-height:1.1;">
                You&rsquo;ve Started<br/>Your Journey.
              </h2>
              <div style="margin:28px auto 0;width:48px;height:3px;background:rgba(255,255,255,0.35);border-radius:2px;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:44px 40px 36px;border-left:1px solid rgba(0,0,0,0.07);border-right:1px solid rgba(0,0,0,0.07);">
              <p style="margin:0 0 20px;font-size:22px;font-weight:800;color:#111111;letter-spacing:-0.02em;line-height:1.25;">
                Hi ${data.name} &mdash; welcome to the team.
              </p>
              <p style="margin:0 0 20px;font-size:15px;color:rgba(17,17,17,0.6);line-height:1.75;">
                We received your message and we&rsquo;re genuinely excited about what&rsquo;s ahead for <strong style="color:#111111;font-weight:700;">${
                  data.businessName
                }</strong>. Great businesses are built on bold decisions &mdash; and reaching out is the first one.
              </p>
              <p style="margin:0 0 32px;font-size:15px;color:rgba(17,17,17,0.6);line-height:1.75;">
                One of our strategists will be in touch with you <strong style="color:#111111;font-weight:700;">within 1 business day</strong> to learn more about your goals and put together a tailored plan.
              </p>

              <!-- Highlight box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafaf8;border-left:3px solid #b8903a;border-radius:0 8px 8px 0;margin-bottom:32px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#b8903a;font-weight:700;">What happens next</p>
                    <p style="margin:0;font-size:14px;color:rgba(17,17,17,0.65);line-height:1.7;">
                      We&rsquo;ll review your message, research your business, and come prepared with real ideas &mdash; not a generic pitch.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:15px;color:rgba(17,17,17,0.6);line-height:1.75;">
                Thank you for trusting us with your growth. We take that seriously.<br/><br/>
                <strong style="color:#111111;font-weight:700;">— The Hudson Web Group Team</strong>
              </p>
            </td>
          </tr>

          <!-- Divider strip -->
          <tr>
            <td style="background:linear-gradient(135deg,#b8903a 0%,#8a6820 100%);height:4px;"></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f2f0ec;border:1px solid rgba(0,0,0,0.07);border-top:none;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:rgba(17,17,17,0.35);">
                &copy; ${new Date().getFullYear()} Hudson Web Group
              </p>
              <p style="margin:0;font-size:12px;color:rgba(17,17,17,0.3);">
                You received this email because you submitted a contact form on our website.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, email, message } = body as {
      name: string;
      businessName: string;
      email: string;
      message: string;
    };

    if (!name || !businessName || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const [ownerResult, leadResult] = await Promise.all([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: OWNER_EMAIL,
        subject: `New Lead: ${name} — ${businessName}`,
        html: ownerEmailHtml({ name, businessName, email, message }),
      }),
      resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: "Congrats on Starting Your Journey 🚀 — Hudson Web Group",
        html: leadEmailHtml({ name, businessName }),
      }),
    ]);

    if (ownerResult.error || leadResult.error) {
      console.error("Resend error:", ownerResult.error ?? leadResult.error);
      return Response.json({ error: "Failed to send email." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}
