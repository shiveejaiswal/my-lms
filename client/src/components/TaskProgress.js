import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"
import { CheckCircle2, Circle, Clock } from 'lucide-react'
import axios from '../axiosInstance'

export default function TaskProgress() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks/progress')
        setTasks(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching tasks:', error)
        setLoading(false)
      }
    }
    fetchTasks()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="text-2xl font-bold gradient-text">Task Progress</CardTitle>
        <CardDescription>Track your progress across all assigned tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {tasks.map((task) => (
            <div key={task._id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {task.status === 'completed' ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : task.status === 'in-progress' ? (
                    <Clock className="h-5 w-5 text-blue-500" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-400" />
                  )}
                  <span className="font-medium">{task.title}</span>
                </div>
                <Badge variant={
                  task.status === 'completed' ? 'default' :
                  task.status === 'in-progress' ? 'secondary' : 'outline'
                }>
                  {task.status}
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Progress</span>
                  <span>{task.progress}%</span>
                </div>
                <Progress value={task.progress} className="h-2" />
              </div>
              <p className="text-sm text-muted-foreground">{task.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

