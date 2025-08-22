import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { useEffect } from 'react'

function WalletButtonInner() {
  const { account, connect, disconnect, wallets } = useWallet()

  if (account?.address) {
    return (
      <button
        onClick={() => disconnect()}
        className="px-3 py-2 text-sm rounded bg-white/10 border border-white/10 hover:bg-white/20 flex items-center gap-2"
      >
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-400"></span>
        Connected
      </button>
    )
  }

  const firstWalletName = wallets.find(w => /petra/i.test(w.name))?.name || wallets[0]?.name

  if (!firstWalletName) {
    return (
      <a
        href="https://chromewebstore.google.com/detail/petra-aptos-wallet/fedcjmjiiakmajmkdmkfdnpfakpanpjk"
        target="_blank"
        rel="noreferrer"
        className="px-3 py-2 text-sm rounded bg-white/10 border border-white/10 hover:bg-white/20"
      >
        Install Petra
      </a>
    )
  }

  return (
    <button
      onClick={() => connect(firstWalletName)}
      className="px-3 py-2 text-sm rounded bg-gradient-to-r from-[#ff00ff] to-[#00e5ff] shadow-glow hover:opacity-90 transition"
    >
      Connect Wallet
    </button>
  )
}

export function WalletSelector() {
  return <WalletButtonInner />
}

