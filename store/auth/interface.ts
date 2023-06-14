export interface AuthState {
  status?: string;
  uid?: string | null;
  email?: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  role?: string | null 
  errorMessage?: string | null;
  registerErrorMessage? :string | null;
  token?: string | null;
  ok?: boolean
}