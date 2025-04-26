import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { getCurrentSession, signOut, updateUserPassword } from '@/lib/supabase'
import { useToast } from '@/components/ui/use-toast'

export default function Dashboard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    async function checkSession() {
      const session = await getCurrentSession()
      if (!session) {
        router.push('/login')
      } else {
        // Update password for specific user
        const { error } = await updateUserPassword('michaelsermoneta@gmail.com', 'admin')
        if (error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to update password"
          })
        } else {
          toast({
            title: "Success",
            description: "Password updated successfully"
          })
        }
      }
    }
    checkSession()
  }, [router, toast])

  const handleLogout = async () => {
    setIsLoading(true)
    const success = await signOut()
    if (success) {
      router.push('/login')
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Benvenuto</h1>
            <Button
              onClick={handleLogout}
              variant="outline"
              disabled={isLoading}
            >
              {isLoading ? 'Logging out...' : 'Log out'}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}