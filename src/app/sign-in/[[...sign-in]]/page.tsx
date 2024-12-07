import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: 
              "bg-primary hover:bg-primary-hover text-white",
            footerActionLink: 
              "text-primary hover:text-primary-hover",
          }
        }}
      />
    </div>
  )
} 