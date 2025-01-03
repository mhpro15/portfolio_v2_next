import { Resend } from "resend";
import { ContactUsEmail } from "../../components/contact/contact-us";
import "dotenv/config";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  const payload = await req.json();
  console.log(payload);
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vulcansuna@gmail.com",
      subject: `${payload.email} Thank you for contacting us, ${payload.name}`,
      react: ContactUsEmail(payload),
    });

    if (error) {
      console.log(error);
      return Response.json({ error });
    }
    console.log(data);
    return Response.json({ data });
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
