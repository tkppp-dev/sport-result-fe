import React from 'react'
import LeftTeamInfo from '../../common/TeamInfo/LeftTeamInfo'
import RightTeamInfo from '../../common/TeamInfo/RightTeamInfo'
import styles from './KboMatchDetail.module.scss'
import cn from 'classnames'

function KboMatchDetail({ matchDetail }) {
  const { home, away, homeScore, awayScore, homeCode, awayCode, matchProgress, matchDate, startTime } = matchDetail
  const recordUrl = `https://m.sports.naver.com/game/${matchDate}${homeCode}${awayCode}0${matchDate.slice(0,4)}/record`

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <LeftTeamInfo teamName={home} score={homeScore} />
      </div>
      <div className={cn(styles.item, styles['item-wrapper'])}>
        <div className={styles.state}>{matchProgress}</div>
        {matchProgress === '경기전' && <div className={styles['start-time']}>{startTime}</div>}
        {(matchProgress === '종료' || matchProgress === '경기취소') && (
          <a className={styles.record} href={recordUrl}>기록</a>
        )}
      </div>
      <div className={styles.item}>
        <RightTeamInfo className={styles.item} teamName={away} score={awayScore} />
      </div>
    </div>
  )
}

export default KboMatchDetail
