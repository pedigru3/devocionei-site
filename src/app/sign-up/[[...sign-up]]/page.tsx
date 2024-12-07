import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp
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