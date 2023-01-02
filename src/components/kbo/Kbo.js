import React from 'react'
import usePage from '../../common/hooks/usePage'
import { matchDetails } from '../../dummy-data/kbo'
import KboMatchBoard from './MatchBoard/KboMatchBoard'

function Kbo() {
  usePage('kbo')

  return (
    <div className="main-container">
      <div className="main-wrapper">
        <KboMatchBoard matchDetails={matchDetails} />
      </div>
    </div>
  )
}

export default Kbo
