import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Progress } from "./ui/progress"
import { Clock, ArrowRight } from 'lucide-react'
import axios from '../axiosInstance'

export default function ProjectList() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects')
        setProjects(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching projects:', error)
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const acceptProject = async (projectId) => {
    try {
      await axios.post(`/api/projects/${projectId}/accept`)
      // Update local state or refetch projects
    } catch (error) {
      console.error('Error accepting project:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold gradient-text">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project._id} className="card-hover">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                <Badge variant={project.status === 'active' ? 'default' : 'secondary'}>
                  {project.status}
                </Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Due: {new Date(project.dueDate).toLocaleDateString()}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {project.status === 'pending' ? (
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white" 
                  onClick={() => acceptProject(project._id)}
                >
                  Accept Project
                </Button>
              ) : (
                <Button className="w-full" variant="outline">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}