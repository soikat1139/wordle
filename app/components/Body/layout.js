

import { Black_Ops_One } from 'next/font/google'
 
export const black_Ops_One=Black_Ops_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})



export default function Layout({ children }) {
    return (
      
        
          <div className={black_Ops_One.className}>{children}</div>
     
    )
  }