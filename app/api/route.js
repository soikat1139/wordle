


import { headers } from 'next/headers'



 
export const GET=async(req)=> {
  // const headersList = headers()
  // const referer = headersList.get('referer')
  console.log(req)

 
  return new Response('Hello, Next.js!', {
    status: 200
  })
}