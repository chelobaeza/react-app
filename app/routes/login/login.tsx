import type React from "react"

import { Alert, AlertDescription } from "~/components/Alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/Card"
import { Input } from "~/components/Input"
import { Label } from "~/components/Label"
import { useState, useCallback, memo } from "react"
import { useAuth } from "~/providers/authProvider"
import { Button } from "~/components/Button"
import { Link, useNavigate, useSearchParams } from "react-router"

// Memoize the static content
const LoginHeader = memo(() => (
  <CardHeader className="space-y-1">
    <CardTitle className="text-2xl text-center">Iniciar Sesión</CardTitle>
    <CardDescription className="text-center">
      Ingresa tus credenciales para acceder a tu cuenta
    </CardDescription>
  </CardHeader>
))

LoginHeader.displayName = 'LoginHeader'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const returnTo = searchParams.get("returnTo") || "/"

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, []) // Empty dependency array since it doesn't depend on any props or state

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      await login(formData.email, formData.password)
      navigate(returnTo)
    } catch (err) {
      setError("Credenciales inválidas")
    } finally {
      setLoading(false)
    }
  }, [formData, login, navigate, returnTo]) // Include all dependencies used inside the callback

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Iniciar Sesión</CardTitle>
          <CardDescription className="text-center">Ingresa tus credenciales para acceder a tu cuenta</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Regístrate aquí
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
