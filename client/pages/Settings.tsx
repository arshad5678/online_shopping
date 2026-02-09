import { useAuth } from "@/hooks/useAuth";

export default function Settings() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="max-w-xl mx-auto mt-16 p-8 bg-card rounded-xl shadow text-center">
        <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
        <p className="text-muted-foreground">You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-card rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Account Details</h2>
      <div className="space-y-4">
        <div>
          <span className="block text-muted-foreground text-xs mb-1">Name</span>
          <span className="block text-lg font-medium">{user.name}</span>
        </div>
        <div>
          <span className="block text-muted-foreground text-xs mb-1">Email</span>
          <span className="block text-lg font-medium">{user.email}</span>
        </div>
        <div>
          <span className="block text-muted-foreground text-xs mb-1">User ID</span>
          <span className="block text-lg font-mono">{user.id}</span>
        </div>
        <div>
          <span className="block text-muted-foreground text-xs mb-1">Joined</span>
          <span className="block text-lg">{new Date(user.createdAt).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
