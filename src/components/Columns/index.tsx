import { ReactNode } from 'react'

type ColumnProps = {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const Columns = ({ children, cols = 2 }: ColumnProps) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2 md:max-grid-cols-1',
    3: 'grid-cols-3 md:max-grid-cols-1',
    4: 'grid-cols-4 md:max-grid-cols-1',
    5: 'grid-cols-5 md:max-grid-cols-1',
    6: 'grid-cols-6 md:max-grid-cols-1',
    7: 'grid-cols-7 md:max-grid-cols-1',
    8: 'grid-cols-8 md:max-grid-cols-1',
    9: 'grid-cols-9 md:max-grid-cols-1',
    10: 'grid-cols-10 md:max-grid-cols-1',
    11: 'grid-cols-11 md:max-grid-cols-1',
    12: 'grid-cols-12 md:max-grid-cols-1',
  }[cols]

  return <div className={`grid ${gridCols} mt-4 gap-4`}>{children}</div>
}

export default Columns
