import { AuthRegister } from "@/components/auth";
import { AppLayout } from "@/components/layout";

export default function RegisterPage() {
  return (
    <AppLayout title={""} pageDescription={""}>
      <AuthRegister />
    </AppLayout>
  );
}
