import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import TotalScore from "./TotalScore"
import ProjectList from "./ProjectList"
import TaskProgress from "./TaskProgress"
import { Bell, BookOpen, Calendar, ChevronRight, Lightbulb, Rocket, Users } from 'lucide-react'

export const Dashboard = () => {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <h1 className="text-4xl font-bold gradient-text">Welcome back, Alex!</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Notifications
          <Badge variant="secondary">3</Badge>
        </Button>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Active Projects</p>
                <p className="text-2xl font-bold">7</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm font-medium">Team Members</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-sm font-medium">Courses Completed</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Skills Acquired</p>
                <p className="text-2xl font-bold">18</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Deadline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">Project Alpha</div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Due in 3 days</span>
            </div>
            <Progress value={75} className="mt-4" />
            <p className="text-sm text-muted-foreground mt-2">75% Complete</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">92%</div>
            <p className="text-sm text-muted-foreground">Average task completion rate</p>
            <Button variant="link" className="mt-4 p-0">
              View Team Dashboard
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Learning Paths</CardTitle>
            <CardDescription>Boost your skills with these recommended courses</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {['Advanced React Patterns', 'Machine Learning Basics', 'Agile Project Management'].map((course, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{course}</span>
                  <Button variant="outline" size="sm">Enroll</Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { action: 'Completed task', project: 'Project Beta', time: '2 hours ago' },
                { action: 'Submitted report', project: 'Q2 Analysis', time: 'Yesterday' },
                { action: 'Started new course', project: 'TypeScript Mastery', time: '3 days ago' },
              ].map((activity, index) => (
                <li key={index} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-muted-foreground">{activity.project}</p>
                  </div>
                  <Badge variant="outline">{activity.time}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <TotalScore />
      
      <div className="grid gap-6 lg:grid-cols-2">
        <ProjectList />
        <TaskProgress />
      </div>
    </div>
  )
}

