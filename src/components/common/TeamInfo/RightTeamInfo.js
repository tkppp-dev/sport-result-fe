import React from 'react'
import styles from './TeamInfo.module.scss'
import cn from 'classnames'

function RightTeamInfo({ teamName, score }) {
  return (
    <div className={styles.container}>
      <div className={styles.score}>{score}</div>
      <div className={styles['right-name']}>{teamName}</div>
    </div>
  )
}

export default RightTeamInfo
