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
    <div className="mt-4 overflow-x-auto rounded-xl border border-border">
      <div className="min-w-[600px]">
        <div className="grid bg-[var(--surface-soft)] border-b border-border" style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
          {headers.map((h) => (
            <div key={h} className="px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-muted-foreground">
              {h}
            </div>
          ))}
        </div>
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid border-b border-border last:border-b-0"
            style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}
          >
            {row.map((cell, j) => (
              <div key={j} className="px-5 py-4 text-[14px] text-muted-foreground">
                <span className="font-semibold text-foreground">{cell.main}</span>
                {cell.sub && (
                  <span className="block text-[12px] text-muted-foreground/70 mt-0.5">{cell.sub}</span>
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
