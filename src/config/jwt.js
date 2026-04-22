import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = '24h'

// Función para generar token (recibe datos del usuario, no req/res)
export const generateToken = (userData) => {
  const payload = {
    id: userData.id,
    email: userData.email,
    rol: userData.rol
  }
  
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

// Función para verificar token (la usará el middleware)
export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET)
}