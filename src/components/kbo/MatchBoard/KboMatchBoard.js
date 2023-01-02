import React from 'react'
import styles from './KboMatchBoard.module.scss'
import KboMatchDetail from './KboMatchDetail'

function KboMatchBoard({ matchDetails }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>경기 결과</div>
      <div className={styles['match-container']}>
        {matchDetails.length === 0 ? (
          <div className={styles['no-match']}>경기가 없습니다</div>
        ) : (
          <>
            {matchDetails.map((matchDetail) => (
              <KboMatchDetail matchDetail={matchDetail} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default KboMatchBoard
