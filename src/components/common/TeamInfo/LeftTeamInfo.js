import React from 'react'
import styles from './TeamInfo.module.scss'

function LeftTeamInfo({ teamName, score }) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{teamName}</div>
      <div className={styles.score}>{score}</div>
    </div>
  )
}

export default LeftTeamInfo
