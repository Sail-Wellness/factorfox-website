interface TableCell {
  main: string
  sub?: string
}

interface LegalDataTableProps {
  headers: string[]
  rows: TableCell[][]
  columnWidths?: string
}

function LegalDataTable({ headers, rows, columnWidths }: LegalDataTableProps) {
  const columns = columnWidths ?? `repeat(${headers.length}, 1fr)`

  return (
    <div className="mt-6 mb-8 overflow-x-auto rounded-2xl border border-[var(--set1-stroke)] bg-[var(--set1-box)] shadow-sm">
      <div className="min-w-[600px]">
        <div className="grid bg-[var(--set1-box)] border-b border-[var(--set1-stroke)]" style={{ gridTemplateColumns: columns }}>
          {headers.map((h, i) => (
            <div key={h} className={`px-[18px] py-3.5 text-eyebrow text-muted-foreground ${i < headers.length - 1 ? 'border-r border-[var(--set1-stroke)]' : ''}`}>
              {h}
            </div>
          ))}
        </div>
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid border-b border-[var(--set1-stroke)] last:border-b-0 bg-background"
            style={{ gridTemplateColumns: columns }}
          >
            {row.map((cell, j) => (
              <div key={j} className={`p-[18px] text-body-sm text-muted-foreground ${j < row.length - 1 ? 'border-r border-[var(--set1-stroke)]' : ''}`}>
                <span className={`block ${j === 0 ? 'font-extrabold text-card-title-sm text-foreground' : ''}`}>{cell.main}</span>
                {cell.sub && (
                  <span className="block text-[11px] tracking-[0.14em] uppercase font-normal font-mono text-muted-foreground/70 mt-1">{cell.sub}</span>
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
