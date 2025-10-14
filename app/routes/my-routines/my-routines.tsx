import {
  Clock,
  Play
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import { Badge } from "~/components/Badge";
import { Button } from "~/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/Card";
import { Progress } from "~/components/Progress";
import { Tabs, TabsContent } from "~/components/Tabs";
import { ROUTES } from "~/routePaths";
import type { Route } from "./+types/my-routines";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Routines" },
    {
      name: "description",
      content: "Ver y gestionar tus rutinas de fisioterapia adquiridas",
    },
  ];
}

// Mock data for purchased routines
const mockPurchasedRoutines = [
  {
    id: 1,
    title: "Rehabilitación de Rodilla",
    description: "Rutina completa para recuperación post-operatoria de rodilla",
    duration: "45 min",
    image: "/knee-rehabilitation.png",
    tags: ["Rehabilitación"],
    progress: 0,
    exercises: 12,
    completedExercises: 0,
    status: "started",
    difficulty: "Intermedio",
  },
  {
    id: 2,
    title: "Fortalecimiento de Espalda",
    description:
      "Ejercicios para aliviar dolor lumbar y fortalecer la musculatura",
    duration: "35 min",
    exercises: 10,
    difficulty: "Principiante",
    image: "/back-strengthening-exercises.png",
    tags: ["Fortalecimiento"],
    progress: 100,
    completedExercises: 10,
    status: "completed",
  },
  {
    id: 3,
    title: "Movilidad de Hombro",
    description:
      "Rutina para mejorar rango de movimiento y flexibilidad del hombro",
    exercises: 8,
    difficulty: "Principiante",
    image: "/shoulder-mobility-exercises.png",
    tags: ["Movilidad", "Flexibilidad"],
    progress: 25,
    completedExercises: 2,
    status: "started",
  },
];

const MyRoutines: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredRoutines = mockPurchasedRoutines.filter((routine) => {
    if (activeTab === "all") return true;
    if (activeTab === "in-progress") return routine.status === "started";
    if (activeTab === "completed") return routine.status === "completed";
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "started":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completada";
      case "started":
        return "En progreso";
      default:
        return "Sin iniciar";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Mis Rutinas</h1>
          <p className="text-muted-foreground">
            Gestiona y sigue el progreso de tus rutinas de fisioterapia
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          {/* TODO: Agregar tabs para filtrar por estado
          <TabsList>
            <TabsTrigger value="all">
              Todas ({mockPurchasedRoutines.length})
            </TabsTrigger>
            <TabsTrigger value="in-progress">
              En Progreso (
              {
                mockPurchasedRoutines.filter(
                  (r) => r.status === "started"
                ).length
              }
              )
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completadas (
              {
                mockPurchasedRoutines.filter((r) => r.status === "completed")
                  .length
              }
              )
            </TabsTrigger>
          </TabsList> */}

          <TabsContent value={activeTab} className="space-y-6">
            {filteredRoutines.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Play className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    No hay rutinas asignadas
                  </h3>
                  {/* <Button asChild>
                    <Link to={ROUTES.HOME.to}>Explorar rutinas</Link>
                  </Button> */}
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredRoutines.map((routine) => (
                  <Card key={routine.id} className="overflow-hidden">
                    <div className="relative">
                      <img
                        src={routine.image || "/placeholder.svg"}
                        alt={routine.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        {routine.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                        <Badge className={getStatusColor(routine.status)}>
                          {getStatusText(routine.status)}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">
                          {routine.title}
                        </CardTitle>
                        <Badge variant="outline">{routine.difficulty}</Badge>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {routine.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progreso</span>
                          <span>{routine.progress}%</span>
                        </div>
                        <Progress value={routine.progress} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>
                            {routine.completedExercises} de {routine.exercises}{" "}
                            ejercicios
                          </span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        {routine.duration ? (
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {routine.duration}
                          </div>
                        ) : null}

                        {/* <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Último acceso:{" "}
                          {new Date(routine.lastAccessed).toLocaleDateString()}
                        </div> */}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button asChild className="flex-1">
                          <Link to={ROUTES.MY_ROUTINES.ID.to(routine.id)}>
                            <Play className="h-4 w-4 mr-2" />
                            {routine.status === "completed"
                              ? "Ver de nuevo"
                              : "Continuar"}
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link to={ROUTES.ROUTINES.ID.to(routine.id)}>
                            Detalles
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyRoutines;
