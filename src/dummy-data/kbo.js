class MatchDetail {
  constructor(matchProgress, matchDate, startTime, home, away, homeScore, awayScore, homeCode, awayCode) {
    this.home = home
    this.away = away
    this.homeScore = homeScore
    this.awayScore = awayScore
    this.matchProgress = matchProgress
    this.homeCode = homeCode
    this.awayCode = awayCode
    this.matchDate = matchDate
    this.startTime = startTime
  }
}
export const matchDetails = [
  new MatchDetail('경기전','20220901', '18:30','삼성', '기아', 0, 0, 'SS', 'HT'),
  new MatchDetail('1회초', '20220901', '18:30', '삼성', '기아', 3, 0, 'SS', 'HT'),
  new MatchDetail('종료', '20220901', '18:30', '삼성', '기아', 12, 3, 'SS', 'HT')
]
