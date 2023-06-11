import { AuthLogin } from "@/components/auth";
import { AppLayout } from "@/components/layout";
export default function LoginPage() {
  return (
    <AppLayout title="Login" pageDescription="xxxxxxx">
      <AuthLogin />
    </AppLayout>
  );
}
