'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { useTheme } from 'next-themes'
import { LuSun, LuMoon } from 'react-icons/lu'

import { cn } from '@/lib/utils'

import { motion, AnimatePresence } from 'framer-motion'

function Switch({ className, ...props }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <SwitchPrimitive.Root
      checked={isDark}
      onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      className={cn(
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent data-[state=unchecked]:bg-slate-700',
        className,
      )}
      {...props}
    >
      <motion.div
        animate={{ x: isDark ? 20 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="flex h-5 w-5 items-center justify-center rounded-full bg-primary shadow-lg"
      >
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <motion.div
            key={isDark ? 'moon' : 'sun'}
            initial={{ y: -10, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? (
              <LuMoon className="h-3 w-3 text-accent" />
            ) : (
              <LuSun className="h-3 w-3 text-yellow-500" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </SwitchPrimitive.Root>
  )
}

export { Switch }
