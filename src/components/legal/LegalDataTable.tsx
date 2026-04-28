interface TableCell {
  main: string
  sub?: string
}

interface LegalDataTableProps {
  headers: string[]
  rows: TableCell[][]
}

function LegalDataTable({ headers, rows }: LegalDataTableProps) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--set1-stroke)]">
      <div className="min-w-[600px]">
        <div className="grid bg-[var(--set1-box)] border-b border-[var(--set1-stroke)]" style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
          {headers.map((h) => (
            <div key={h} className="px-5 py-3 text-eyebrow text-muted-foreground">
              {h}
            </div>
          ))}
        </div>
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid border-b border-[var(--set1-stroke)] last:border-b-0"
            style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}
          >
            {row.map((cell, j) => (
              <div key={j} className="px-5 py-4 text-body-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{cell.main}</span>
                {cell.sub && (
                  <span className="block text-body-xs text-muted-foreground/70 mt-0.5">{cell.sub}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export { LegalDataTable }
