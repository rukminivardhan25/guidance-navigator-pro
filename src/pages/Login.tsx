import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Eye, EyeOff } from "lucide-react";
import Layout from "@/components/Layout/Layout";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const handleUserLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    console.log("User login:", { email: userEmail, password: userPassword });
    // In a real app, you would authenticate with your backend
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock admin login logic
    console.log("Admin login:", { email: adminEmail, password: adminPassword });
    // In a real app, you would authenticate with your backend
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 gradient-hero">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Target className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold text-foreground">CareerNav</span>
            </div>
            <p className="text-muted-foreground">Welcome back! Please sign in to your account.</p>
          </div>

          <Card className="gradient-card border-0 shadow-hover">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                Choose your account type to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="user" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="user">User Login</TabsTrigger>
                  <TabsTrigger value="admin">Admin Login</TabsTrigger>
                </TabsList>
                
                <TabsContent value="user" className="space-y-4 mt-6">
                  <form onSubmit={handleUserLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="user-email">Email</Label>
                      <Input
                        id="user-email"
                        type="email"
                        placeholder="Enter your email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user-password">Password</Label>
                      <div className="relative">
                        <Input
                          id="user-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={userPassword}
                          onChange={(e) => setUserPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="remember" className="rounded" />
                        <Label htmlFor="remember" className="text-sm">Remember me</Label>
                      </div>
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Button type="submit" variant="hero" className="w-full">
                      Sign In
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="admin" className="space-y-4 mt-6">
                  <form onSubmit={handleAdminLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Admin Email</Label>
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="Enter admin email"
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-password">Password</Label>
                      <div className="relative">
                        <Input
                          id="admin-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter admin password"
                          value={adminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <Button type="submit" variant="hero" className="w-full">
                      Admin Sign In
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary hover:underline font-medium">
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Login;