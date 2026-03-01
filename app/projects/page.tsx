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
    {
      id: 7,
      title: t("premiumMaterials", "portfolio"),
      category: "material",
      image: "/materials_construction_supplies.png",
      description: t("premiumMaterialsDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["Materiales", "Premium", "Construcción"],
    },
    {
      id: 8,
      title: t("ceramicTilesSale", "portfolio"),
      category: "material",
      image: "/materials_ceramic_tiles.png",
      description: t("ceramicTilesSaleDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["Cerámica", "Porcelanato", "Venta"],
    },
    {
      id: 9,
      title: t("chevronFloor", "portfolio"),
      category: "ceramic",
      image: "/projects/chevron-floor-1.jpg",
      description: t("chevronFloorDesc", "portfolio"),
      date: "2024-03",
      client: "Residencia Florida",
      duration: "2 semanas",
      tags: ["Chevron", "Madera", "Pisos"],
    },
    {
      id: 10,
      title: t("blueWall", "portfolio"),
      category: "bathroom",
      image: "/projects/blue-wall.jpg",
      description: t("blueWallDesc", "portfolio"),
      date: "2024-03",
      client: "Apartamento Modern",
      duration: "1 semana",
      tags: ["Herringbone", "Azul", "Moderno"],
    },
    {
      id: 11,
      title: t("chevronFloor", "portfolio") + " (Vista 2)",
      category: "ceramic",
      image: "/projects/chevron-floor-2.jpg",
      description: t("chevronFloorDesc", "portfolio"),
      date: "2024-03",
      client: "Residencia Florida",
      duration: "2 semanas",
      tags: ["Chevron", "Madera", "Pisos"],
    },
    {
      id: 12,
      title: t("marbleSlab", "portfolio"),
      category: "bathroom",
      image: "/projects/porcelain-slab.jpg",
      description: t("marbleSlabDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["Mármol", "Porcelanato", "Lujo"],
    },
    {
      id: 13,
      title: t("wpcAlaska", "portfolio"),
      category: "material",
      image: "/projects/wpc-alaska.jpg",
      description: t("wpcAlaskaDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Revestimiento", "Alaska Gray"],
    },
    {
      id: 14,
      title: t("chevronFloor", "portfolio") + " (Vista 3)",
      category: "ceramic",
      image: "/projects/chevron-floor-3.jpg",
      description: t("chevronFloorDesc", "portfolio"),
      date: "2024-03",
      client: "Residencia Florida",
      duration: "2 semanas",
      tags: ["Chevron", "Madera", "Pisos"],
    },
    {
      id: 15,
      title: t("blueWall", "portfolio") + " (Vista 2)",
      category: "bathroom",
      image: "/projects/blue-wall-2.jpg",
      description: t("blueWallDesc", "portfolio"),
      date: "2024-03",
      client: "Apartamento Modern",
      duration: "1 semana",
      tags: ["Herringbone", "Azul", "Moderno"],
    },
    {
      id: 16,
      title: t("chevronFloor", "portfolio") + " (Vista 4)",
      category: "ceramic",
      image: "/projects/chevron-floor-4.jpg",
      description: t("chevronFloorDesc", "portfolio"),
      date: "2024-03",
      client: "Residencia Florida",
      duration: "2 semanas",
      tags: ["Chevron", "Madera", "Pisos"],
    },
    {
      id: 17,
      title: t("marbleSlab", "portfolio") + " (Variedad)",
      category: "bathroom",
      image: "/projects/porcelain-slab-2.jpg",
      description: t("marbleSlabDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["Mármol", "Porcelanato", "Lujo"],
    },
    {
      id: 18,
      title: t("wpcAlaska", "portfolio") + " (Muestra)",
      category: "material",
      image: "/projects/wpc-alaska-2.jpg",
      description: t("wpcAlaskaDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Revestimiento", "Alaska Gray"],
    },
    {
      id: 19,
      title: t("stoneWall", "portfolio"),
      category: "ceramic",
      image: "/projects/stone-wall.jpg",
      description: t("stoneWallDesc", "portfolio"),
      date: "2024-03",
      client: "Residencia Elite",
      duration: "1 semana",
      tags: ["Piedra", "Natural", "Pared"],
    },
    {
      id: 20,
      title: t("wpcChampagne", "portfolio"),
      category: "material",
      image: "/projects/wpc-champagne.jpg",
      description: t("wpcChampagneDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Champagne", "Elegante"],
    },
    {
      id: 21,
      title: t("porcelainWhite", "portfolio"),
      category: "bathroom",
      image: "/projects/porcelain-white.jpg",
      description: t("porcelainWhiteDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["Porcelanato", "Blanco", "Lujo"],
    },
    {
      id: 22,
      title: t("darkStairs", "portfolio"),
      category: "ceramic",
      image: "/projects/stairs-dark.jpg",
      description: t("darkStairsDesc", "portfolio"),
      date: "2024-03",
      client: "Dúplex Moderno",
      duration: "2 semanas",
      tags: ["Escaleras", "Madera", "Contraste"],
    },
    {
      id: 23,
      title: t("wpcCaramel", "portfolio"),
      category: "material",
      image: "/projects/wpc-caramel.jpg",
      description: t("wpcCaramelDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Caramel", "Madera"],
    },
    {
      id: 24,
      title: t("porcelainWhite", "portfolio") + " (Vista 2)",
      category: "bathroom",
      image: "/projects/marble-floor-2.jpg",
      description: t("porcelainWhiteDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["Porcelanato", "Blanco", "Lujo"],
    },
    {
      id: 25,
      title: t("wpcMelon", "portfolio"),
      category: "material",
      image: "/projects/wpc-melon.jpg",
      description: t("wpcMelonDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Melon", "Moderno"],
    },
    {
      id: 26,
      title: t("wpcLino", "portfolio"),
      category: "material",
      image: "/projects/wpc-lino.jpg",
      description: t("wpcLinoDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Lino", "Crema"],
    },
    {
      id: 27,
      title: t("luxuryStoneTV", "portfolio"),
      category: "ceramic",
      image: "/projects/luxury-stone-tv.jpg",
      description: t("luxuryStoneTVDesc", "portfolio"),
      date: "2024-03",
      client: "Interior Design",
      duration: "3 semanas",
      tags: ["Piedra", "Chimenea", "Lujo"],
    },
    {
      id: 28,
      title: t("wpcDarkGray", "portfolio"),
      category: "material",
      image: "/projects/wpc-dark-gray.jpg",
      description: t("wpcDarkGrayDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Industrial", "Gris"],
    },
    {
      id: 29,
      title: t("tileDisplay", "portfolio"),
      category: "material",
      image: "/projects/tile-display.jpg",
      description: t("tileDisplayDesc", "portfolio"),
      date: "2024-03",
      client: "Showroom",
      duration: "En stock",
      tags: ["Cerámica", "Exhibición", "Importado"],
    },
    {
      id: 30,
      title: t("wpcGray099", "portfolio"),
      category: "material",
      image: "/projects/wpc-gray-099.jpg",
      description: t("wpcGray099Desc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Gris", "Veteado"],
    },
    {
      id: 31,
      title: t("stoneBedroom", "portfolio"),
      category: "ceramic",
      image: "/projects/stone-bedroom.jpg",
      description: t("stoneBedroomDesc", "portfolio"),
      date: "2024-03",
      client: "Residencia Premium",
      duration: "2 semanas",
      tags: ["Piedra", "Dormitorio", "Elegante"],
    },
    {
      id: 32,
      title: t("wpcBlack", "portfolio"),
      category: "material",
      image: "/projects/wpc-black.jpg",
      description: t("wpcBlackDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Negro", "Minimalista"],
    },
    {
      id: 33,
      title: t("lightWood", "portfolio"),
      category: "ceramic",
      image: "/projects/light-wood.jpg",
      description: t("lightWoodDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "En stock",
      tags: ["Madera", "Clara", "Cerámica"],
    },
    {
      id: 34,
      title: t("showerGlass", "portfolio"),
      category: "bathroom",
      image: "/projects/shower-glass.jpg",
      description: t("showerGlassDesc", "portfolio"),
      date: "2024-03",
      client: "Reforma Baño",
      duration: "1 semana",
      tags: ["Vidrio", "Mampara", "Baño"],
    },
    {
      id: 35,
      title: t("showroomSamples", "portfolio"),
      category: "material",
      image: "/projects/showroom-samples.jpg",
      description: t("showroomSamplesDesc", "portfolio"),
      date: "2024-03",
      client: "Showroom Viera",
      duration: "En stock",
      tags: ["Muestras", "Grama", "Stock"],
    },
    {
      id: 36,
      title: t("deliveryTruck", "portfolio"),
      category: "material",
      image: "/projects/delivery-truck.jpg",
      description: t("deliveryTruckDesc", "portfolio"),
      date: "2024-03",
      client: "Logística Viera",
      duration: "Inmediato",
      tags: ["Entrega", "Logística", "Bodega"],
    },
    {
      id: 37,
      title: t("blueMarbleShower", "portfolio"),
      category: "bathroom",
      image: "/projects/blue-marble-shower.jpg",
      description: t("blueMarbleShowerDesc", "portfolio"),
      date: "2024-03",
      client: "Suite Lujo",
      duration: "2 semanas",
      tags: ["Mármol Azul", "Ducha", "Gama Alta"],
    },
    {
      id: 38,
      title: t("polishedFloor", "portfolio"),
      category: "ceramic",
      image: "/projects/polished-floor.jpg",
      description: t("polishedFloorDesc", "portfolio"),
      date: "2024-03",
      client: "Proyecto Elegance",
      duration: "2 semanas",
      tags: ["Pulido", "Brillo", "Sala"],
    },
    {
      id: 39,
      title: t("glassRailing", "portfolio"),
      category: "material",
      image: "/projects/glass-railing.jpg",
      description: t("glassRailingDesc", "portfolio"),
      date: "2024-03",
      client: "Residencia Modern",
      duration: "2 semanas",
      tags: ["Vidrio", "Escaleras", "Diseño"],
    },
    {
      id: 40,
      title: t("wpcChampagneWood", "portfolio"),
      category: "material",
      image: "/projects/wpc-champagne-wood.jpg",
      description: t("wpcChampagneWoodDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Madera", "Champagne"],
    },
    {
      id: 41,
      title: t("wpcBambooFlat", "portfolio"),
      category: "material",
      image: "/projects/wpc-bamboo-flat.jpg",
      description: t("wpcBambooFlatDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Bambú", "Plano"],
    },
    {
      id: 42,
      title: t("largeStonePanel", "portfolio"),
      category: "material",
      image: "/projects/large-stone-panel.jpg",
      description: t("largeStonePanelDesc", "portfolio"),
      date: "2024-03",
      client: "Lobby Hotel",
      duration: "3 semanas",
      tags: ["Piedra Premium", "Gran Formato", "Revestimiento"],
    },
    {
      id: 43,
      title: t("calacattaSlab", "portfolio") + " (Muestra 1)",
      category: "bathroom",
      image: "/projects/calacatta-slab-1.jpg",
      description: t("calacattaSlabDesc", "portfolio"),
      date: "2024-03",
      client: "Showroom Viera",
      duration: "En stock",
      tags: ["Calacatta", "Porcelanato", "Veteado"],
    },
    {
      id: 44,
      title: t("calacattaSlab", "portfolio") + " (Muestra 2)",
      category: "bathroom",
      image: "/projects/calacatta-slab-2.jpg",
      description: t("calacattaSlabDesc", "portfolio"),
      date: "2024-03",
      client: "Showroom Viera",
      duration: "En stock",
      tags: ["Calacatta", "Porcelanato", "Veteado"],
    },
    {
      id: 45,
      title: t("luxuryDarkBathroom", "portfolio"),
      category: "bathroom",
      image: "/projects/luxury-dark-bathroom.jpg",
      description: t("luxuryDarkBathroomDesc", "portfolio"),
      date: "2024-03",
      client: "Villa Moderna",
      duration: "3 semanas",
      tags: ["Baño de Lujo", "Oscuro", "Premium"],
    },
    {
      id: 46,
      title: t("tealMarble", "portfolio"),
      category: "bathroom",
      image: "/projects/teal-marble-slab.jpg",
      description: t("tealMarbleDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "En stock",
      tags: ["Teal", "Exótico", "Marmoleado"],
    },
    {
      id: 47,
      title: t("wpcRedCherry", "portfolio"),
      category: "material",
      image: "/projects/wpc-red-cherry.jpg",
      description: t("wpcRedCherryDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Cherry", "Cálido"],
    },
    {
      id: 48,
      title: t("calacattaRack", "portfolio"),
      category: "bathroom",
      image: "/projects/calacatta-rack.jpg",
      description: t("calacattaRackDesc", "portfolio"),
      date: "2024-03",
      client: "Showroom Viera",
      duration: "En stock",
      tags: ["Calacatta", "Exhibición", "Porcelanato"],
    },
    {
      id: 49,
      title: t("calacattaDetail", "portfolio"),
      category: "bathroom",
      image: "/projects/calacatta-detail.jpg",
      description: t("calacattaDetailDesc", "portfolio"),
      date: "2024-03",
      client: "Showroom Viera",
      duration: "Producción",
      tags: ["Detalle", "Mármol", "Vetas"],
    },
    {
      id: 50,
      title: t("navyBathroom", "portfolio"),
      category: "bathroom",
      image: "/projects/navy-bathroom.jpg",
      description: t("navyBathroomDesc", "portfolio"),
      date: "2024-03",
      client: "Residencia Navy",
      duration: "2 semanas",
      tags: ["Baño", "Navy", "Dorado"],
    },
    {
      id: 51,
      title: t("tealMarble2", "portfolio"),
      category: "bathroom",
      image: "/projects/teal-marble-2.jpg",
      description: t("tealMarble2Desc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "En stock",
      tags: ["Teal", "Exótico", "Vista 2"],
    },
    {
      id: 52,
      title: t("richWoodWPC", "portfolio"),
      category: "material",
      image: "/projects/rich-wood-wpc.jpg",
      description: t("richWoodWPCDesc", "portfolio"),
      date: "2024-03",
      client: "Venta Directa",
      duration: "Entrega Inmediata",
      tags: ["WPC", "Madera Rica", "Panel"],
    },
    {
      id: 53,
      title: t("porcelainWarehouse", "portfolio"),
      category: "material",
      image: "/projects/porcelain-warehouse.jpg",
      description: t("porcelainWarehouseDesc", "portfolio"),
      date: "2024-03",
      client: "Logística Viera",
      duration: "En stock",
      tags: ["Almacén", "Porcelanato", "Stock"],
    },
    {
      id: 54,
      title: t("blueWhiteSlabs", "portfolio"),
      category: "bathroom",
      image: "/projects/blue-white-slabs.jpg",
      description: t("blueWhiteSlabsDesc", "portfolio"),
      date: "2024-03",
      client: "Diseño Interior",
      duration: "En stock",
      tags: ["Blue & White", "Láminas", "Diseño"],
    },
    {
      id: 55,
      title: t("blackBlueSlabs", "portfolio"),
      category: "bathroom",
      image: "/projects/black-blue-slabs.jpg",
      description: t("blackBlueSlabsDesc", "portfolio"),
      date: "2024-03",
      client: "Showroom Viera",
      duration: "En stock",
      tags: ["Black & Blue", "Mármol", "Contraste"],
    },
    {
      id: 56,
      title: t("luxuryShowerBlack", "portfolio"),
      category: "bathroom",
      image: "/projects/luxury-shower-black.jpg",
      description: t("luxuryShowerBlackDesc", "portfolio"),
      date: "2024-03",
      client: "Reforma Suite",
      duration: "2 semanas",
      tags: ["Hexagonal", "Black & White", "Ducha"],
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
    {
      id: "material",
      label: t("filterMaterial", "portfolio"),
      count: projects.filter((p) => p.category === "material").length,
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = selectedFilter === "all" || project.category === selectedFilter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const sortedProjects = filteredProjects

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



        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedFilter}-${viewMode}-${searchTerm}`}
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
                <Card className="group h-full flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden shrink-0">
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
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                    {viewMode === "list" && (
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm shrink-0">
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

                    <div className="flex flex-wrap gap-2 mb-4 shrink-0 mt-auto">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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
