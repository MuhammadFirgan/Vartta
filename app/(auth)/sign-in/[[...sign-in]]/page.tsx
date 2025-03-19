import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className='min-h-screen flex justify-center items-center'>
        <SignIn 
              appearance={{
                variables: {
                   
                  colorInputBackground: '#262626',
                  colorInputText: "white",
                  colorBackground: '#171717'
                },
              }}
        />

    </section>
  )
}