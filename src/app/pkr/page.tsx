'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

interface PKR {
  id: number
  title: string
  description: string
}

export default function PkrPage() {
  const [pkrs, setPkrs] = useState<PKR[]>([])

  useEffect(() => {
    async function loadPkrs() {
      const { data } = await supabase.from('pkrs').select('*')
      setPkrs(data || [])
    }
    loadPkrs()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">My PKRs</h1>
      <ul>
        {pkrs.map(pkr => (
          <li key={pkr.id} className="mb-1">
            <strong>{pkr.title}</strong> - {pkr.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
