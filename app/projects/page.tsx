"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Grid, List, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { ProjectsHeader } from "@/components/projects-header"
import Link from "next/link"
import Image from "next/image"

const ProjectsPage = () => {
  const { t } = useLanguage()
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("recent")

  const projects = [
    {
      id: 1,
      title: t("modernBathroom", "portfolio"),
      category: "bathroom",
      image: "/luxury-spa-bathroom-jacuzzi.png",
      description: t("modernBathroomDesc", "portfolio"),
      date: "2024-01",
      client: "Familia Rodriguez",
      duration: "3 semanas",
      tags: ["Moderno", "Spa", "Lujo"],
    },
    {
      id: 2,
      title: t("gourmetKitchen", "portfolio"),
      category: "kitchen",
      image: "/gourmet-kitchen.png",
      description: t("gourmetKitchenDesc", "portfolio"),
      date: "2024-02",
      client: "Familia Martinez",
      duration: "4 semanas",
      tags: ["Gourmet", "Moderno", "Funcional"],
    },
    {
      id: 3,
      title: t("ceramicInstallation", "portfolio"),
      category: "ceramic",
      image: "/luxury-ceramic-tile-installation.png",
      description: t("ceramicInstallationDesc", "portfolio"),
      date: "2024-01",
      client: "Oficina Central",
      duration: "2 semanas",
      tags: ["Elegante", "Comercial", "Premium"],
    },
    {
      id: 4,
      title: t("roofRenovation", "portfolio"),
      category: "roof",
      image: "/placeholder-oaqf7.png",
      description: t("roofRenovationDesc", "portfolio"),
      date: "2023-12",
      client: "Residencia Villa",
      duration: "1 semana",
      tags: ["Resistente", "Moderno", "Eficiente"],
    },
    {
      id: 5,
      title: t("luxuryBathroom", "portfolio"),
      category: "bathroom",
      image: "/modern-bathroom-remodel.png",
      description: t("luxuryBathroomDesc", "portfolio"),
      date: "2023-11",
      client: "Familia Lopez",
      duration: "3 semanas",
      tags: ["Lujo", "Spa", "Contemporáneo"],
    },
    {
      id: 6,
      title: t("modernKitchen", "portfolio"),
      category: "kitchen",
      image: "/modern-kitchen.png",
      description: t("modernKitchenDesc", "portfolio"),
      date: "2023-10",
      client: "Familia Garcia",
      duration: "5 semanas",
      tags: ["Moderno", "Funcional", "Elegante"],
    },
  ]

  const filters = [
    { id: "all", label: t("filterAll", "portfolio"), count: projects.length },
    {
      id: "bathroom",
      label: t("filterBathroom", "portfolio"),
      count: projects.filter((p) => p.category === "bathroom").length,
    },
    {
      id: "kitchen",
      label: t("filterKitchen", "portfolio"),
      count: projects.filter((p) => p.category === "kitchen").length,
    },
    {
      id: "ceramic",
      label: t("filterCeramic", "portfolio"),
      count: projects.filter((p) => p.category === "ceramic").length,
    },
    { id: "roof", label: t("filterRoof", "portfolio"), count: projects.filter((p) => p.category === "roof").length },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = selectedFilter === "all" || project.category === selectedFilter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "recent":
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case "name":
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <ProjectsHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="font-medium">{t("title", "portfolio")}</span>
        </div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-blue-600 bg-clip-text text-transparent">
            {t("title", "portfolio")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("subtitle", "portfolio")}</p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={t("searchPlaceholder", "portfolio")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-md bg-background"
          >
            <option value="recent">{t("sortRecent", "portfolio")}</option>
            <option value="oldest">{t("sortOldest", "portfolio")}</option>
            <option value="name">{t("sortName", "portfolio")}</option>
          </select>

          {/* View Mode */}
          <div className="flex border rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter.id)}
              className="flex items-center gap-2"
            >
              {filter.label}
              <Badge variant="secondary" className="text-xs">
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {t("showingResults", "portfolio")} {sortedProjects.length} {t("projects", "portfolio")}
          </p>
        </div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedFilter}-${viewMode}-${searchTerm}-${sortBy}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}
          >
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-400 text-black">
                        {t(
                          `filter${project.category.charAt(0).toUpperCase() + project.category.slice(1)}`,
                          "portfolio",
                        )}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                    {viewMode === "list" && (
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="font-medium">{t("client", "portfolio")}:</span>
                          <span className="ml-2 text-muted-foreground">{project.client}</span>
                        </div>
                        <div>
                          <span className="font-medium">{t("duration", "portfolio")}:</span>
                          <span className="ml-2 text-muted-foreground">{project.duration}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {new Date(project.date).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {sortedProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">{t("noResults", "portfolio")}</h3>
            <p className="text-muted-foreground mb-4">{t("noResultsDesc", "portfolio")}</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedFilter("all")
              }}
            >
              {t("clearFilters", "portfolio")}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage
