import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Trophy, Target, TrendingUp } from 'lucide-react'
import axios from '../axiosInstance'

export default function TotalScore() {
  const [scoreData, setScoreData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchScoreData = async () => {
      try {
        const response = await axios.get('/api/progress/score')
        setScoreData(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching score data:', error)
        setLoading(false)
      }
    }
    fetchScoreData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold gradient-text">Your Progress</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="card-hover animate-float">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Score</CardTitle>
            <Trophy className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{scoreData?.totalScore}</div>
            <p className="text-xs text-muted-foreground mt-1">
              +{scoreData?.scoreIncrease} from last week
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover animate-float" style={{animationDelay: '0.1s'}}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects Completed</CardTitle>
            <Target className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{scoreData?.completedProjects}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {scoreData?.projectsInProgress} in progress
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover animate-float" style={{animationDelay: '0.2s'}}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{scoreData?.averageScore}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across all completed projects
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

