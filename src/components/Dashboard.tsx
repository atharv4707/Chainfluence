import { useCallback, useMemo, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'
import { useWallet } from '@aptos-labs/wallet-adapter-react'

const dummyData = [
  { name: 'Mon', clicks: 1200, conversions: 40 },
  { name: 'Tue', clicks: 980, conversions: 32 },
  { name: 'Wed', clicks: 1420, conversions: 51 },
  { name: 'Thu', clicks: 900, conversions: 28 },
  { name: 'Fri', clicks: 1600, conversions: 57 },
  { name: 'Sat', clicks: 1320, conversions: 45 },
  { name: 'Sun', clicks: 1100, conversions: 36 },
]

export default function Dashboard() {
  const { account, signAndSubmitTransaction } = useWallet()
  const [loading, setLoading] = useState(false)
  const isConnected = useMemo(() => !!account?.address, [account?.address])

  const onVerify = useCallback(async () => {
    try {
      setLoading(true)
      if (!isConnected) {
        alert('Connect wallet from navbar to verify on-chain.')
        return
      }
      const tx = {
        data: {
          function: '0x1::coin::transfer',
          typeArguments: ['0x1::aptos_coin::AptosCoin'],
          functionArguments: [String(account!.address), '1'],
        },
        options: {
          maxGasAmount: '200000',
          gasUnitPrice: '100',
          expirationSeconds: '600',
        },
      } as any
      try {
        console.log('Submitting tx payload:', tx)
        const res = await signAndSubmitTransaction(tx)
        console.log('Wallet submitted tx:', res)
        const hash = (res as any)?.hash
        if (hash) {
          window.open(`https://explorer.aptoslabs.com/txn/${hash}?network=devnet`, '_blank')
        }
        alert('Ad verification submitted! Opening explorer...')
      } catch (inner) {
        console.error('Transaction failed:', inner)
        const msg = String((inner as any)?.message || inner || '')
        alert(`Transaction failed. ${msg}`)
      }
    } catch (e) {
      console.error(e)
      alert('Transaction simulation failed in demo. Check console.')
    } finally {
      setLoading(false)
    }
  }, [isConnected, signAndSubmitTransaction])

  return (
    <section id="dashboard" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold glow-text">Interactive Dashboard</h2>
          <button onClick={onVerify} disabled={loading} className="px-4 py-2 rounded bg-gradient-to-r from-[#7a5cff] to-[#00e5ff] shadow-glow disabled:opacity-60">
            {loading ? 'Verifying…' : 'Verify Ad on Blockchain'}
          </button>
        </div>
        <div className="mt-8 rounded-xl p-6 bg-white/5 border border-white/10">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dummyData} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ background: '#0b0b0b', border: '1px solid #1f2937', color: '#e5e7eb' }} />
                <Line type="monotone" dataKey="clicks" stroke="#7a5cff" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="conversions" stroke="#00e5ff" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

