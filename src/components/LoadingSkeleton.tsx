import { motion } from 'framer-motion';

export function ToolCardSkeleton() {
  return (
    <div className="surface-card animate-pulse rounded-[28px] p-6">
      <div className="flex items-start gap-4">
        <div className="h-14 w-14 rounded-[18px] bg-[var(--background-muted)]" />
        <div className="flex-1">
          <div className="mb-3 h-5 w-3/4 rounded bg-[var(--background-muted)]" />
          <div className="flex gap-2">
            <div className="h-6 w-16 rounded-full bg-[var(--background-muted)]" />
            <div className="h-6 w-20 rounded-full bg-[var(--background-muted)]" />
            <div className="h-6 w-14 rounded-full bg-[var(--background-muted)]" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="h-4 w-20 rounded bg-[var(--background-muted)]" />
        <div className="h-8 w-24 rounded-full bg-[var(--background-muted)]" />
      </div>
    </div>
  );
}

export function HomePageSkeleton() {
  return (
    <div className="mx-auto flex max-w-[1600px] gap-8 p-6">
      <div className="min-w-0 flex-1">
        <div className="mb-8 h-48 w-full animate-pulse rounded-[32px] bg-[var(--background-muted)]" />

        <div className="mb-6 flex items-center justify-between">
          <div className="h-8 w-48 animate-pulse rounded bg-[var(--background-muted)]" />
          <div className="flex gap-2">
            <div className="h-10 w-20 animate-pulse rounded-full bg-[var(--background-muted)]" />
            <div className="h-10 w-20 animate-pulse rounded-full bg-[var(--background-muted)]" />
            <div className="h-10 w-20 animate-pulse rounded-full bg-[var(--background-muted)]" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <ToolCardSkeleton key={i} />
          ))}
        </div>
      </div>

      <div className="hidden w-80 lg:block">
        <div className="surface-card animate-pulse rounded-[28px] p-6">
          <div className="mb-6 h-6 w-32 rounded bg-[var(--background-muted)]" />
          <div className="space-y-3">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-xl bg-[var(--background-muted)]" />
                <div className="h-4 flex-1 rounded bg-[var(--background-muted)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FullPageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
        <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-[rgba(201,100,66,0.18)] border-t-[var(--primary-color)]" />
        <p className="text-[var(--text-secondary)]">加载中...</p>
      </motion.div>
    </div>
  );
}
