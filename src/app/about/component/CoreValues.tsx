import { Card } from '@/components/ui/card'
import React from 'react'

export default function 
() {
  return (
    <section>
      <Card >
        <ul>
            {[1,2,3,4,5,6,7].map((number) =>(
                 <li key={number}>honesty</li>
            ))}
        </ul>
      </Card>
    </section>
  )
}
